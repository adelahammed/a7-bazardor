"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
const getcategories = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const categoryres = await res.json();
  return categoryres;
};
const Navbar = () => {
  const pathname = usePathname();
  const [catdata, setCatdata] = useState([]);
  useEffect(() => {
    const loadCategories = async () => {
      const data = await getcategories();
      setCatdata(data);
    };
    loadCategories();
  }, []);
  const Navitems = () => (
    <ul className="menu menu-horizontal px-1">
      {catdata.map((cat, ind) => (
        <li key={ind}>
          <Link
            href={`/category/${cat.slug}`}
            className={pathname === `/${cat.slug}` ? "font-bold" : ""}
          >
            <div className="flex gap-3 items-center">
              <span>{cat.icon}</span> {cat.nameBn}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {catdata.map((cat, ind) => (
                  <li key={ind}>
                    <Link
                      href={`/${cat.slug}`}
                      className={pathname === `/${cat.slug}` ? "font-bold" : ""}
                    >
                      <span>{cat.icon}</span> {cat.nameBn}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
            <Link href="/" className="flex gap-3">
              <Image alt="logo" src={logo} />
              <div>
                <p>বাজার দর</p>
                <p className="text-xs text-neutral-500">{date}</p>
              </div>
            </Link>
          </div>
          <div className="navbar-end gap-6">
            <Link href="/" className="btn border-0 bg-white">
              সাইন ইন
            </Link>
            <Link href="/" className="btn text-white bg-[#05893E]">
              সাইন আপ
            </Link>
          </div>
        </div>
        <Navitems />
      </div>
    </div>
  );
};
export default Navbar;
