import Image from "next/image";
import Link from "next/link";
import React from "react";

const getProductList = async () => {
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
  const { cat } = await params;
  const productList = await getProductList();
  const categorised = productList.filter((product) => product.category == cat);

  return (
    <div className="min-h-[80vh]">
      <div className="bg-[#f0f4f1]  flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full container mx-auto bg-white  rounded-2xl p-4 sm:p-6 shadow-sm flex items-center space-x-4 sm:space-x-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
              <span
                className="text-3xl sm:text-4xl"
                role="img"
                aria-label="vegetable"
              >
                {categorised[0].categoryIcon}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              {categorised[0].categoryNameBn}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
              {`${textBn(categorised.length)}টি পণ্যের আজকের দাম ও পরিবর্তন`}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-end items-center gap-5">
        <span>সাজান</span>
        <fieldset className="fieldset ">
          <select defaultValue="Pick a browser" className="select rounded-2xl">
            <option disabled={true}>ডিফল্ট</option>
            <option value="lowtohigh">দাম কম থেকে বেশি</option>
            <option value="hightolow">দাম বেশি থেকে কম</option>
          </select>
        </fieldset>
      </div>
      <div className="container mx-auto grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categorised.map((product, ind) => (
          <Link key={ind} href={`/products/${product.id}`}>
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
                      product.change.dir == "up"
                        ? "text-red-800"
                        : "text-green-800"
                    }
                  >
                    <span className="text-sm ">
                      {product.change.dir == "up" ? "▲" : "▼"}
                    </span>
                    <span className="text-sm font-bold ">
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

export default page;
