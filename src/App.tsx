import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Navbar } from "./components/Navbar/Navbar";
import { Partner } from "./components/Partner/Partner";
import { AboutUs } from "./components/AboutUs/AboutUs";

export function App() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <Partner />
      <AboutUs />
    </>
  );
}
