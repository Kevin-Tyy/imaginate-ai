"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiPhone } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function page() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  return (
    <div className="">
      <div className="max-w-[1460px] mx-auto w-full h-full min-h-screen flex justify-center items-center">
        <div className="flex w-full justify-center">
          <div className="w-full flex gap-24">
            <section className="w-full">
              <div className="relative w-full">
                <Image src={"/logo/imaginate.svg"} alt="imaginate" height={80} width={80} className="max-h-16 w-44 min-w-44" />
                <div className="space-y-4 mt-16">
                  <h1 className="text-5xl font-semibold">Sign in</h1>
                  <p className="leading-relaxed text-base">
                    If you don’t have an account register <br /> You can{" "}
                    <Link href="/signup" className="text-primary-blue">
                      Register here
                    </Link>
                  </p>
                </div>
                <form className="space-y-16 mt-12 text-base">
                  <div>
                    <label htmlFor="email" className="text-[#999]">
                      Email
                    </label>
                    <div className="h-[50px] group w-full">
                      <div className="flex items-center gap-3">
                        <Image src="/icons/message.svg" alt="" width={24} height={24} />
                        <input
                          className="w-full py-4 outline-none transition duration-100 bg-transparent block placeholder:text-primary-black"
                          type="text"
                          id="email"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div className="h-[2px] overflow-hidden relative flex flex-col items-center justify-center">
                        <div className="h-[2px] w-full bg-[#999] absolute inset-0" />
                        <div className="h-[2px] w-0 group-focus-within:w-full bg-primary-black transition-all duration-300 z-[1]" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="text-[#999]">
                      Password
                    </label>
                    <div className="h-[50px] group w-full">
                      <div className="flex items-center gap-3">
                        <Image src="/icons/padlock.svg" alt="" width={24} height={24} />
                        <input
                          className="w-full py-4 outline-none transition duration-100 bg-transparent block placeholder:text-primary-black"
                          type={isPasswordVisible ? "text" : "password"}
                          id="password"
                          placeholder="Enter your Password"
                        />
                        <button type="button" className="outline-none text-[#999]" onClick={togglePasswordVisibility}>
                          {isPasswordVisible ? <BsEyeSlashFill className="text-[24px]" /> : <BsEyeFill className="text-[24px]" />}
                        </button>
                      </div>
                      <div className="h-[2px] overflow-hidden relative flex flex-col items-center justify-center">
                        <div className="h-[2px] w-full bg-[#999] absolute inset-0" />
                        <div className="h-[2px] w-0 group-focus-within:w-full bg-primary-black transition-all duration-300 z-[1]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-y-2 !mt-10">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="remember-me"
                        className="peer cursor-pointer relative h-5 w-5 shrink-0 appearance-none rounded-sm bg-transparent after:absolute after:left-0 after:top-0 after:h-full after:w-full checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxwYXRoIGQ9Ik00IDEyLjYxMTFMOC45MjMwOCAxNy41TDIwIDYuNSIgc3Ryb2tlPSIjNjM2MzYzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPiA8L2c+PC9zdmc+')] after:bg-[length:18px] after:bg-center after:bg-no-repeat after:content-['']  ring-1 ring-[#4D4D4D] transition duration-300 focus:outline-none"
                      />
                      <span>Remember me</span>
                    </div>
                    <Link href="/forgot-password" className="text-[#4D4D4D]">
                      Forgot your password?
                    </Link>
                  </div>
                  <button className="w-full px-8 h-[58px] rounded-lg font-semibold uppercase bg-gradient-to-r from-primary-purple to-primary-blue text-white shadow-xl shadow-black/20">
                    Login
                  </button>
                </form>

                <div className="mt-10 space-y-10 flex flex-col justify-center items-center text-base">
                  <p className="text-[#999]">Or Continue With</p>
                  <div className="flex gap-5">
                    <button>
                      <Image src="/brands/facebook.svg" alt="" width={45} height={45} />
                    </button>
                    <button>
                      <Image src="/brands/apple.svg" alt="" width={45} height={45} />
                    </button>
                    <button>
                      <Image src="/brands/google.svg" alt="" width={45} height={45} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-primary-black text-white w-full p-20 rounded-2xl flex flex-col justify-between">
              <div className="flex justify-end">
                <BiPhone />
                <p className="">+91 0116 789 754</p>
              </div>
              <div className="h-full w-full flex-1">
                <Image src="/assets/254eca5f17b913c874afb12ee4949f89.png" alt="" width={500} height={500} />
              </div>
              <div className="space-y-3">
                <h1 className="text-5xl font-medium">Sign in to Company</h1>
                <p className="text-lg">Lorem Ipsum is simply</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
