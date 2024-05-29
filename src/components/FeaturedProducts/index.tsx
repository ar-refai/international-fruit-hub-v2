'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";

const FeatProducts = () => {
  return (
    <div className="!bg-white">
      <div className="flex items-center pt-20 justify-center">
        <span className="font-semibold uppercase text-primary">
        <SectionTitle
            title="Some Products"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "300px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 "
      ></div>
      <div className="absolute hidden inset-0 z-10 group-hover:grid place-content-center">
        <p className="bg-gradient-to-br from-black/20 to-black/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default FeatProducts;

const cards = [
  {
    url: "/images/blog/strawberry.png",
    title: "Strawberry",
    id: 1,
  },

  {
    url: "/images/blog/grapes.png",
    title: "Grapes",
    id: 3,
  },
  {
    url: "/images/blog/garlic.png",
    title: "Garlic",
    id: 5,
  },
  {
    url: "/images/blog/beans.png",
    title: "Beans",
    id: 6,
  },
  {
    url: "/images/blog/onions.png",
    title: "Onions",
    id: 7,
  },
  // New items
  {
    url: "/images/blog/artichoke.png",
    title: "Artichoke",
    id: 8,
  },
  {
    url: "/images/blog/cauliflower.png",
    title: "Cauliflower",
    id: 9,
  },
  {
    url: "/images/blog/jute.png",
    title: "Jute Leaves",
    id: 10,
  },
  {
    url: "/images/blog/okra.png",
    title: "Okra",
    id: 11,
  },
  {
    url: "/images/blog/mango.png",
    title: "Mango",
    id: 12,
  },
  {
    url: "/images/blog/peas.png",
    title: "Peas",
    id: 13,
  },
  {
    url: "/images/blog/spinach.png",
    title: "Spinach",
    id: 14,
  },
];