import StorySequence from "@/components/StorySequence";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <StorySequence />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
