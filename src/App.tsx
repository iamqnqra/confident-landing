import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Partner } from "./components/Partner/Partner";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ServiceList } from "./components/ServiceList/ServiceList";
import { Statistics } from "./components/Statistics/Statistics";
import { DentistList } from "./components/DentistsList/DentistsList";
import { Booking } from "./components/Booking/Booking";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Blog } from "./components/Blog/Blog";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <Partner />
      <AboutUs />
      <ServiceList />
      <Statistics />
      <DentistList />
      <Booking />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
}
