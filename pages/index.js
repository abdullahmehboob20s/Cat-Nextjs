import Family from "layouts/Family";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import HowToMint from "layouts/HowToMint";
import MainContent from "layouts/MainContent";
import Mint from "layouts/Mint";

export default function Home() {
  return (
    <div>
      <Hero />
      <Mint />
      <MainContent />
      <HowToMint />
      <Family />
      <Footer />
    </div>
  );
}
