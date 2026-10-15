import React from "react";
import Hero from "@/Component/Hero";
import ProductCard from "@/Component/ProductCard";

const getproducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const getresponse = await res.json();
  return getresponse;
};

const page = async () => {
  const productData = await getproducts();
  const priceIncreased = productData.filter(
    (product) => product.change.dir === "up",
  );
  const sortPriceIncreased = priceIncreased.sort(
    (a, b) => b.change.pct - a.change.pct,
  );
  const limitPriceIncresed = sortPriceIncreased.slice(0, 6);

  const priceDecreased = productData.filter(
    (product) => product.change.dir === "down",
  );

  const sortPriceDecreased = priceDecreased.sort(
    (a, b) => a.change.pct - b.change.pct,
  );
  const limitPriceDecreased = sortPriceDecreased.slice(0, 6);

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto pb-10">
        <div className="">
          <p className="text-2xl pb-2 text-black font-bold px-4 sm:px-8">
            <span className="text-red-700 text-lg">▲</span> আজ দাম বেড়েছে
          </p>
          <ProductCard props={limitPriceIncresed} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pb-10">
        <div className="">
          <p className="text-2xl pb-2 text-black font-bold px-4 sm:px-8">
            <span className="text-green-700 text-lg">▼</span> আজ দাম কমেছে
          </p>

          <ProductCard props={limitPriceDecreased} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-10" id="allproducts">
        <div className="">
          <p className="text-2xl pb-2 text-black font-bold px-4 sm:px-8">
            সব পণ্য
          </p>
          <ProductCard props={productData} />
        </div>
      </div>
    </div>
  );
};

export default page;
