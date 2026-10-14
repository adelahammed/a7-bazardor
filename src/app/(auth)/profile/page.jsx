"use client";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Profile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const updateData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateuserdata = Object.fromEntries(formData.entries());

    const { data, error } = await updateUser({
      ...updateuserdata,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Updated successfull!");
    }

    if (error) {
      toast.error("Something went error!");
    }
  };
  const usersignout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  };

  return (
    <div>
      <div className="min-h-screen bg-[#F0F5F1] px-4 py-5 sm:px-8">
        <div className="mx-auto max-w-[654px]">
          <h1 className="text-[22px] font-bold text-[#26332B]">
            আমার প্রোফাইল
          </h1>
          <p className="mb-5 text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
          </p>

          <div className="mb-5 flex items-center justify-between gap-3 rounded-[14px] border border-[#E0E8E1] bg-[#FAFCFA] p-5">
            <div className="flex min-w-0 items-center gap-3.5">
              <img
                src={user?.image}
                alt="Profile"
                className="h-[60px] w-[68px] shrink-0 rounded-[15px] object-cover"
              />

              <div className="min-w-0">
                <h2 className="text-base font-semibold text-[#26332B]">
                  {user?.name}
                </h2>
                <p className="text-[13px] text-gray-500">{user?.email}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={usersignout}
              className="shrink-0 rounded-lg border border-red-400 px-3 py-2 text-xs text-red-500"
            >
              ↩ সাইন আউট
            </button>
          </div>

          <div className="rounded-[14px] border border-[#E0E8E1] bg-[#FAFCFA] px-[17px] py-5">
            <h3 className="text-sm font-semibold text-[#26332B]">তথ্য</h3>

            <form onSubmit={updateData} className="mt-8 px-1 sm:px-5">
              <label
                htmlFor="name"
                className="mb-1 block text-xs text-[#26332B]"
              >
                নাম
              </label>

              <input
                type="text"
                id="name"
                name="name"
                className="h-[35px] mb-4 w-full rounded-lg border border-[#DFE7E0] bg-transparent px-3 outline-none focus:border-green-600"
              />

              <label
                htmlFor="name"
                className="mb-1 block text-xs text-[#26332B]"
              >
                ছবি
              </label>

              <input
                type="text"
                id="image"
                name="image"
                className="h-[35px] w-full rounded-lg border border-[#DFE7E0] bg-transparent px-3 outline-none focus:border-green-600"
              />

              <button
                type="submit"
                className="mt-[13px] h-[35px] w-full rounded-lg bg-[#078B42] text-xs font-semibold text-white shadow-md hover:bg-green-700"
              >
                আপডেট
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
