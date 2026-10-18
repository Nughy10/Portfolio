'use client';

import { useRef, useState } from 'react';
import { useAnimationFrame, useInView, useReducedMotion } from 'framer-motion';

/*
 * A small palletizing cell drawn in SVG: certification boxes ride a conveyor,
 * a 2-link robot arm picks each one (inverse kinematics) and stacks it on a pallet.
 * All coordinates live in the 840×260 viewBox, so the drawing scales with its width.
 */

const CYCLE = 2.4; // seconds per box
const FLOOR = 248;

// Conveyor
const BELT_X0 = 20;
const BELT_X1 = 545;
const BELT_TOP = 180;
const ENTRY_X = 75; // box centre when it leaves the chute
const PICK_X = 505; // box centre where the robot picks it
const SPEED = (PICK_X - ENTRY_X) / (3 * CYCLE); // three boxes on the belt at a time

// Boxes
const BOX_W = 58;
const BOX_H = 40;

// Robot: shoulder position, link lengths and suction tool length
const SX = 640;
const SY = 190;
const L1 = 100;
const L2 = 100;
const TOOL = 16;

// Pallet: 2 columns × 3 layers
const PALLET_X = 690;
const PALLET_TOP = 236;
const SLOT_X = [725, 785];
const PER_PALLET = 6;

type Point = { x: number; y: number };
type Joints = [number, number];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const ease = (k: number) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);
const wrapAngle = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

// Wrist target for a box whose top-centre should be at (x, top)
const wristFor = (x: number, top: number): Point => ({ x, y: top - TOOL });

const PICK = wristFor(PICK_X, BELT_TOP - BOX_H);
const PICK_APPROACH = { x: PICK_X, y: PICK.y - 60 };

function slotTop(slot: number) {
  const layer = Math.floor(slot / 2);
  return PALLET_TOP - BOX_H * (layer + 1);
}

function placeTarget(slot: number) {
  return wristFor(SLOT_X[slot % 2], slotTop(slot));
}

// Two-link inverse kinematics, always choosing the "elbow up" solution
function ik({ x, y }: Point): Joints {
  const dx = x - SX;
  const dy = y - SY;
  const d = clamp(Math.hypot(dx, dy), 1, L1 + L2 - 0.01);
  const cosElbow = clamp((d * d - L1 * L1 - L2 * L2) / (2 * L1 * L2), -1, 1);
  const base = Math.atan2(dy, dx);
  let best: Joints = [0, 0];
  let bestElbowY = Infinity;
  for (const q2 of [Math.acos(cosElbow), -Math.acos(cosElbow)]) {
    const q1 = wrapAngle(base - Math.atan2(L2 * Math.sin(q2), L1 + L2 * Math.cos(q2)));
    const elbowY = SY + L1 * Math.sin(q1);
    if (elbowY < bestElbowY) {
      bestElbowY = elbowY;
      best = [q1, q2];
    }
  }
  return best;
}

function fk([q1, q2]: Joints) {
  const elbow = { x: SX + L1 * Math.cos(q1), y: SY + L1 * Math.sin(q1) };
  const wrist = { x: elbow.x + L2 * Math.cos(q1 + q2), y: elbow.y + L2 * Math.sin(q1 + q2) };
  return { elbow, wrist };
}

// Straight-line (cartesian) move: used for the vertical approach/retreat
const linear = (a: Point, b: Point, k: number): Joints =>
  ik({ x: lerp(a.x, b.x, ease(k)), y: lerp(a.y, b.y, ease(k)) });

// Joint-space move: the arm swings like a real robot between two poses.
// Plain interpolation (no angle wrapping): with elbow-up poses on both sides the
// elbow straightens through 0° instead of folding the forearm back over itself.
function swing(a: Point, b: Point, k: number): Joints {
  const qa = ik(a);
  const qb = ik(b);
  const e = ease(k);
  return [lerp(qa[0], qb[0], e), lerp(qa[1], qb[1], e)];
}

const RELEASE = 0.6; // cycle phase at which the box is left on the pallet

// Arm pose for a given phase of the pick & place cycle
function armPose(phase: number, slot: number): Joints {
  const place = placeTarget(slot);
  const placeApproach = { x: place.x, y: place.y - 40 };
  const step = (from: number, to: number) => clamp((phase - from) / (to - from), 0, 1);

  if (phase < 0.08) return ik(PICK); // suction on
  if (phase < 0.2) return linear(PICK, PICK_APPROACH, step(0.08, 0.2));
  if (phase < 0.45) return swing(PICK_APPROACH, placeApproach, step(0.2, 0.45));
  if (phase < 0.57) return linear(placeApproach, place, step(0.45, 0.57));
  if (phase < 0.63) return ik(place); // release
  if (phase < 0.73) return linear(place, placeApproach, step(0.63, 0.73));
  if (phase < 0.92) return swing(placeApproach, PICK_APPROACH, step(0.73, 0.92));
  return linear(PICK_APPROACH, PICK, step(0.92, 1));
}

function Box({ x, top, label, opacity = 1 }: { x: number; top: number; label: string; opacity?: number }) {
  return (
    <g transform={`translate(${x - BOX_W / 2} ${top})`} opacity={opacity}>
      <rect width={BOX_W} height={BOX_H} rx={3} fill="#c9a26b" stroke="#8a6a3d" strokeWidth={1.5} />
      <rect x={BOX_W / 2 - 5} width={10} height={BOX_H} fill="#e3c79a" opacity={0.7} />
      <rect x={8} y={BOX_H / 2 - 8} width={BOX_W - 16} height={16} rx={2} fill="#f5ead7" />
      <text
        x={BOX_W / 2}
        y={BOX_H / 2 + 3.5}
        textAnchor="middle"
        fontSize={10}
        fontWeight={700}
        fill="#3b2a14"
        fontFamily="var(--font-mono), monospace"
      >
        {label}
      </text>
    </g>
  );
}

export default function ConveyorLine({ labels, caption }: { labels: string[]; caption: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const visible = useInView(ref, { margin: '80px' });
  const reduceMotion = useReducedMotion();
  // Start with a full pallet, which is also the still frame for reduced motion
  const [time, setTime] = useState(CYCLE * (PER_PALLET - 0.25));

  useAnimationFrame((_, delta) => {
    if (!visible || reduceMotion) return;
    setTime((t) => t + Math.min(delta, 50) / 1000);
  });

  const t = time;
  const cycleIndex = Math.floor(t / CYCLE);
  const phase = t / CYCLE - cycleIndex;
  const labelOf = (k: number) => labels[((k % labels.length) + labels.length) % labels.length];

  // Boxes still travelling on the belt (box k reaches the pick point at t = k·CYCLE)
  const beltBoxes: { k: number; x: number }[] = [];
  for (let k = cycleIndex + 1; k <= cycleIndex + 3; k++) {
    beltBoxes.push({ k, x: PICK_X - (k * CYCLE - t) * SPEED });
  }

  // Pallet contents: box k is released at (k + RELEASE)·CYCLE
  const placed = t >= RELEASE * CYCLE ? Math.floor(t / CYCLE - RELEASE) + 1 : 0;
  const group = placed > 0 ? Math.floor((placed - 1) / PER_PALLET) : 0;
  const onPallet = placed - group * PER_PALLET;
  let palletOpacity = 1;
  if (onPallet === PER_PALLET) {
    // Full pallet: show it for a moment, then clear it for the next one
    const sinceFull = t - (group * PER_PALLET + PER_PALLET - 1 + RELEASE) * CYCLE;
    palletOpacity = clamp(1 - (sinceFull - 0.25 * CYCLE) / (0.55 * CYCLE), 0, 1);
  }

  const holding = phase < RELEASE;
  const slot = cycleIndex % PER_PALLET;
  const { elbow, wrist } = fk(armPose(phase, slot));
  const rollerAngle = (t * SPEED) / 6;

  return (
    <figure className="mb-6">
      <svg
        ref={ref}
        viewBox="0 -24 840 286"
        className="w-full h-auto"
        role="img"
        aria-label={caption}
      >
        {/* Floor */}
        <line x1={0} y1={FLOOR} x2={840} y2={FLOOR} strokeWidth={2} style={{ stroke: 'var(--border-hover)' }} />

        {/* Conveyor legs, belt and rollers */}
        {[40, 290, 530].map((x) => (
          <line key={x} x1={x} y1={BELT_TOP + 14} x2={x} y2={FLOOR} stroke="#4b5563" strokeWidth={6} />
        ))}
        <rect x={BELT_X0} y={BELT_TOP} width={BELT_X1 - BELT_X0} height={14} rx={7} fill="#1f2937" stroke="#4b5563" strokeWidth={2} />
        <line
          x1={BELT_X0 + 8}
          x2={BELT_X1 - 8}
          y1={BELT_TOP + 2}
          y2={BELT_TOP + 2}
          stroke="#6b7280"
          strokeWidth={2}
          strokeDasharray="8 12"
          strokeDashoffset={-((t * SPEED) % 20)}
        />
        {Array.from({ length: 11 }, (_, i) => BELT_X0 + 12 + i * 50).map((x) => (
          <g key={x}>
            <circle cx={x} cy={BELT_TOP + 7} r={5} fill="#374151" stroke="#6b7280" strokeWidth={1.5} />
            <line
              x1={x}
              y1={BELT_TOP + 7}
              x2={x + 4 * Math.cos(rollerAngle)}
              y2={BELT_TOP + 7 + 4 * Math.sin(rollerAngle)}
              stroke="#9ca3af"
              strokeWidth={1.5}
            />
          </g>
        ))}

        {/* Boxes on the belt */}
        {beltBoxes.map(({ k, x }) => (
          <Box key={k} x={x} top={BELT_TOP - BOX_H} label={labelOf(k)} />
        ))}

        {/* Input chute (drawn over the boxes so they appear out of it) */}
        <path
          d={`M 28 92 H 122 L 110 132 V ${BELT_TOP} H 40 V 132 Z`}
          fill="#374151"
          stroke="#6b7280"
          strokeWidth={2}
        />
        <text x={75} y={122} textAnchor="middle" fontSize={20}>
          🎓💻
        </text>

        {/* Pallet */}
        <rect x={PALLET_X} y={PALLET_TOP} width={130} height={12} rx={2} fill="#92633a" stroke="#6b4423" strokeWidth={1.5} />
        <g opacity={palletOpacity}>
          {Array.from({ length: onPallet }, (_, s) => (
            <Box key={s} x={SLOT_X[s % 2]} top={slotTop(s)} label={labelOf(group * PER_PALLET + s)} />
          ))}
        </g>
        <text
          x={PALLET_X + 65}
          y={260}
          textAnchor="middle"
          fontSize={11}
          fontFamily="var(--font-mono), monospace"
          style={{ fill: 'var(--text-muted)' }}
        >
          {`▣ ${onPallet}/${PER_PALLET}`}
        </text>

        {/* Robot: pedestal */}
        <rect x={SX - 20} y={SY + 10} width={40} height={FLOOR - SY - 10} rx={4} fill="#374151" />
        <rect x={SX - 34} y={FLOOR - 8} width={68} height={8} rx={2} fill="#1f2937" />
        <circle cx={SX} cy={SY + 30} r={4} fill={holding ? '#22c55e' : '#f59e0b'} />

        {/* Carried box hangs from the suction cup */}
        {holding && <Box x={wrist.x} top={wrist.y + TOOL} label={labelOf(cycleIndex)} />}

        {/* Robot: links, joints and suction tool */}
        <line x1={wrist.x} y1={wrist.y} x2={wrist.x} y2={wrist.y + TOOL - 4} stroke="#9ca3af" strokeWidth={6} />
        <rect x={wrist.x - 12} y={wrist.y + TOOL - 6} width={24} height={6} rx={2} fill="#6b7280" />
        <line x1={SX} y1={SY} x2={elbow.x} y2={elbow.y} stroke="#f97316" strokeWidth={16} strokeLinecap="round" />
        <line x1={elbow.x} y1={elbow.y} x2={wrist.x} y2={wrist.y} stroke="#fb923c" strokeWidth={11} strokeLinecap="round" />
        <circle cx={SX} cy={SY} r={12} fill="#1f2937" stroke="#f97316" strokeWidth={3} />
        <circle cx={elbow.x} cy={elbow.y} r={8} fill="#1f2937" stroke="#fb923c" strokeWidth={3} />
        <circle cx={wrist.x} cy={wrist.y} r={5} fill="#1f2937" stroke="#fb923c" strokeWidth={2} />
      </svg>
      <figcaption className="mt-2 text-xs text-center terminal-text" style={{ color: 'var(--text-muted)' }}>
        {caption}
      </figcaption>
    </figure>
  );
}
