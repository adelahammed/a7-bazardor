"use client";
import { signUp } from "@/lib/auth-client";
import React from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const Signup = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In successfull!");
      redirect("/");
    }

    if (error) {
      toast.error("Something went error!");
    }
  };

  const signInGoogle = async () => {
    const data = await signUp.social({
      provider: "google",
    });
    return data;
  };

  const signInGithub = async () => {
    const data = await signUp.social({
      provider: "github",
    });
    return data;
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f0f5f1] px-4 py-8 text-[#202a24]">
      <header className="mb-5 text-center">
        <h1 className="text-[22px] font-bold tracking-tight">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-1 text-xs text-[#78817a]">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </header>

      <div className="w-full max-w-[420px] rounded-[14px] border border-[#e0e9e2] bg-[#fbfcfb] p-5">
        <Form
          className="flex w-full flex-col gap-3"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="name"
            validate={(value) => (value.trim() ? null : "নাম লিখুন")}
            className="flex flex-col gap-1.5"
          >
            <Label className="text-xs font-medium text-[#303a33]">নাম</Label>
            <Input
              placeholder="আপনার পুরো নাম"
              className="h-[42px] w-full rounded-lg border border-[#dce2e8] bg-[#fbfcfd] px-3 text-sm outline-none focus:border-[#078b40]"
            />
            <FieldError className="text-xs text-red-600" />
          </TextField>

          <TextField isRequired name="image" className="flex flex-col gap-1.5">
            <Label className="text-xs font-medium text-[#303a33]">ছবি</Label>
            <Input
              placeholder="আপনার ছবির লিংক দিন"
              className="h-[42px] w-full rounded-lg border border-[#dce2e8] bg-[#fbfcfd] px-3 text-sm outline-none focus:border-[#078b40]"
            />
            <FieldError className="text-xs text-red-600" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) =>
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? null
                : "সঠিক ইমেইল ঠিকানা লিখুন"
            }
            className="flex flex-col gap-1.5"
          >
            <Label className="text-xs font-medium text-[#303a33]">ইমেইল</Label>
            <Input
              placeholder="you@example.com"
              className="h-[42px] w-full rounded-lg border border-[#dce2e8] bg-[#fbfcfd] px-3 text-sm outline-none focus:border-[#078b40]"
            />
            <FieldError className="text-xs text-red-600" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
              }
              if (!/[A-Z]/.test(value)) {
                return "কমপক্ষে একটি বড় হাতের অক্ষর দিন";
              }
              if (!/[0-9]/.test(value)) {
                return "কমপক্ষে একটি সংখ্যা দিন";
              }
              return null;
            }}
            className="flex flex-col gap-1.5"
          >
            <Label className="text-xs font-medium text-[#303a33]">
              পাসওয়ার্ড
            </Label>
            <Input
              placeholder="পাসওয়ার্ড লিখুন"
              className="h-[42px] w-full rounded-lg border border-[#dce2e8] bg-[#fbfcfd] px-3 text-sm outline-none focus:border-[#078b40]"
            />
            <Description className="text-[10px] text-[#78817a]">
              কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা
            </Description>
            <FieldError className="text-xs text-red-600" />
          </TextField>

          <TextField
            isRequired
            name="confirmPassword"
            type="password"
            validate={(value) =>
              value.length > 0 ? null : "পাসওয়ার্ড আবার লিখুন"
            }
            className="flex flex-col gap-1.5"
          >
            <Label className="text-xs font-medium text-[#303a33]">
              পাসওয়ার্ড নিশ্চিত করুন
            </Label>
            <Input
              placeholder="পাসওয়ার্ড আবার লিখুন"
              className="h-[42px] w-full rounded-lg border border-[#dce2e8] bg-[#fbfcfd] px-3 text-sm outline-none focus:border-[#078b40]"
            />
            <FieldError className="text-xs text-red-600" />
          </TextField>

          <Button
            type="submit"
            className="mt-1 flex h-9 w-full items-center justify-center gap-2 rounded-[7px] bg-[#078b40] text-xs font-semibold text-white shadow-sm transition hover:bg-[#067936]"
          >
            {/* <Check /> */}
            অ্যাকাউন্ট তৈরি করুন
          </Button>

          <div className="flex w-full items-center gap-3 py-1">
            <div className="h-px flex-1 bg-[#dce4de]" />
            <span className="text-[11px] text-[#747d76]">অথবা</span>
            <div className="h-px flex-1 bg-[#dce4de]" />
          </div>

          <div className="flex w-full flex-row gap-2 max-sm:flex-col">
            <Button
              type="button"
              variant="secondary"
              className="flex h-9 w-full items-center justify-center gap-1 rounded-[7px] border border-[#dfe8e1] bg-transparent px-1 text-[12px] font-bold text-[#29332c] hover:bg-[#f1f6f2]"
              onClick={signInGoogle}
            >
              <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0">
                <path
                  fill="#4285F4"
                  d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
                />
                <path
                  fill="#34A853"
                  d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
                />
                <path
                  fill="#FBBC05"
                  d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
                />
                <path
                  fill="#EA4335"
                  d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.9 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
                />
              </svg>
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="flex h-9 w-full items-center justify-center gap-1 rounded-[7px] border border-[#dfe8e1] bg-transparent px-1 text-[12px] font-bold text-[#29332c] hover:bg-[#f1f6f2]"
              onClick={signInGithub}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 fill-current"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          <p className="w-full pt-1 text-center text-[11px] text-[#69736c]">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-medium text-[#078b40] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </Form>
      </div>

      <Link
        href="/"
        className="mt-5 text-[11px] text-[#818a83] hover:text-[#078b40]"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default Signup;
