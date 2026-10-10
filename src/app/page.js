import React from "react";
import Hero from "@/Component/Hero";
import ProductCard from "@/Component/ProductCard";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <div className="">
          <p className="text-xl text-black font-bold">সব পণ্য</p>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default page;
