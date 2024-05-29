'use client';
// pages/products.tsx
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  type: string;
  colortheame: string;
  image: string; // Ensure this matches the property name
  price: number;
}

interface ProductData {
  status: number;
  data: Product[];
}

const getProducts = async (): Promise<ProductData> => {
  const res = await fetch("http://api.internationalfruithub.com/api/v1/product");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const Products = (): JSX.Element => {
  const [productData, setProductData] = useState<ProductData>({ status: 0, data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        // //console.log(data);  // Log fetched data
        setProductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-20">
      <Breadcrumb
        pageName="Products Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="p-1 flex flex-wrap items-center justify-center">

          <Link href={`/frozen`}>
      <div className="flex-shrink-0 m-6 flex flex-col justify-around items-center relative bg-sky-200 bg-opacity-25 h-[350px] rounded-lg max-w-xs shadow-lg group hover:scale-95 transition-all ease-out duration-500">
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform h-full">
         
          <img className="relative w-40 object-center" src='\images\frozen.png' alt='frozen' />
        </div>  
        <span className="absolute top-0 right-0 text-center justify-center bg-neutral-50 rounded rounded-br-none rounded-bl-2xl rounded-tl-none text-sky-500 text-sm capitalize px-3 py-2 leading-none items-center">
          IQF Product
        </span>
        <div className="relative flex-grow flex items-end text-sky-500 px-6 pb-6 mt-6">
          <div className="flex flex-col text-center justify-center items-center gap-4">
            <span className="text-xl font-semibold uppercase">Frozen Products</span>
          </div>
        </div>
      </div>
    </Link>


            {productData.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
