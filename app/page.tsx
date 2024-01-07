import ExtraProjects from "@/components/ExtraProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LiveProjects from "@/components/LiveProjects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#10101A]">
      <Hero />
      <LiveProjects />
      <ExtraProjects />
      <Footer />
    </main>
  );
}
