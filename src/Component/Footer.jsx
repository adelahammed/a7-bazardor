import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="container mx-auto footer sm:footer-horizontal text-neutral-content justify-between max-sm:justify-center items-center p-4">
      <aside className="grid-flow-col max-sm:justify-center items-center max-sm:mx-auto text-black">
        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
      </aside>
      <aside>
        <p className=" text-black">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
