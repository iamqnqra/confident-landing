import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero_section/HeroSection";
import { Navbar } from "./components/nav/Navbar";
import { Partner } from "./components/partnership/Partner";
import {AboutUs} from "./components/about_us/AboutUs"

export function App() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <Partner />
      <AboutUs/>
    </>
  );
}
