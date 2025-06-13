import { Header } from "./components/header-section/Header";
import { HeroSection } from "./components/hero-section/HeroSection";
import { Navbar } from "./components/navbar/Navbar";
import { Partner } from "./components/partnership/Partner";
import { AboutUs } from "./components/about_us/AboutUs";

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
