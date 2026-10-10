import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

const Hero = () => {
  return (
    <div className=" bg-[#f1f5f0] px-4 py-5 sm:px-8">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-6 rounded-2xl border border-[#e3ebe4] bg-[#fbfcfb] px-6 py-6 sm:px-10 lg:flex-row lg:gap-10">
        <div className="w-full flex-1">
          <span className="mb-2 inline-block rounded-full bg-[#e0f3e6] px-3 py-1 text-[10px] font-semibold text-[#168447]">
            <p className="text-xs text-green-900">{date}</p>
          </span>

          <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#202b23] sm:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 max-w-xl text-xs leading-relaxed text-[#69736b]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারের সর্বশেষ
            বিস্তারিত তথ্য, দ্রুত, সহজে-সর্বদা এবং নির্ভরযোগ্য থেকে আপডেট।
          </p>

          <button className="mt-4 rounded-md bg-[#07883f] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#066f34]">
            সব দাম দেখুন
          </button>
        </div>

        <div className="flex w-full items-center justify-center lg:w-60">
          <Image
            src={banner}
            className="w-full h-auto"
            width={300}
            height={400}
            alt="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
