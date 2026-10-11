import HeroTerminal from '@/components/HeroTerminal';
import AboutCodeEditor from '@/components/AboutCodeEditor';
import SkillsBento from '@/components/SkillsBento';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsGrid from '@/components/ProjectsGrid';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroTerminal />
      <AboutCodeEditor />
      <SkillsBento />
      <ExperienceTimeline />
      <ProjectsGrid />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}