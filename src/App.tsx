import { Hero } from "./components/Hero";
import { Backdrop } from "./components/Backdrop";
import { About } from "./components/sections/About";
import { Work } from "./components/sections/Work";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="relative">
      <Backdrop />

      <div className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
