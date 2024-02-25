import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import TestCarousel from "@/components/sub/testComponent";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
          <Skills />
          <Projects />

      </div>
    </main>
  );
}
