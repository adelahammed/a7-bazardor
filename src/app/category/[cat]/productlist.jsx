"use client";

import Link from "next/link";
import { useState } from "react";

const textBn = (text) => {
  return new Intl.NumberFormat("bn-BD").format(text);
};

const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];

  if (sortBy === "lowtohigh") {
    sortedProducts.sort((a, b) => a.today - b.today);
  } else if (sortBy === "hightolow") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return sortedProducts;
};

const ProductList = ({ categorised }) => {
  const [sortBy, setSortBy] = useState("lowtohigh");

  const sortedProducts = sortProducts(categorised, sortBy);

  if (categorised.length === 0) {
    return (
      <div className="max-w-7xl mx-auto min-h-[80vh] p-8 text-center">
        <h2 className="text-xl font-bold">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
        </h2>
      </div>
    );
  }

  const category = categorised[0];

  return (
    <div className="min-h-[80vh]">
      {/* Category Header */}
      <div className="bg-[#f0f4f1] flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto w-full rounded-2xl bg-white p-4 sm:p-6 shadow-sm flex items-center space-x-4 sm:space-x-6">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center">
              <span
                className="text-3xl sm:text-4xl"
                role="img"
                aria-label="vegetable"
              >
                {category.categoryIcon}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              {category.categoryNameBn}
            </h2>

            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-500">
              {textBn(categorised.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      {/* Sorting */}
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-3 p-4">
        <label htmlFor="sort" className="text-sm">
          সাজান
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select rounded-2xl border border-[#dce6de] bg-white"
        >
          <option value="lowtohigh">দাম কম থেকে বেশি</option>

          <option value="hightolow">দাম বেশি থেকে কম</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-7 p-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="w-full rounded-[24px] border border-[#dce6de] bg-[#fbfcfb] p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-[#f0f5f0] text-3xl">
                  {product.image}
                </div>

                <div>
                  <h2 className="text-2xl font-bold leading-tight text-[#202b23]">
                    {product.nameBn}
                  </h2>

                  <p className="mt-1 text-base text-[#37443b]">প্রতি কেজি</p>
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-sm text-[#37443b]">আজকের দাম</p>

                  <p className="mt-1 text-2xl font-extrabold leading-tight text-[#202b23]">
                    {textBn(product.today)}
                    <span className="text-lg font-medium"> টাকা</span>
                  </p>
                </div>

                <div className="mb-0.5 flex items-center gap-1.5 rounded-full bg-[#f1f5f1] px-3 py-2">
                  <div
                    className={
                      product.change.dir === "up"
                        ? "text-red-800"
                        : "text-green-800"
                    }
                  >
                    <span className="text-sm">
                      {product.change.dir === "up" ? "▲" : "▼"}
                    </span>

                    <span className="ml-1 text-sm font-bold">
                      {textBn(product.change.pct)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
