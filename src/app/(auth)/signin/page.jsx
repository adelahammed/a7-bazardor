"use client";

import { signIn } from "@/lib/auth-client";
import {
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Button,
} from "@heroui/react";
import toast from "react-hot-toast";

const signin = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In successfull!");
      console.log(data);
    }

    if (error) {
      toast.error("Something went error!");
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f0f5f1] px-4 pt-10 text-[#172b24]">
      <h1 className="text-3xl font-bold">সাইন ইন</h1>
      <p className="mt-2 text-center text-sm text-[#718096]">
        বিস্তারিত দাম, বাজার মূল্য ও প্রোডাক্ট দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>

      <div className="mt-7 w-full max-w-[328px] rounded-2xl border border-[#e5e9e6] bg-white px-8 py-7 shadow-sm">
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
          >
            <Label className="text-xs font-medium">ইমেইল</Label>
            <Input
              placeholder="you@example.com"
              className="h-[42px] w-full rounded-lg border border-[#dce2e8] bg-[#fbfcfd] px-3 text-sm outline-none focus:border-[#078b40]"
            />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            minLength={8}
            className="flex flex-col gap-1.5"
          >
            <Label className="text-xs font-medium">পাসওয়ার্ড</Label>
            <Input
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="h-[42px] w-full rounded-lg border border-[#dce2e8] bg-[#fbfcfd] px-3 text-sm outline-none focus:border-[#078b40]"
            />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <Button
            type="submit"
            className="mt-2 h-[41px] w-full rounded-lg bg-[#078b40] text-sm font-semibold text-white hover:bg-[#067936]"
          >
            সাইন ইন
          </Button>

          <div className="my-3 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#dce2e8]" />
            <span className="text-xs text-[#89919a]">অথবা</span>
            <div className="h-px flex-1 bg-[#dce2e8]" />
          </div>

          <div className="grid w-full grid-cols-2 gap-2">
            <Button
              type="button"
              variant="secondary"
              className="flex h-9 items-center justify-center gap-1 rounded-[7px] border border-[#dfe8e1] bg-transparent px-1 text-[10px] font-medium text-[#29332c] hover:bg-[#f1f6f2]"
              onPress={() => {}}
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
              Google
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="flex h-9 items-center justify-center gap-1 rounded-[7px] border border-[#dfe8e1] bg-transparent px-1 text-[10px] font-medium text-[#29332c] hover:bg-[#f1f6f2]"
              onPress={() => {}}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 fill-current"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.8-5.5 6.1.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub
            </Button>
          </div>

          <p className="text-center text-xs text-[#718096]">
            অ্যাকাউন্ট নেই?{" "}
            <a href="/signup" className="font-semibold text-[#078b40]">
              সাইন আপ করুন
            </a>
          </p>
        </Form>
      </div>

      <a href="/" className="mt-5 text-xs text-[#718096] hover:text-[#078b40]">
        ← হোম পেজে ফিরে যান
      </a>
    </main>
  );
};

export default signin;
