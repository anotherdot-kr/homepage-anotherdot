import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Reference from "@/components/Reference";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Reference />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
      <a
        href="#contact"
        className="fixed inset-x-4 bottom-4 z-40 flex h-14 items-center justify-center rounded-full bg-[#496F7D] px-4 text-center text-base font-bold text-white shadow-[0_10px_22px_rgba(17,33,44,0.33)] md:hidden"
      >
        상담 신청하기
      </a>
    </>
  );
}
