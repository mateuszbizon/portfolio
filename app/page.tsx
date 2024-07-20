import About from "@/components/About";
import AsideHeader from "@/components/AsideHeader";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HeaderElements from "@/components/HeaderElements";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderElements />
      <main>
        <div className="container-1 flex">
          <AsideHeader />
          <div className="lg:px-10 w-full lg:w-[calc(100%-250px)]">
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}
