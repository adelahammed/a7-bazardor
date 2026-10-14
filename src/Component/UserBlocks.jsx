"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { Button, Dropdown } from "@heroui/react";

const UserBlocks = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const usersignout = async () => {
    await signOut();
  };
  return (
    <div>
      {user ? (
        <div>
          <details className="dropdown z-10">
            <summary className="btn m-1 flex items-center gap-3 py-2.5">
              {" "}
              <span>
                <img
                  src={user.image}
                  alt=""
                  className="w-[30px] h-[30px] object-cover rounded-4xl"
                />
              </span>
              <span className="flex items-center gap-1">
                {`${user.name}`} <span className="text-[6px]">▼</span>
              </span>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <div className="flex flex-col items-start hover:bg-transparent">
                  <div className="font-bold text-xl">{user.name}</div>
                  <div className="text-sm text-gray-600">{user.email}</div>
                </div>
              </li>
              <li>
                <button className="">👤 আমার প্রোফাইল</button>
              </li>
              <li>
                <button onClick={usersignout} className="text-red-700">
                  ↩ সাইন আউট
                </button>
              </li>
            </ul>
          </details>
        </div>
      ) : (
        <div className="navbar-end gap-6">
          <Link href="/signin" className="btn border-0 bg-white">
            সাইন ইন
          </Link>
          <Link href="/signup" className="btn text-white bg-[#05893E]">
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserBlocks;
