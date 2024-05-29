import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Product from "@/components/Product";
import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import FeaturedProducts  from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Stats from "@/components/Stats";
export const metadata: Metadata = {
  title: "INTERNATIONAL FRUIT HUB",
  description: "INTERNATIONAL FRUIT HUB For Fruits and Vegetables Exporting.  ",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Carousel />
      <Features />
      <FeaturedProducts />
      <Stats/>
      <AboutSectionOne />
      <Brands />
      <Contact/>
    </>
  );
}
