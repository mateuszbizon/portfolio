import About from "@/components/About";
import BackToStart from "@/components/BackToStart";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/Projects";
import RoadMap from "@/components/RoadMap";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container-1 flex">
          <Header />
        </div>
        {/* <About />
        <Projects />
        <RoadMap />
        <Contact /> */}
      </main>
      {/* <BackToStart />
      <Footer /> */}
    </>
  );
}
