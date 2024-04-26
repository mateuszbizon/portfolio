import About from "@/components/About";
import BackToStart from "@/components/BackToStart";
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
      </main>
      <BackToStart />
    </>
  );
}
