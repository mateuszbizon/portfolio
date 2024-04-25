import About from "@/components/About";
import BackToStart from "@/components/BackToStart";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <BackToStart />
    </>
  );
}
