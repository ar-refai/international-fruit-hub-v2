import { Feature } from "@/types/feature";
import { FaTruck, FaGlobe, FaLeaf, FaSeedling, FaCertificate, FaHandsHelping } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaGlobe size={40} className="fill-current" />,
    title: "Global Reach",
    paragraph:
      "Our international network ensures that fresh, high-quality fruits and vegetables reach markets across the globe swiftly and efficiently.",
  },
  {
    id: 2,
    icon: <FaTruck size={40} className="fill-current" />,
    title: "Reliable Logistics",
    paragraph:
      "We provide dependable logistics solutions to guarantee timely delivery of produce, maintaining freshness and quality from farm to table.",
  },
  {
    id: 3,
    icon: <FaLeaf size={40} className="fill-current" />,
    title: "Sustainable Practices",
    paragraph:
      "Committed to sustainability, we implement eco-friendly farming and transportation practices to minimize our environmental footprint.",
  },
  {
    id: 4,
    icon: <FaSeedling size={40} className="fill-current" />,
    title: "Organic Produce",
    paragraph:
      "We offer a wide range of organic fruits and vegetables, cultivated without synthetic fertilizers or pesticides, ensuring natural goodness.",
  },
  {
    id: 5,
    icon: <FaCertificate size={40} className="fill-current" />,
    title: "Quality Assurance",
    paragraph:
      "Our stringent quality control processes ensure that only the best produce reaches our customers, meeting international standards.",
  },
  {
    id: 6,
    icon: <FaHandsHelping size={40} className="fill-current" />,
    title: "Customer Support",
    paragraph:
      "Our dedicated customer support team is always available to assist with inquiries, orders, and any issues to ensure complete satisfaction.",
  },
];

export default featuresData;
