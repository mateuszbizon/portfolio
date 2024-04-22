import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}
