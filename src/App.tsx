import { Hero } from "./components/Hero";
import { About } from "./components/sections/About";
import { Work } from "./components/sections/Work";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0a0a]">
      <Hero />
      <About />
      <Work />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
