import ExtraProjects from "@/components/ExtraProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LiveProjects from "@/components/LiveProjects";
import Skills from "@/components/Skills";
import { Testimonial } from "@/components/Testimonial";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#10101A]">
      <Hero />
      <Skills />
      <Testimonial />
      <LiveProjects />
      <ExtraProjects />
      <Footer />
    </main>
  );
}
