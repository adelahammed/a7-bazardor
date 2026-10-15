import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const getproducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const getresponse = await res.json();
  return getresponse;
};

const MarqueeScroll = async () => {
  const productData = await getproducts();

  return (
    <div>
      <Marquee className=" bg-white border-y-1 border-gray-100">
        {productData.map((product, ind) => {
          return (
            <Link key={ind} href={`/product/${product.slug}`}>
              <div className="flex gap-1 items-center px-5 py-2 border-r-1 border-gray-100">
                <div>{product.image}</div>
                <div>{product.nameBn}</div>
                <div>
                  {new Intl.NumberFormat("bn-BD").format(product.today)}{" "}
                  টাকা/কেজি
                </div>
                <div
                  className={
                    product.change.dir == "up"
                      ? "text-red-800"
                      : "text-green-800"
                  }
                >
                  <span>{product.change.dir == "up" ? "▲" : "▼"}</span>
                  {new Intl.NumberFormat("bn-BD").format(product.change.pct)} %
                </div>
              </div>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeScroll;
