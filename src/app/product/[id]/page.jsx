import Link from "next/link";
import React from "react";

const getProductDetails = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const getresponse = await res.json();
  return getresponse;
};
const textBn = (text) => {
  return new Intl.NumberFormat("bn-BD").format(text);
};

const page = async ({ params }) => {
  const { id } = await params;
  const productDetails = await getProductDetails();

  const currentProduct = productDetails.find((product) => product.slug == id);

  const lowestPriceInMarket = Math.min(
    ...currentProduct.markets.map((min) => min.min),
  );

  const higestPriceInMarket = Math.max(
    ...currentProduct.markets.map((max) => max.max),
  );

  return (
    <div className=" bg-[#eff2ee] text-[#1c1c1c] font-sans p-4 sm:p-6 md:p-10 flex justify-center items-start">
      <div className="w-full max-w-5xl">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6">
          <Link href="/">হোম</Link>
          <span className="text-gray-400">&gt;</span>
          <Link href={`/category/${currentProduct.category}`}>
            {currentProduct.categoryNameBn}
          </Link>

          <span className="text-gray-400">&gt;</span>

          <span className="text-gray-900 font-medium">
            <Link href={`/product/${currentProduct.slug}`}>
              {currentProduct.nameBn}
            </Link>
          </span>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-5">
            <div className="w-50 h-50 sm:w-24 sm:h-24 bg-[#f3f5f3] rounded-2xl flex items-center justify-center shrink-0">
              {currentProduct.image}
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
                {currentProduct.nameBn}
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm mb-2">
                প্রতি কেজি · চাল
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                গতকালকের তুলনায় আজ দাম{" "}
                {currentProduct.today > currentProduct.yesterday ? (
                  <span className="font-bold text-gray-900">
                    বেড়েছে ·{" "}
                    {textBn(currentProduct.today - currentProduct.yesterday)}{" "}
                    টাকা
                  </span>
                ) : (
                  <span className="font-bold text-gray-900">
                    কমেছে ·{" "}
                    {textBn(currentProduct.yesterday - currentProduct.today)}
                    টাকা
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="bg-[#eef1ee] rounded-2xl p-4 sm:p-5 text-center min-w-[150px] w-full md:w-auto self-stretch md:self-auto flex flex-col justify-center items-center">
            <span className="text-xs text-gray-600 mb-1">আজকের দাম</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {textBn(currentProduct.today)}
            </div>
            <span className="text-xs text-gray-600 mt-0.5 mb-1.5">
              টাকা / কেজি
            </span>
            <div
              className={
                currentProduct.change.dir == "up"
                  ? "text-red-800"
                  : "text-green-800"
              }
            >
              <span className="text-sm ">
                {currentProduct.change.dir == "up" ? "▲ " : "▼ "}
              </span>
              <span className="text-sm font-bold ">
                {textBn(currentProduct.change.pct)} %
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5">
              <span className="text-xs text-gray-500 block mb-2">
                সর্বনিম্ন দাম
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-[#108e50] mb-2">
                {textBn(lowestPriceInMarket)} টাকা
              </div>
              <span className="text-xs text-gray-500">
                সবচেয়ে কম দামের বাজার
              </span>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-2xl p-5">
              <span className="text-xs text-gray-500 block mb-2">
                সর্বাধিক দাম
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-[#d93838] mb-2">
                {textBn(higestPriceInMarket)} টাকা
              </div>
              <span className="text-xs text-gray-500">
                সবচেয়ে বেশি দামের বাজার
              </span>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-2xl p-5">
              <span className="text-xs text-gray-500 block mb-2">গড় দাম</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#059669] mb-2">
                {textBn((higestPriceInMarket + lowestPriceInMarket) / 2)} টাকা
              </div>
              <span className="text-xs text-gray-500">
                প্রতি কেজি-এর হিসাবে
              </span>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-12 px-4 py-3 bg-[#fafbfa] rounded-t-xl text-xs sm:text-sm font-semibold text-gray-500 border-b border-gray-200/70">
                <div className="col-span-3">বাজার</div>
                <div className="col-span-3">বিভাগ</div>
                <div className="col-span-2 text-right">সর্বনিম্ন</div>
                <div className="col-span-2 text-right">সর্বাধিক</div>
                <div className="col-span-2 text-right">গড়</div>
              </div>

              <div className="divide-y divide-gray-100">
                {currentProduct.markets.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 px-4 py-3.5 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition-colors items-center"
                  >
                    <div className="col-span-3 font-medium text-gray-900">
                      {item.market}
                    </div>
                    <div className="col-span-3 text-gray-600">
                      {item.division}
                    </div>
                    <div className="col-span-2 text-right text-gray-600">
                      {textBn(item.min)} টাকা
                    </div>
                    <div className="col-span-2 text-right text-gray-600">
                      {textBn(item.max)} টাকা
                    </div>
                    <div className="col-span-2 text-right font-bold text-gray-900">
                      {textBn((item.max + item.min) / 2)} টাকা
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
