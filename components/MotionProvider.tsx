'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

// Honour the OS "reduce motion" setting in every framer-motion animation:
// movement is dropped and only opacity fades remain
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
