import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ServicesSection from "@/components/ServicesSection";

import { Metadata } from "next";
import { FaGlobe,FaUsers,  } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Our Services ",
  description: "This is our services",
  // other metadata
};

async function fetchServices() {
  const res = await fetch('https://api.example.com/services'); // Replace with your API endpoint
  if (!res.ok) {
    throw new Error('Failed to fetch services');
  }
  return res.json();
}
const Services = () => {
  return (
    <div className="mt-20">
      <Breadcrumb
        pageName="Our Services"
        description="The company offers a trio of essential brokering services: connecting buyers with sellers,
        negotiating deals, and providing valuable market insights. Currently, International Fruit Hub is
        dedicated solely to these brokering services, ensuring a focused and expert approach in this
        domain. "
      />
      <ServicesSection />
    
    </div>
  );
};

export default Services;
