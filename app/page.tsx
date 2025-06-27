import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Footer from "@/components/main/Footer";
import Experience from "@/components/main/Experience";
import ContactForm from "@/components/main/ContactForm";
import { MyCodeEditor } from "@/components/main/CodeEditor";

export default function Home() {
  return (
    <main className="h-full w-full z-20">
      <div className="flex flex-col gap-20 z-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Experience />
        <div className="flex justify-between w-full flex-wrap p-6">
          <MyCodeEditor />
          <ContactForm />
        </div>
        <Footer />
      </div>
    </main>
  );
}
