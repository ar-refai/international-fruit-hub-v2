import { Product } from "@/types/Product";

const productData: Product[] = [
  {
    id: 1,
    title: "Banana",
    paragraph:
      "Bananas are a great source of potassium and other essential nutrients. They are delicious and can be enjoyed in various ways, such as in smoothies, oatmeal, or simply on their own.",
    image: "/images/blog/banana.png",

    tags: ["fruit", "banana"],
    price: 12,
  },
  {
    id: 2,
    title: "Apple",
    paragraph:
      "Apples are rich in antioxidants and dietary fiber, making them an excellent choice for a healthy snack. They come in various varieties and can be enjoyed fresh or cooked.",
    image: "/images/blog/apple.png",

    tags: ["fruit", "apple"],
    price: 13,
  },
  {
    id: 3,
    title: "Strawberry",
    paragraph:
      "Strawberries are not only delicious but also packed with vitamin C and antioxidants. They are versatile and can be added to salads, desserts, or enjoyed on their own.",
    image: "/images/blog/strawberry.png",

    tags: ["fruit", "strawberry"],
    price: 21,
  },
  {
    id: 4,
    title: "Grapes",
    paragraph:
      "Grapess are known for their high vitamin C content and refreshing taste. They can be juiced, eaten fresh, or used in various recipes, adding a burst of citrus flavor.",
    image: "/images/blog/grapes.png",
    tags: ["fruit", "Grapes"],
    price: 23,
  },
  {
    id: 5,
    title: "Garlic",
    paragraph:
      "Garlic are known for their high vitamin C content and refreshing taste. They can be juiced, eaten fresh, or used in various recipes, adding a burst of citrus flavor.",
    image: "/images/blog/garlic.png",
    tags: ["Vegitables", "Garlic"],
    price: 23,
  },
  {
    id: 6,
    title: "Beans",
    paragraph:
      "Beans are known for their high vitamin C content and refreshing taste. They can be juiced, eaten fresh, or used in various recipes, adding a burst of citrus flavor.",
    image: "/images/blog/beans.png",
    tags: ["Vegitables", "Beans"],
    price: 23,
  },
  {
    id: 6,
    title: "Onions",
    paragraph:
      "Onions are known for their high vitamin C content and refreshing taste. They can be juiced, eaten fresh, or used in various recipes, adding a burst of citrus flavor.",
    image: "/images/blog/onions.png",
    tags: ["Vegitables", "Onions"],
    price: 23,
  },
];

export default productData;
