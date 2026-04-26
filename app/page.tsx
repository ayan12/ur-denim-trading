import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Divider from "@/components/Divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <Products />
      <Divider />
      <About />
      <Divider />
      <Contact />
      <Divider />
      <FAQ />
    </>
  );
}
