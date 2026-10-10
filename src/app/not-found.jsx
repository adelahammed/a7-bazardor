import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="card w-full border-0 card-xl">
        <div className="card-body text-center">
          <h1 className="text-7xl font-bold text-red-500">৪০৪</h1>
          <h2 className="card-title text-3xl font-bold mx-auto">
            পেজটি খুজে পাওয়া যায়নি।
          </h2>
          <p className="pb-2 text-md text-gray-500"></p>
          <div className="justify-center card-actions">
            <Link href="/" className="btn rounded-full text-black">
              হোমে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
