import About from "@/components/About";
import BackToStart from "@/components/BackToStart";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RoadMap from "@/components/RoadMap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Projects />
        <RoadMap />
        <Contact />
      </main>
      <BackToStart />
    </>
  );
}
