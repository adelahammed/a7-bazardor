import Link from "next/link";
import React from "react";

const textBn = (text) => {
  return new Intl.NumberFormat("bn-BD").format(text);
};

const ProductCard = ({ props }) => {
  return (
    <div>
      <p className="pb-5">{`মোট ${textBn(props.length)}টি পণ্য দেখানো হচ্ছে`}</p>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {props.map((product, ind) => (
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

export default ProductCard;
