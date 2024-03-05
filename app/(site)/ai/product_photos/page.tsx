import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Faq from "../../company/components/Faq";
import { CiImageOn } from "react-icons/ci";
import { TbDownload } from "react-icons/tb";
import Link from "next/link";
import Slider from "./components/ImageSlider";

export default function page() {
  return (
    <main>
      <div className="bg-gradient-to-b from-white to-[#F4F3FF]">
        <div className=" bg-[url('/backgrounds/products_page_hero.svg')] bg-cover relative z-[1]">
          <section className="min-h-screen py-20 max-w-[1560px] mx-auto flex gap-20 items-center">
            <div className="w-full flex flex-col space-y-8">
              <h2 className="text-xl font-semibold">
                <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">Products Before and After</span> <span>🔥</span>
              </h2>
              <h1 className="text-5xl font-bold capitalize leading-normal text-[#191D39] !mt-4">
                Business Perfection: AI Product Photos in <span className="text-primary-purple">3 Clicks</span>
              </h1>
              <p className="leading-loose">
                Skyrocket Your sales, Traffic, and Customer Engagement With{" "}
                <span className="bg-gradient-to-r from-primary-blue to-primary-purple text-transparent bg-clip-text">
                  AI-Driven Product Photos in 60 Seconds
                </span>
              </p>
              <div className="flex items-center gap-10">
                <button className="w-full bg-gradient-to-r from-primary-purple to-primary-blue text-white p-4 rounded-xl hover:scale-105 transition duration-300">
                  Get AI Product Photo{" "}
                </button>
                <p className="w-full">Commitment Free : Cancel Anytime!</p>
              </div>
              <div>
                <Image src="/dummy-people.png" alt="" width={220} height={100} draggable={false} className="cursor-pointer" />
                <p>
                  <span className="text-primary-blue">6887 </span>People Can't Be Wrong
                </p>
              </div>
              <div className="flex items-center gap-10 !mt-20">
                <Image
                  src="/assets/mac-support.png"
                  alt=""
                  width={250}
                  height={300}
                  className="cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl rounded-2xl"
                />
                <Image
                  src="/assets/windows-support.png"
                  alt=""
                  width={250}
                  height={300}
                  className="cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full">
              <div>
                <video autoPlay loop>
                  <source src="/videos/-e4e3-4e2a-a3ed-22b1dfee17da.mp4" />
                </video>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="py-20 relative max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">Highlights </span> <span>🔥</span>
          </h2>
          <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-center text-[#191D39] !mt-4">Our Product Highlights </h1>
          <p>Let AI Generate Breath-taking Visuals for You Today!</p>
        </div>
        <div className="flex mt-16 gap-16">
          <div className="w-full grid grid-cols-2 gap-x-20 gap-y-14">
            <div className="flex items-start gap-5 group cursor-pointer">
              <div className="p-2 bg-white group-hover:bg-gradient-to-b from-primary-purple to-primary-blue rounded-2xl transition duration-300">
                <Image src="/svgs/visual-design.svg" alt="" width={40} height={40} />
              </div>
              <div className="space-y-5">
                <h1 className="text-2xl font-semibold">Breath-Taking Visuals!</h1>
                <p className="text-primary-grey leading-relaxed">
                  Turn Product Photos Into <span className="font-semibold">Breath-Taking Visuals!</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 group cursor-pointer">
              <div className="p-2 bg-white group-hover:bg-gradient-to-b from-primary-purple to-primary-blue rounded-2xl transition duration-300">
                <Image src="/svgs/shine.svg" alt="" width={40} height={40} />
              </div>
              <div className="space-y-5">
                <h1 className="text-2xl font-semibold">Shine Like Never Before</h1>
                <p className="text-primary-grey leading-relaxed">Make Your Product Photos Shine Like Never Before </p>
              </div>
            </div>
            <div className="flex items-start gap-5 group cursor-pointer">
              <div className="p-2 bg-white group-hover:bg-gradient-to-b from-primary-purple to-primary-blue rounded-2xl transition duration-300">
                <Image src="/svgs/save-time.svg" alt="" width={40} height={40} />
              </div>
              <div className="space-y-5">
                <h1 className="text-2xl font-semibold">Save Time & Money</h1>
                <p className="text-primary-grey leading-relaxed">Save Time & Money On Expensive Photo Studios </p>
              </div>
            </div>
            <div className="flex items-start gap-5 group cursor-pointer">
              <div className="p-2 bg-white group-hover:bg-gradient-to-b from-primary-purple to-primary-blue rounded-2xl transition duration-300">
                <Image src="/svgs/single-money.svg" alt="" width={40} height={40} />
              </div>
              <div className="space-y-5">
                <h1 className="text-2xl font-semibold">Single Payment</h1>
                <p className="text-primary-grey leading-relaxed">Enjoy Premium Features with a Single Payment </p>
              </div>
            </div>
            <div className="flex items-start gap-5 group cursor-pointer">
              <div className="p-2 bg-white group-hover:bg-gradient-to-b from-primary-purple to-primary-blue rounded-2xl transition duration-300">
                <Image src="/svgs/save-time.svg" alt="" width={40} height={40} />
              </div>
              <div className="space-y-5">
                <h1 className="text-2xl font-semibold">Studio-Quality</h1>
                <p className="text-primary-grey leading-relaxed">Get Studio-Quality Product Shots in 60 sec </p>
              </div>
            </div>
            <div className="flex items-start gap-5 group cursor-pointer">
              <div className="p-2 bg-white group-hover:bg-gradient-to-b from-primary-purple to-primary-blue rounded-2xl transition duration-300">
                <Image src="/svgs/photography.svg" alt="" width={40} height={40} />
              </div>
              <div className="space-y-5">
                <h1 className="text-2xl font-semibold">AI-Driven Product Photography</h1>
                <p className="text-primary-grey leading-relaxed">AI-Driven Product Photography Online Generator </p>
              </div>
            </div>
          </div>
          <div className="w-4/5">
            <Image src="/assets/home-highlights0.svg" alt="" width={1000} height={500} />
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-b from-white to-[#F4F3FF] p-12 my-10 space-y-6 rounded-3xl">
        <h1 className="text-xl text-center">Trusted by the world’s fastest-growing companies 🚀</h1>
        <Marquee speed={35} className="py-10">
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/segment.svg" alt="" width={150} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/hubSpot.svg" alt="" width={130} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/asana.svg" alt="" width={150} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/intercom.svg" alt="" width={150} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/webflow.svg" alt="" width={140} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/quora.svg" alt="" width={120} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/airbnb.svg" alt="" width={150} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/amazon.svg" alt="" width={130} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/microsoft.svg" alt="" width={150} height={30} />
          </div>
          <div className="flex justify-center w-full min-w-[360px]">
            <Image src="/logo/wix.svg" alt="" width={70} height={70} />
          </div>
        </Marquee>
      </section>
      <section className="py-20 relative z-[1] max-w-[1560px] mx-auto">
        <div className="flex flex-col space-y-8">
          <h2 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">Products Before and After</span> <span>🔥</span>
          </h2>
          <h1 className="text-5xl font-bold capitalize leading-normal text-[#191D39] !mt-4">Affordable Professional Product Photography </h1>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="px-16 py-20 bg-white w-full rounded-[40px] flex ">
            <div className="w-full space-y-6">
              <div className="bg-gradient-to-b from-primary-purple to-primary-blue w-fit p-4 rounded-2xl">
                <Image src="/svgs/ecommerce.svg" alt="" width={44} height={44} />
              </div>
              <h1 className="text-[40px] font-semibold leading-normal">E-commerce Stores</h1>
              <p className="leading-loose max-w-xl !mt-3">
                Are you tired of generic, uninspiring product shots? Watch how CreativioAI can take a simple photo and transform it into a persuasive,
                high-converting masterpiece.
              </p>
              <Link href="#">
                <button className="border text-primary-blue hover:text-white border-primary-blue hover:bg-primary-blue rounded-xl px-10 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                  Try for free
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Slider first_image_url="/assets/ecommerce-img1.png" second_image_url="/assets/ecommerce-img2.png" />
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="w-full">
            <Slider first_image_url="/assets/restaurants-img1.png" second_image_url="/assets/restaurants-img2.png" />
          </div>
          <div className="px-16 py-20 w-full rounded-[40px] flex ">
            <div className="w-full space-y-6">
              <div className="bg-gradient-to-b from-primary-purple to-primary-blue w-fit p-4 rounded-2xl">
                <Image src="/svgs/ecommerce.svg" alt="" width={44} height={44} />
              </div>
              <h1 className="text-[40px] font-semibold leading-normal">Restaurants</h1>
              <p className="leading-loose max-w-xl !mt-3">
                Make every dish look like a culinary work of art. CreativioAI brings out the vibrant colors and textures that make people want to dine in.
              </p>
              <Link href="#">
                <button className="border text-primary-blue hover:text-white border-primary-blue hover:bg-primary-blue rounded-xl px-10 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                  Try for free
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="px-16 py-20 w-full rounded-[40px] flex ">
            <div className="w-full space-y-6">
              <Image src="/svgs/social-media.svg" alt="" width={60} height={60} />
              <h1 className="text-[40px] font-semibold leading-normal">Social Media Agencies</h1>
              <p className="leading-loose max-w-xl !mt-3">
                Elevate your clients' brand stories with visuals that pop. Create content that’s not just scroll-stopping but also engagement-driving.{" "}
              </p>
              <Link href="#">
                <button className="border text-primary-blue hover:text-white border-primary-blue hover:bg-primary-blue rounded-xl px-10 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                  Try for free
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Slider first_image_url="/assets/social-media-img1.png" second_image_url="/assets/social-media-img2.png" />
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="w-full">
            <Slider first_image_url="/assets/influencers-img1.png" second_image_url="/assets/influencers-img2.png" />
          </div>
          <div className="px-16 py-20 w-full rounded-[40px] flex ">
            <div className="w-full space-y-6">
              <Image src="/svgs/attract-followers.svg" alt="" width={44} height={44} />
              <h1 className="text-[40px] font-semibold leading-normal">Influencers</h1>
              <p className="leading-loose max-w-xl !mt-3">
                Turn your posts into must-see content. Whether it's fashion, lifestyle, or travel, CreativioAI ensures your photos are as influential as you
                are.{" "}
              </p>
              <Link href="#">
                <button className="border text-primary-blue hover:text-white border-primary-blue hover:bg-primary-blue rounded-xl px-10 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                  Try for free
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="px-16 py-20 w-full rounded-[40px] flex ">
            <div className="w-full space-y-6">
              <Image src="/svgs/store-owner.svg" alt="" width={60} height={60} />
              <h1 className="text-[40px] font-semibold leading-normal">Small Business Owners</h1>
              <p className="leading-loose max-w-xl !mt-3">
                Show the world what makes your business unique. From product shots to promotional material, get visuals that resonate with your audience.{" "}
              </p>
              <Link href="#">
                <button className="border text-primary-blue hover:text-white border-primary-blue hover:bg-primary-blue rounded-xl px-10 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                  Try for free
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Slider first_image_url="/assets/business-img1.png" second_image_url="/assets/business-img2.png" />
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="w-full">
            <Slider first_image_url="/assets/photographer-img1.png" second_image_url="/assets/photographer-img2.png" />
          </div>
          <div className="px-16 py-20 w-full rounded-[40px] flex ">
            <div className="w-full space-y-6">
              <Image src="/svgs/photography.svg" alt="" width={56} height={56} />
              <h1 className="text-[40px] font-semibold leading-normal">Photographers</h1>
              <p className="leading-loose max-w-xl !mt-3">
                Expand your creative horizons without spending hours in post-production. CreativioAI gives you polished, client-ready photos in minutes.{" "}
              </p>
              <Link href="#">
                <button className="border text-primary-blue hover:text-white border-primary-blue hover:bg-primary-blue rounded-xl px-10 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                  Try for free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Marquee speed={35} className="py-10" pauseOnHover>
        <Image
          src="/images/product1.png"
          alt=""
          width={500}
          height={500}
          className="w-[382px] h-[424px] object-cover rounded-3xl transform cursor-pointer rotate-[2deg] mx-6"
        />
        <Image
          src="/images/product2.png"
          alt=""
          width={500}
          height={500}
          className="w-[382px] h-[424px] object-cover rounded-3xl transform cursor-pointer rotate-[-2deg] translate-y-5 mx-6"
        />
        <Image
          src="/images/product3.png"
          alt=""
          width={500}
          height={500}
          className="w-[382px] h-[424px] object-cover rounded-3xl transform cursor-pointer rotate-[2deg] mx-6"
        />
        <Image
          src="/images/product4.png"
          alt=""
          width={500}
          height={500}
          className="w-[382px] h-[424px] object-cover rounded-3xl transform cursor-pointer rotate-[2deg] -translate-y-5 mx-6"
        />
        <Image
          src="/images/product5.png"
          alt=""
          width={500}
          height={500}
          className="w-[382px] h-[424px] object-cover rounded-3xl transform cursor-pointer rotate-[-2deg] mx-6"
        />
      </Marquee>
      <section className="py-20 relative z-[1] max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">Comparison</span> <span>🔥</span>
          </h2>
          <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-center text-[#191D39] !mt-4">
            Traditional <span className="text-primary-purple">VS</span> AI Products{" "}
          </h1>
          <p className="text-center max-w-7xl leading-loose">
            Lorem ipsum dolor sit amet consectetur. <span className="font-semibold">Congue metus</span> mi semper viverra lectus convallis. Maecenas augue risus
            velit semper adipiscing hendrerit quisque. Nunc arcu magna enim ac at laoreet eget etiam. Nulla nulla consequat tellus arcu odio nisi enim mi dui.
            Tristique faucibus blandit sit sed blandit vestibulum non <span className="font-semibold">metus lacinia.</span> Id pharetra blandit amet proin
            vitae.
          </p>
          <p className="text-center max-w-7xl leading-loose">
            Sociis aliquam condimentum at bibendum volutpat at at at. Ac consectetur et nunc nulla.{" "}
            <span className="font-semibold">Fusce tellus pellentesque</span> quam eget. Hendrerit pellentesque pretium praesent viverra.
          </p>
        </div>
        <div className="flex gap-4 mt-16">
          <div className="w-full bg-gradient-to-b from-white to-[#F4F3FF] p-12 rounded-3xl">
            <h1 className="text-2xl font-semibold">Traditional Product Photography 📷</h1>
            <ul className="space-y-5 mt-8">
              <li className="flex gap-2 items-center">
                <Image src="/icons/x-circle-red.svg" alt="check" width={24} height={24} />
                <span>Hiring professional photographers and studio space</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/x-circle-red.svg" alt="check" width={24} height={24} />
                <span>Average turnaround time: 1-2 weeks</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/x-circle-red.svg" alt="check" width={24} height={24} />
                <span>Post-editing requires specialized software and skills</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/x-circle-red.svg" alt="check" width={24} height={24} />
                <span>Costly and time-consuming revisions or reshoots</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/x-circle-red.svg" alt="check" width={24} height={24} />
                <span>Limited to photographer's availability and schedule</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/x-circle-red.svg" alt="check" width={24} height={24} />
                <span>Requires physical handling and shipping of products to the studio</span>
              </li>
            </ul>
          </div>
          <div className="w-full bg-gradient-to-b from-primary-purple to-primary-blue text-white p-12 rounded-3xl">
            <h1 className="text-2xl font-semibold">AI-Powered Product Shots with AI ⚡</h1>
            <ul className="space-y-5 mt-8">
              <li className="flex gap-2 items-center">
                <Image src="/icons/check-circle-green.svg" alt="check" width={24} height={24} />
                <span>Easy-to-use, web-based application</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/check-circle-green.svg" alt="check" width={24} height={24} />
                <span>Average time to produce a product photo: Minutes</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/check-circle-green.svg" alt="check" width={24} height={24} />
                <span>User-friendly interface, perfect for beginners</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/check-circle-green.svg" alt="check" width={24} height={24} />
                <span>Update or revise your product photos anytime no extra cost</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/check-circle-green.svg" alt="check" width={24} height={24} />
                <span>Consistent quality and style, customizable to your brand</span>
              </li>
              <li className="flex gap-2 items-center">
                <Image src="/icons/check-circle-green.svg" alt="check" width={24} height={24} />
                <span>No shipping or physical handling—perfect for digital-first businesses</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-[rgb(244,243,255)] mt-8 pt-20">
        <div className="max-w-[1560px] mx-auto flex gap-10">
          <div className="w-full space-y-7">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text text-center text-base">
                The Magical 3 Steps Process
              </span>{" "}
              <span>🔥</span>
            </h2>
            <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-[#191D39] !mt-4">To Create Your First AI-powered Product Photo</h1>
            <p className="leading-loose">
              Lorem ipsum dolor sit amet consectetur. Sapien ut ante eget purus vitae. Tortor lobortis leo elit turpis mattis sit. Nisl odio arcu cras pharetra
              venenatis odio ultricies libero. Congue est vitae urna nunc dictum. Sed feugiat pellentesque parturient maecenas sed et. Ullamcorper sed in sed
              neque dignissim et. Nibh eu in quisque egestas.
            </p>
            <p className="leading-loose">
              Sapien fringilla faucibus commodo faucibus. Nullam vestibulum massa nisl sem. Etiam arcu egestas ultricies consequat purus. Id felis odio sit
              dolor odio. Eget ultricies ullamcorper tempor est vitae. Enim velit eu commodo placerat pellentesque et pulvinar sem. Pharetra vel fringilla id
              vulputate vitae.
            </p>
          </div>
          <div className="w-full flex items-center justify-end">
            <div className="flex flex-col gap-10 w-full max-w-[650px]">
              <div className="flex justify-start w-full">
                <div className="max-w-fit flex items-center bg-indigo-200/50 text-violet-500 py-7 px-10 font-normal rounded-3xl cursor-pointer gap-3 relative">
                  <div className="bg-gradient-to-br from-primary-purple to-primary-blue rounded-full absolute -top-6 -left-6 text-white w-14 h-14 grid place-content-center text-2xl">
                    1
                  </div>
                  <TbDownload size={25} className="rotate-180" />
                  <span>Upload</span>
                </div>
              </div>
              <div className="flex justify-center min-w-[360px] w-full">
                <div className="max-w-fit flex items-center bg-pink-200/50 text-pink-400 py-7 px-10 font-normal rounded-3xl cursor-pointer gap-3 relative">
                  <div className="bg-gradient-to-br from-primary-purple to-primary-blue rounded-full absolute -top-6 -left-6 text-white w-14 h-14 grid place-content-center text-2xl">
                    2
                  </div>
                  <CiImageOn size={28} />
                  <span>Generate</span>
                </div>
              </div>
              <div className="flex justify-end w-full">
                <div className="max-w-fit flex items-center bg-sky-100/50 text-sky-500 py-7 px-10 font-normal rounded-3xl cursor-pointer gap-3 relative">
                  <div className="bg-gradient-to-br from-primary-purple to-primary-blue rounded-full absolute -top-6 -left-6 text-white w-14 h-14 grid place-content-center text-2xl">
                    3
                  </div>
                  <TbDownload size={25} />
                  <span>Download</span>
                </div>
              </div>
            </div>
            {/* <Image src="/assets/home-steps0.svg" alt="" width={600} height={500} draggable={false} /> */}
          </div>
        </div>
      </section>
      <section className="py-20 relative z-[1]">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">AI Pricing Plans</span> <span>🔥</span>
          </h2>
          <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-center text-[#191D39] !mt-4">
            Here’s a recap of what you are getting access to today{" "}
          </h1>
        </div>
        <div className="bg-white/50 rounded-[44.103px] flex w-full max-w-[1360px] mt-20 mx-auto">
          <div className="w-full flex gap-20 pl-20">
            <div className="min-h-[520px] w-full py-[64px] flex flex-col justify-between">
              <div className="space-y-8">
                <h1 className="text-5xl text-primary-black font-semibold">
                  $19 <span className="text-lg text-primary-grey">/month</span>
                </h1>
                <h2 className="text-2xl font-semibold text-primary-black">Starter</h2>
                <p className="text-primary-grey leading-relaxed">Unleash the power of automation.</p>
                <ul className="space-y-4">
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                </ul>
              </div>
              <button className="w-full bg-primary-blue text-white p-4 rounded-xl hover:scale-105 transition duration-300">Choose plan</button>
            </div>
            <div className="min-h-[520px] w-full py-[64px] flex flex-col justify-between">
              <div className="space-y-8">
                <h1 className="text-5xl text-primary-black font-semibold">
                  $54 <span className="text-lg text-primary-grey">/month</span>
                </h1>
                <h2 className="text-2xl font-semibold text-primary-black">Professional</h2>
                <p className="text-primary-grey leading-relaxed">Advanced tools to take your work to the next level.</p>
                <ul className="space-y-4">
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                </ul>
              </div>
              <button className="w-full bg-primary-blue text-white p-4 rounded-xl hover:scale-105 transition duration-300">Choose plan</button>
            </div>
            <div className="bg-gradient-to-b from-primary-purple to-primary-blue text-white px-10 py-10 rounded-[44.103px] w-full shadow-card -translate-y-[32px]">
              <div className="min-h-[520px] w-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex justify-end">
                    <div className="bg-white px-6 py-2 max-w-fit rounded-full">
                      <span className="text-primary-purple">Most Popular</span>
                    </div>
                  </div>
                  <h1 className="text-5xl font-semibold">
                    $89 <span className="text-lg">/month</span>
                  </h1>
                  <h2 className="text-2xl font-semibold">Company</h2>
                  <p className="">Automation plus enterprise-grade features.</p>
                  <ul className="space-y-4">
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle-2.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="w-full text-primary-blue bg-white p-4 rounded-xl hover:scale-105 transition duration-300">Choose plan</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-[rgb(244,243,255)] mt-8 pt-20">
        <div className="max-w-[1560px] mx-auto flex">
          <div className="w-full space-y-7">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text text-center text-base">Why Us </span> <span>🔥</span>
            </h2>
            <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-[#191D39] !mt-4">Lorem ipsum dolor sit amet consectetur. </h1>
            <p className="leading-loose">
              Lorem ipsum dolor sit amet consectetur. Sapien ut ante eget purus vitae. Tortor lobortis leo elit turpis mattis sit. Nisl odio arcu cras pharetra
              venenatis odio ultricies libero. Congue est vitae urna nunc dictum. Sed feugiat pellentesque parturient maecenas sed et. Ullamcorper sed in sed
              neque dignissim et. Nibh eu in quisque egestas.{" "}
            </p>
            <p className="leading-loose">
              Sapien fringilla faucibus commodo faucibus. Nullam vestibulum massa nisl sem. Etiam arcu egestas ultricies consequat purus. Id felis odio sit
              dolor odio. Eget ultricies ullamcorper tempor est vitae. Enim velit eu commodo placerat pellentesque et pulvinar sem. Pharetra vel fringilla id
              vulputate vitae.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-center">
                <Image src="/icons/check-circle-green.svg" alt="" width={20} height={20} />
                Lorem ipsum dolor sit amet consectetur. Aenean egestas.
              </li>
              <li className="flex gap-4 items-center">
                <Image src="/icons/check-circle-green.svg" alt="" width={20} height={20} />
                Lorem ipsum dolor sit amet consectetur. Diam ultricies.
              </li>
              <li className="flex gap-4 items-center">
                <Image src="/icons/check-circle-green.svg" alt="" width={20} height={20} />
                Lorem ipsum dolor sit amet consectetur. Euismod.
              </li>
              <li className="flex gap-4 items-center">
                <Image src="/icons/check-circle-green.svg" alt="" width={20} height={20} />
                Lorem ipsum dolor sit amet consectetur. Accumsan.
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center min-w-[360px] items-center">
            <Image src="/assets/36855587b7c30a71d714fb94bcbc02f6.gif" alt="" width={800} height={500} />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text text-center">AI FAQs </span> <span>🔥</span>
          </h2>
          <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-[#191D39] !mt-4 text-center">
            Here’s a recap of what you are getting access to today
          </h1>
        </div>
        <Faq />
      </section>
      <div className="!pb-10">
        <section className="bg-primary-blue flex justify-center w-full min-w-[360px] items-center px-5 py-20 md:p-28 mt-10 rounded-[40px] max-w-[1560px] mx-auto">
          <div className="space-y-5 flex flex-col justify-center">
            <h1 className="text-3xl min-[400px]:text-4xl md:text-5xl xl:text-[58px] !leading-normal font-bold text-white max-w-4xl text-center mx-auto">
              Lorem ipsum dolor sit amet consectetur. Gravida a.
            </h1>
            <p className="max-w-2xl text-center mx-auto leading-loose text-white">
              Lorem ipsum dolor sit amet consectetur. Velit urna massa sit porttitor penatibus. Commodo mattis velit quis consequa.
            </p>
            <button className="text-primary-blue bg-white rounded-2xl px-8 py-4 max-w-fit mx-auto !mt-16 hover:scale-110 transition duration-300">
              Get started - It’s free
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
