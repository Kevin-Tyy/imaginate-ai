import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { BsArrowRight } from "react-icons/bs";
import { dummyAiImages, languages, sponsors } from "./(site)/home/components/constants/data";

export default function page() {
  return (
    <div>
      <div className="relative">
        <div className="w-[450px] h-[200px] rounded-full absolute top-0 right-0 bg-gradient-to-r from-[#4E31FF] to-[#3669EC00] blur-[200px]" />
        <div className="w-[450px] h-[200px] rounded-full absolute top-1/2 left-20 bg-gradient-to-r from-[#4E31FF] to-[#3669EC] blur-[200px]" />
        <div className="mix-blend-lighten">
          <Image src="/backgrounds/homepage-hero.svg" alt="" width={2920} height={1900} className="absolute w-full min-w-screen h-full inset-0 object-cover" />
        </div>
        <div className="relative flex flex-col min-h-screen pt-32">
          <div className="h-full flex flex-col justify-center items-center relative z-[1]">
            <div className="space-y-8 relative z-[1]">
              <h1 className="text-[60px] capitalize font-semibold max-w-2xl text-center text-[#191D39] mx-auto">
                Turn your text into videos in <span className="text-primary-purple font-black">minutes</span>
              </h1>
              <p className="text-[#191D39] max-w-xl text-center leading-loose mx-auto">
                Lorem ipsum dolor sit amet consectetur. Cursus commodo vitae bibendum in.
              </p>
              <div className="flex justify-center  gap-x-4">
                <Link href="#">
                  <button className="bg-gradient-to-r from-[#c04cff] to-[#6035ff] text-white py-4 px-10 rounded-xl ">Create Free AI Video</button>
                </Link>
                <Link href="#">
                  <button className="ring-1 ring-inset ring-[#4D4D77] py-4 px-10 rounded-xl ">Get a Demo</button>
                </Link>
              </div>
              <div className="flex gap-x-5 !mt-8">
                <div className="flex items-center gap-2 px-4 py-3 bg-white text-[#191D39] rounded-lg hover:shadow-2xl shadow-[#80808085] cursor-pointer transition duration-500">
                  <Image src="/icons/check.svg" alt="check" width={20} height={20} /> <span className="">120+ languages</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-white text-[#191D39] rounded-lg hover:shadow-2xl shadow-[#80808085] cursor-pointer transition duration-500">
                  <Image src="/icons/check.svg" alt="check" width={20} height={20} /> <span className="">140+ AI Avatars</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-white text-[#191D39] rounded-lg hover:shadow-2xl shadow-[#80808085] cursor-pointer transition duration-500">
                  <Image src="/icons/check.svg" alt="check" width={20} height={20} /> <span className="">Edit as simply as a slide-deck</span>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center items-center">
              <Image src="/assets/home-frame0.svg" alt="" width={1040} height={450} className="relative z-[1] -translate-x-20" />
              <div className="bg-[#B1B3FC] rounded-full w-[694px] h-[580px] blur-[100px] absolute" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-12 relative z-[1]">
        <main className="max-w-[1560px] mx-auto">
          <section className="py-20">
            <h1 className="text-xl text-center">Trusted by the world’s fastest-growing companies 🚀</h1>
            <div className="grid grid-cols-5 gap-10 mt-14">
              <div className="flex justify-center">
                <Image src="/logo/segment.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/hubSpot.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/asana.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/intercom.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/webflow.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/quora.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/airbnb.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/amazon.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/microsoft.svg" alt="" width={150} height={30} />
              </div>
              <div className="flex justify-center">
                <Image src="/logo/wix.svg" alt="" width={40} height={10} />
              </div>
            </div>
          </section>
          <section className="py-20 flex flex-col items-center space-y-8">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">Use Cases</span> <span>🔥</span>
            </h2>
            <h1 className="text-5xl font-bold max-w-4xl capitalize leading-normal text-center text-[#191D39] !mt-4">
              For teams who create training videos at scale
            </h1>
            <div className="w-full">
              <div className="px-20 pt-12 bg-white w-full rounded-[40px] flex gap-28">
                <div className="w-full space-y-6 mt-10">
                  <div className="bg-gradient-to-br from-primary-purple to-primary-blue w-fit p-3.5 rounded-2xl">
                    <Image src="/icons/user-group.svg" alt="" width={48} height={48} />
                  </div>
                  <h1 className="text-[40px] font-semibold leading-normal">Learning & Development</h1>
                  <h2 className="text-[28px] font-semibold leading-relaxed">
                    Replace boring text, PowerPoints and PDFs with engaging videos your team will love
                  </h2>
                  <p className="leading-loose max-w-xl">
                    "Usually, our colleagues don't jump in the air when they hear e-learning, but the AI videos created with Company Name have sparked
                    motivation that we haven't seen before."
                  </p>
                </div>
                <div className="w-full flex items-center">
                  <div className="bg-gradient-to-r from-primary-purple to-primary-blue rounded-full h-[335px] w-[335px] absolute blur-[170px]" />
                  <Image src="/assets/home-frame1.svg" alt="" width={580} height={540} className="relative z-[1] select-none" draggable={false} />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-4">
              <div className="px-12 bg-white w-full rounded-[40px] flex flex-col gap-8 relative overflow-hidden">
                <div className="w-full space-y-3 mt-10">
                  <div className="bg-white w-fit p-3.5 rounded-2xl relative z-[1]">
                    <Image src="/icons/share.svg" alt="" width={48} height={48} />
                  </div>
                  <h1 className="text-[40px] font-semibold leading-normal">Sales Enablement</h1>
                  <p className="leading-loose max-w-xl">Company into spaces that you invite and share with colleagues and friends.</p>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="bg-gradient-to-r from-primary-purple to-primary-blue rounded-full h-[315px] w-[375px] absolute blur-[250px]" />
                  <Image src="/assets/home-frame2.svg" alt="" width={680} height={540} className="relative z-[1] select-none" draggable={false} />
                  <div className="absolute h-[200px] w-full bottom-0 bg-gradient-to-b from-transparent via-[#f4f3ff5d] to-[#F4F3FF] z-[2]" />
                </div>
              </div>
              <div className="px-12 bg-white w-full rounded-[40px] flex flex-col gap-8 relative overflow-hidden">
                <div className="w-full space-y-3 mt-10">
                  <div className="bg-white w-fit p-3.5 rounded-2xl relative z-[1]">
                    <Image src="/icons/arrow-refresh.svg" alt="" width={48} height={48} />
                  </div>
                  <h1 className="text-[40px] font-semibold leading-normal">Customer Service</h1>
                  <p className="leading-loose max-w-xl">Look at the page and section designs that are created and pick the one.</p>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="bg-gradient-to-r from-primary-purple to-primary-blue rounded-full h-[315px] w-[375px] absolute blur-[250px]" />
                  <Image src="/assets/home-frame3.svg" alt="" width={680} height={540} className="relative z-[1] select-none" draggable={false} />
                  <div className="absolute h-[200px] w-full bottom-0 bg-gradient-to-b from-transparent via-[#f4f3ff5d] to-[#F4F3FF] z-[2]" />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-20 py-20">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">From Idea to video in minutes</span> <span>🔥</span>
            </h2>
            <h1 className="text-5xl font-bold max-w-5xl capitalize leading-normal text-[#191D39] !mt-4">See how AI video generator works below </h1>
            <div className="w-full flex bg-gradient-to-b from-primary-purple to-primary-blue rounded-[42px] mt-10">
              <div className="p-20 bg-white w-full rounded-[40px] flex ">
                <div className="w-full space-y-6 mt-10">
                  <div className="bg-gradient-to-br from-primary-purple to-primary-blue w-fit p-3.5 rounded-2xl">
                    <Image src="/icons/share-white.svg" alt="" width={48} height={48} />
                  </div>
                  <h1 className="text-[40px] font-semibold leading-normal">Create your script</h1>
                  <p className="leading-loose max-w-xl">Use your own script or generate it with the help of AI with Chat GPT-like prompts.</p>
                  <Link href="#">
                    <button className="bg-primary-blue text-white rounded-2xl px-8 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                      Try for free
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <Image src="/assets/home-frame4.svg" alt="" width={590} height={400} />
              </div>
            </div>
          </section>
          <section className="py-20 flex flex-col items-center space-y-8">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">The ROI for your business</span> <span>🔥</span>
            </h2>
            <h1 className="text-5xl font-bold max-w-5xl capitalize leading-normal text-center text-[#191D39] !mt-4">
              You don't have to choose between cost, time and quality{" "}
            </h1>
            <div className="space-y-6">
              <div className="bg-white rounded-3xl ring-1 ring-[#D0D7E7] w-full p-12 space-y-12">
                <Image src="/logo/64abf25cc8dff88b95b83711_Xerox.svg" alt="" width={150} height={30} />
                <div className="border-t border-[#E4E6ED] pt-12 space-y-6">
                  <span className="text-[#2C374F]">Cost Savings</span>
                  <h1 className="text-primary-blue text-5xl font-semibold">+50%</h1>
                  <p className="leading-loose">
                    Lorem ipsum dolor sit amet consectetur. Massa proin elit id cras urna dictum tincidunt sapien cursus. Augue at enim scelerisque in dui
                    sapien bibendum. Faucibus ridiculus nunc at amet semper id aliquam. Velit ultrices diam a hendrerit leo urna. Tristique quam in sed
                    facilisis. Porttitor duis praesent velit quis. Lacus blandit nulla commodo sit massa sit donec. Egestas id turpis sodales at duis odio nulla
                    sit.
                    <br /> Ornare eget morbi nisl eget ut diam nulla. Adipiscing commodo faucibus nunc ut. Adipiscing facilisis orci sed sit fermentum leo. Id
                    tellus phasellus imperdiet viverra fringilla amet tristique aliquam. Odio id mi ultrices orci neque diam varius. Diam id turpis elit
                    ultricies blandit lacus massa tortor tristique. Pretium laoreet in et blandit.
                  </p>
                  <Link href="#">
                    <button className="flex flex-col justify-start gap-2 text-primary-blue mt-8 group">
                      <div className="flex items-center gap-1.5">
                        Read case study
                        <BsArrowRight className="group-hover:translate-x-2 transition-all duration-500" />
                      </div>
                      <div className="w-0 h-1 bg-primary-blue group-hover:w-full transition-all duration-500 rounded-full" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-white rounded-3xl ring-1 ring-[#D0D7E7] w-full p-12 space-y-12">
                  <Image src="/logo/650daa94ccc06003ad69fd29_Zoom.svg" alt="" width={150} height={30} />
                  <div className="border-t border-[#E4E6ED] pt-12 space-y-6">
                    <span className="text-[#2C374F]">Time savings</span>
                    <h1 className="text-primary-blue text-5xl font-semibold">+90%</h1>
                    <p className="leading-loose">
                      Lorem ipsum dolor sit amet consectetur. Massa proin elit id cras urna dictum tincidunt sapien cursus. Augue at enim scelerisque in dui
                      sapien bibendum. Faucibus ridiculus nunc at amet semper id aliquam. Velit ultrices diam a hendrerit leo urna. Tristique quam in sed
                      facilisis. Porttitor duis praesent velit quis.
                    </p>
                    <Link href="#">
                      <button className="flex flex-col justify-start gap-2 text-primary-blue mt-8 group">
                        <div className="flex items-center gap-1.5">
                          Read case study
                          <BsArrowRight className="group-hover:translate-x-2 transition-all duration-500" />
                        </div>
                        <div className="w-0 h-1 bg-primary-blue group-hover:w-full transition-all duration-500 rounded-full" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="bg-white rounded-3xl ring-1 ring-[#D0D7E7] w-full p-12 space-y-9">
                  <Image src="/logo/64abf259f7c5f035fff0c4ec_BSH.svg" alt="" width={150} height={30} />
                  <div className="border-t border-[#E4E6ED] pt-12 space-y-6">
                    <span className="text-[#2C374F]">Engagement increase</span>
                    <h1 className="text-primary-blue text-5xl font-semibold">+30%</h1>
                    <p className="leading-loose">
                      Lorem ipsum dolor sit amet consectetur. Massa proin elit id cras urna dictum tincidunt sapien cursus. Augue at enim scelerisque in dui
                      sapien bibendum. Faucibus ridiculus nunc at amet semper id aliquam. Velit ultrices diam a hendrerit leo urna. Tristique quam in sed
                      facilisis. Porttitor duis praesent velit quis.
                    </p>
                    <Link href="#">
                      <button className="flex flex-col justify-start gap-2 text-primary-blue mt-8 group">
                        <div className="flex items-center gap-1.5">
                          Read case study
                          <BsArrowRight className="group-hover:translate-x-2 transition-all duration-500" />
                        </div>
                        <div className="w-0 h-1 bg-primary-blue group-hover:w-full transition-all duration-500 rounded-full" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 space-y-8">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">AI AVATARS</span> <span>🔥</span>
            </h2>
            <div className="flex justify-between">
              <h1 className="text-5xl font-bold max-w-2xl capitalize leading-normal text-[#191D39] !mt-4">Create videos as diverse as your audience </h1>
              <Link href="#">
                <button className="bg-primary-blue text-white rounded-2xl px-8 py-4 max-w-fit mx-auto !mt-8 hover:scale-110 transition duration-300">
                  See all avatars
                </button>
              </Link>
            </div>
            <div className="flex gap-x-5 !mt-8">
              <div className="flex items-center gap-2 px-4 py-3 bg-white text-[#191D39] rounded-lg hover:shadow-2xl shadow-[#80808085] cursor-pointer transition duration-500">
                <Image src="/icons/check.svg" alt="check" width={20} height={20} />{" "}
                <span className="capitalize">
                  Engage your viewers with <span className="font-semibold">over 140 AI Avatars</span>
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white text-[#191D39] rounded-lg hover:shadow-2xl shadow-[#80808085] cursor-pointer transition duration-500">
                <Image src="/icons/check.svg" alt="check" width={20} height={20} />{" "}
                <span className="font-semibold">Make your videos more inclusive and diverse</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-white text-[#191D39] rounded-lg hover:shadow-2xl shadow-[#80808085] cursor-pointer transition duration-500">
                <Image src="/icons/check.svg" alt="check" width={20} height={20} />{" "}
                <span className="">
                  Create your <span className="font-semibold">own AI Avatar</span> (your digital twin)
                </span>
              </div>
            </div>
            <div className="flex items-center mt-8">
              <div className="w-full h-full relative rounded-3xl flex justify-center items-center overflow-hidden">
                <Image src={dummyAiImages[0]} alt="" width={1000} height={1000} className="absolute inset-0" />
                <div className="relative z-[1]">
                  <button className="rounded-full">
                    <Image src="/icons/play.svg" alt="" width={80} height={80} />
                  </button>
                </div>
              </div>
              <div className="w-full max-w-[450px]">
                <div className="grid grid-cols-2 gap-3">
                  {dummyAiImages.slice(1).map((image, index) => (
                    <div key={index} className="relative group">
                      <Image src={image} alt="" width={400} height={400} />
                      <div className="absolute w-[40px] h-[40px] bottom-2 right-2 z-[3] group-hover:scale-150 group-hover:-translate-y-[120%] group-hover:-translate-x-[195%] transition-all duration-300 delay-75">
                        <button className="relative rounded-full">
                          <Image src="/icons/play.svg" alt="" width={40} height={40} />
                        </button>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-60 z-1 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 flex flex-col items-center space-y-8">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">Supported Languages</span> <span>🔥</span>
            </h2>
            <h1 className="text-5xl font-bold max-w-2xl capitalize leading-normal text-center text-[#191D39] !mt-4">Multilingual </h1>
            <p>Ability to understand and generate content in different languages.</p>
            <div className="space-y-8 w-full max-w-[1460px] mx-auto !mt-10">
              <div className="flex justify-center gap-20 w-full">
                {languages.slice(0, 6).map(({ language, imageUrl }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 pt-4 pr-8 pb-4 pl-5  bg-white text-[#191D39] rounded-full hover:shadow-2xl transition duration-300 cursor-pointer">
                    <Image src={imageUrl} alt="" width={40} height={40} />
                    <p>{language}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-20 w-full">
                {languages.slice(6, 11).map(({ language, imageUrl }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 pt-4 pr-8 pb-4 pl-5  bg-white text-[#191D39] rounded-full hover:shadow-2xl transition duration-300 cursor-pointer">
                    <Image src={imageUrl} alt="" width={40} height={40} />
                    <p>{language}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-20 w-full">
                {languages.slice(11).map(({ language, imageUrl }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 pt-4 pr-8 pb-4 pl-5  bg-white text-[#191D39] rounded-full hover:shadow-2xl transition duration-300 cursor-pointer">
                    <Image src={imageUrl} alt="" width={40} height={40} />
                    <p>{language}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="mt-20 py-20">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">Feedback</span> <span>🔥</span>
            </h2>
            <div className="flex justify-between">
              <div className="w-full">
                <h1 className="text-5xl font-bold max-w-2xl capitalize leading-normal text-[#191D39] !mt-4">Our Featured Testimonials</h1>
              </div>
              <div className="w-full flex justify-end mt-6">
                <p className="text-[#191D39] max-w-xl leading-loose ">
                  Lorem ipsum dolor sit amet consectetur. Ac in tortor sodales ipsum vel tortor. Egestas vitae elementum quam euismod nunc eros. Feugiat aliquam
                  augue.
                </p>
              </div>
            </div>
            <div className="bg-white border-1 border-[#F7FAFF] rounded-3xl p-10 mt-10">
              <h1 className=" text-center leading-loose max-w-6xl mx-auto">
                “The simple workflow and the ability to <span className="font-semibold">generate content in multiple languages </span> have helped us deliver
                learning faster in various languages while reducing costs and enabling us to make last-minute changes and script adjustments.”
              </h1>
            </div>
          </section>
          <section className="mt-20 py-20 flex flex-col items-center space-y-12">
            <h2 className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-[#CE4FFF] to-[#5934FF] text-transparent bg-clip-text">INTEGRATIONS</span> <span>🔥</span>
            </h2>
            <h1 className="text-5xl font-bold max-w-2xl capitalize leading-normal text-center text-[#191D39] !mt-4">
              Embed your videos into your favorite tools
            </h1>
            <Marquee gradient gradientColor="#F4F3FF" className="overflow-y-hidden" speed={24}>
              {sponsors.map((sponsor, index) => (
                <div key={index} className="w-full min-w-[160px] h-[120px] flex flex-col items-center justify-center py-5 px-6">
                  <Image src={sponsor.imageUrl} alt="" width={90} height={90} className="min-w-[90px] object-cover select-none rounded-xl" draggable={false} />
                </div>
              ))}
            </Marquee>
            <button className="bg-primary-blue text-white rounded-2xl px-8 py-4 max-w-fit mx-auto !mt-16 hover:scale-110 transition duration-300">
              Explore all integrations
            </button>
          </section>
          <section className="bg-primary-blue flex justify-center items-center px-5 py-20 md:p-20 mt-10 rounded-[40px]">
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
        </main>
      </div>
    </div>
  );
}
