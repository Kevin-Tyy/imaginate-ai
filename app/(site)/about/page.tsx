import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { team_members } from "./components/constants/data";
import Faq from "./components/Faq";

export default function page() {
  return (
    <main>
      <div className="relative h-[50vh] bg-[url('/assets/background-about-company.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="bg-gradient-to-b from-white to-transparent h-[40vh] w-full absolute top-0 left-0 right-0" />
        <div className="space-y-12 relative z-[1] flex flex-col items-center">
          <h2 className="space-x-3 font-semibold">
            <Link href="/">Home</Link> <span>/</span> <span className="text-primary-blue">About Us</span>
          </h2>
          <h1 className="text-[55px] font-semibold text-primary-black ">About Us</h1>
        </div>
      </div>
      <section className="bg-[#FAFAFA] pt-40">
        <div className="max-w-[1560px] mx-auto">
          <div className="flex gap-20">
            <div className="w-full flex flex-col justify-between">
              <h1 className="text-primary-black text-[45px] font-semibold">Lorem ipsum dolor sit amet consectetur. Nisl varius sapien.</h1>
              <Link href="#">
                <button className="bg-primary-blue text-white rounded-xl px-8 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="w-full space-y-20">
              <div className="flex justify-between">
                <Image src="/orgs/logo-1.svg" alt="" width={200} height={200} />
                <Image src="/orgs/logo-2.svg" alt="" width={200} height={200} />
                <Image src="/orgs/logo-3.svg" alt="" width={150} height={150} />
              </div>
              <p className="leading-loose">
                Lorem ipsum dolor sit amet consectetur. Fusce pharetra in ac integer eget praesent auctor turpis. Blandit lacus sollicitudin risus massa auctor.
                Sodales dolor morbi faucibus ipsum in viverra. Erat lorem imperdiet tempor massa congue. Dolor volutpat venenatis ultrices magna. Urna neque
                feugiat tempor porttitor eleifend velit. Pretium adipiscing risus sit lacinia. Magna ullamcorper at risus et lectus urna.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full gap-10 mt-16 -mb-28">
            <div className="w-full bg-white flex items-start gap-5 rounded-3xl p-10 hover:shadow-2xl hover:shadow-[#00000031] transition duration-500 cursor-default">
              <Image src="/icons/vision-ico.svg" alt="" width={40} height={40} />
              <div className="w-full space-y-3">
                <h1 className="text-4xl font-medium">Our Vision</h1>
                <p className="leading-loose">
                  Lorem ipsum dolor sit amet consectetur. Aliquam enim scelerisque ante elit sed bibendum sit dui in. Amet amet aliquam dignissim molestie amet
                  ipsum vel vitae. Ultrices.
                </p>
              </div>
            </div>
            <div className="w-full bg-white flex items-start gap-5 rounded-3xl p-10 hover:shadow-2xl hover:shadow-[#00000031] transition duration-500">
              <Image src="/icons/mission-ico.svg" alt="" width={40} height={40} />
              <div className="w-full space-y-3">
                <h1 className="text-4xl font-medium">Our Mission</h1>
                <p className="leading-loose">
                  Lorem ipsum dolor sit amet consectetur. Aliquam enim scelerisque ante elit sed bibendum sit dui in. Amet amet aliquam dignissim molestie amet
                  ipsum vel vitae. Ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-full bg-[#F4F3FF]" />
      </section>
      <section className="bg-primary-black py-32">
        <div className="max-w-[1560px] mx-auto">
          <div className="w-full flex gap-20">
            <div className="w-full flex flex-col justify-between">
              <h1 className="text-[42px] text-white font-bold leading-normal">Lorem ipsum dolor sit amet consectetur. At hendrerit quam.</h1>
              <div className="bg-primary-grey h-[1px] w-full" />
              <div className="flex">
                <div className="flex flex-col space-y-3">
                  <div className="flex gap-5 items-center">
                    <div className="text-primary-warning flex gap-2">
                      <BsStarFill size={28} />
                      <BsStarFill size={28} />
                      <BsStarFill size={28} />
                      <BsStarFill size={28} />
                      <BsStarFill size={28} />
                    </div>
                    <span className="text-white text-2xl">5.0</span>
                  </div>
                  <p className="text-primary-grey">Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="text-white space-y-5 ring-1 ring-primary-grey grid place-content-center w-[329px] h-[329px] rounded-full">
                <h1 className="text-6xl text-center">100+</h1>
                <p className="text-center text-primary-grey">
                  Team <br />
                  Members
                </p>
              </div>
              <div className="text-white space-y-5 ring-1 ring-primary-grey grid place-content-center w-[329px] h-[329px] rounded-full -ml-14">
                <h1 className="text-6xl text-center">5M+</h1>
                <p className="text-center text-primary-grey">
                  Happy <br />
                  Customers
                </p>
              </div>
              <div className="text-white space-y-5 ring-1 ring-primary-grey grid place-content-center w-[329px] h-[329px] rounded-full -ml-14">
                <h1 className="text-6xl text-center">23+</h1>
                <p className="text-center text-primary-grey">
                  Certificate of <br />
                  Merit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text text-center">The team </span> <span>🔥</span>
          </h2>
          <h1 className="text-5xl font-bold max-w-5xl capitalize leading-normal text-[#191D39] !mt-4 text-center">
            Balancing technical, academic and entrepreneurial excellence{" "}
          </h1>
        </div>
        <div className="grid grid-cols-3 max-w-fit mx-auto gap-8 mt-10">
          {team_members.map((member, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden cursor-pointer">
              <Image src={member.image_url} alt="" width={365} height={365} />
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 transition duration-500 flex flex-col justify-end p-5 text-white space-y-2">
                <h1 className="text-2xl font-medium">{member.names}</h1>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center !mt-16">
          <Link href="#">
            <button className="bg-gradient-to-br from-primary-purple to-primary-blue text-white rounded-2xl px-8 py-4 max-w-fit mx-auto hover:scale-110 transition duration-300">
              See the whole team
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-[#F4F3FF] mt-8 py-20">
        <div className="max-w-[1560px] mx-auto">
          <h1 className="text-center font-semibold text-lg">Our Investors 🚀</h1>
          <div className="grid grid-cols-5 gap-10 mt-14">
            <div className="flex justify-center">
              <Image src="/logo/segment.svg" alt="" width={150} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/hubSpot.svg" alt="" width={130} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/asana.svg" alt="" width={150} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/intercom.svg" alt="" width={150} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/webflow.svg" alt="" width={140} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/quora.svg" alt="" width={120} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/airbnb.svg" alt="" width={150} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/amazon.svg" alt="" width={130} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/microsoft.svg" alt="" width={150} height={30} />
            </div>
            <div className="flex justify-center">
              <Image src="/logo/wix.svg" alt="" width={70} height={70} />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 py-20">
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
    </main>
  );
}
