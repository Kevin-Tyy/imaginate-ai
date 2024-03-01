import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import Logo from "./shared/Logo";

export default function Footer() {
  return (
    <footer className="mt-20 px-3 md:px-12">
      <div className="max-w-[1560px] mx-auto">
        <Logo />
        <div className="w-full flex flex-col lg:flex-row gap-10 justify-between mt-6">
          <div className="w-full">
            <h1 className="font-bold text-lg">Subscribe</h1>
            <p className="text-[#8E93A4] mt-3">Join our newsletter to stay up to date on features and releases.</p>
            <div className="bg-white p-4 flex rounded-2xl gap-2 mt-7 lg:max-w-2xl">
              <div className="bg-[#F6F7F9] p-3 rounded-xl">
                <Image src="/icons/sms.svg" alt="sms" width={35} height={35} />
              </div>
              <input type="text" className="w-full flex-1 outline-none px-2 rounded-xl" placeholder="Enter your email" />
              <button className="bg-primary-blue text-white px-8 py-5 rounded-xl">Subscribe</button>
            </div>
            <p className="text-[#8E93A4] mt-6">
              By subscribing you agree to with our{" "}
              <Link href="#" className="text-primary-blue underline">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="w-full lg:max-w-xl flex justify-between">
            <div className="space-y-6">
              <h1 className="font-bold text-lg">Product</h1>
              <ul className="space-y-5">
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">AI Assistant</Link>
                </li>
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">AI Assistant</Link>
                </li>
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">Feature</Link>
                </li>
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">Pricing</Link>
                </li>
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">Lorem ipsum</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h1 className="font-bold text-lg">Company</h1>
              <ul className="!space-y-5">
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">About</Link>
                </li>
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">Support</Link>
                </li>
                <li className="text-[#918EA4] hover:underline">
                  <Link href="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#E0E4EB] flex flex-col-reverse md:flex-row gap-8 justify-between items-center py-16 mt-16">
          <p>©2024 Company Name. All right reserved.</p>
          <div className="flex gap-2">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="bg-[#A8A8A8] px-4 py-[18px] text-white rounded-xl hover:bg-primary-blue transition duration-300">
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="bg-[#A8A8A8] px-4 py-[18px] text-white rounded-xl hover:bg-primary-blue transition duration-300">
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              className="bg-[#A8A8A8] px-4 py-[18px] text-white rounded-xl hover:bg-primary-blue transition duration-300">
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="bg-[#A8A8A8] px-4 py-[18px] text-white rounded-xl hover:bg-primary-blue transition duration-300">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
