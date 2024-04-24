import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Router from "next/router";
import Image from "next/image";
import Avatar from "../public/foto data diri2.png";
import {
  FaLinkedin as LinkedId,
  FaYoutube as Youtube,
  FaWhatsappSquare as Whatsapp,
} from "react-icons/fa";
import { EducationCard, Footer } from "../components";
import { EducationCardContent } from "../utils/index";
import Hoob from "../public/Hoob.png";
import AboutImg from "../public/about me.png";
import newAboutImg from "../public/new about me.png";
import threadClone from "../public/threadClone.png";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const windowSize = useWindowSize();

  console.log(windowSize.width);
  console.log(windowSize.height);
  return (
    <div
      className={`${darkMode === true ? `dark bg-[#111827] ` : `bg-[#FBFAF5]`}`}
    >
      <Head>
        <title>About Me</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="a blog about a junior developer named Yoga Pangestu"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div>
        <nav className="flex min-w-full justify-between py-8 pt-10 px-[50px] md:px-[150px]">
          <h1 className="dark:text-white text-gray-800 text-xl font-burtons cursor-pointer">
            BlogByYoga
          </h1>
          <ul className="justify-between flex">
            <li
              className="mr-10 cursor-pointer"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {" "}
              {darkMode === true ? (
                <BsFillMoonStarsFill className="w-[30px] h-[30px] text-white" />
              ) : (
                <BsFillMoonStarsFill className="w-[30px] h-[30px]" />
              )}
            </li>
          </ul>
        </nav>

        <main className={`px-10  `}>
          <section className={`min-h-screen`}>
            <div
              className={`flex flex-col justify-center items-center py-[30px] pb-[70px] w-auto`}
            >
              <p
                className={`text-[50px] md:text-[60px] text-gradient-light dark:text-gradient p-1 font-burtons`}
              >
                Yoga pangestu
              </p>
              <p className=" text-gray-800 dark:text-white text-[25px] md:text-[30px] p-2 pb-4 font-merriweather">
                Junior Front-end Developer
              </p>
              <p className="font-roboto text-gray-800 dark:text-white w-11/12 text-center leading-5 mx-auto max-w-xl">
                Junior Developer and a colleague student who dreams of being
                able to design and build a website from 0!
              </p>
              <div
                className="flex flex-row p-5 text-5xl text-gray-dark gap-16 dark:text-white"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/yoga-pangestu-395b682b3/"
                  rel="noopener noreferrer"
                >
                  <LinkedId />
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/082225035259"
                  rel="noopener noreferrer"
                >
                  <Whatsapp />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCWOK3GeMoudtCOjl_6wXbEg"
                  rel="noopener noreferrer"
                >
                  <Youtube />
                </a>
              </div>
              <div className="relative mx-auto  bg-gradient-to-b from-cyan-500 to-teal-600 rounded-full w-80 h-80  overflow-hidden md:w-96 md:h-96">
                <Image
                  src={Avatar}
                  alt="Picture of the author"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>

          <section className="-mt-[20px]">
            <div className="px-10">
              <h3 className="text-3xl py-1 text-gray-800 dark:text-white font-burtons">
                Education List
              </h3>
              <p className="text-gray-800 dark:text-white py-3 font-roboto">
                Here are the list of places that i attend to get education from
                school to university :
              </p>
            </div>
            <ul className="flex flex-col md:flex-row flex-wrap md:items-stretch md:justify-center items-center  list-none p-3">
              {EducationCardContent.map((res, index) => {
                return (
                  <div
                    className="flex object-contain md:w-fit w-full items-center md:m-8 overflow-hidden"
                    key={res.id}
                  >
                    {index % 2 === 0 ? (
                      <li
                        className="gap-10 lg:flex-row h-full w-full my-5 mb-1"
                        data-aos-offset="300"
                        data-aos="fade-up-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                      >
                        {" "}
                        <EducationCard
                          key={res.id}
                          content={res}
                        />
                      </li>
                    ) : (
                      <li
                        className={` gap-10 lg:flex-row h-full w-full my-5 mb-1 `}
                        data-aos-offset="300"
                        data-aos="fade-up-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                      >
                        {" "}
                        <EducationCard
                          key={res.id}
                          content={res}
                        />
                      </li>
                    )}
                  </div>
                );
              })}
            </ul>
          </section>

          <section className="px-5 py-3 w-full h-full">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <p className="text-gray-800 dark:text-white font-burtons text-[32px]">
                Portofolio
              </p>
              <p className="text-gray-800 dark:text-white font-roboto text-[16px] ">
                Since i enter colleague and start learning how to code, i
                sometimes create a small project such as making a form that can
                send data through <span className="text-[#33bbcf]">API</span>,
                experimenting with{" "}
                <span className="text-[#33bbcf]">inputs</span> and{" "}
                <span className="text-[#33bbcf]">data types</span>, and showing
                data from <span className="text-[#33bbcf]">API</span> in a table
                or a lists.
              </p>
              {/* <p className="text-gray-800 dark:text-white font-roboto text-[16px] ">
                But so far projects that i could call finish and ready to deplop
                are only 2 so far, which is this blog and my first reactJS
                project{" "}
                <span className="text-gray-800 dark:text-white hover:text-[#d93d3d] ">
                  <a
                    href="https://firstreactlandingpage.000webhostapp.com/"
                    className="text-gray-800 dark:text-white"
                  >
                    HooBank Yoga
                  </a>
                  .
                </span>
              </p> */}
            </div>

            <div className="basis-1/3 flex flex-col p-5 overflow-hidden rounded-lg">
              <p className="text-gray-800 dark:text-white text-[24px] py-4">
                <span className="hover:text-[#d93d3d]">
                  <a
                    href="https://blog-yoga-v-2-q1ypqgl1u-yoga723s-projects.vercel.app/"
                    className="font-burtons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    1. Yoga new Portofolio (on development)
                  </a>
                </span>
              </p>
              <div className="justify-center w-full flex rounded-lg drop-shadow-3xl hover:shadow-red-400 hover:shadow-3xl">
                <a
                  href="https://blog-yoga-v-2-q1ypqgl1u-yoga723s-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={newAboutImg}
                    className="rounded-lg object-cover"
                    width={1500}
                    height={500}
                    alt="newAboutMe"
                  />
                </a>
              </div>
            </div>

            <div className="basis-1/3 flex flex-col p-5 overflow-hidden rounded-lg">
              <p className="text-gray-800 dark:text-white text-[24px] py-4">
                <span className="hover:text-[#d93d3d]">
                  <a
                    href="https://thread-clone-self.vercel.app/"
                    className="font-burtons"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2. Thread Clone
                  </a>
                </span>
              </p>
              <div className="justify-center w-full flex rounded-lg drop-shadow-3xl hover:shadow-red-400 hover:shadow-3xl">
                <a
                  href="https://thread-clone-self.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={threadClone}
                    className="rounded-lg object-cover"
                    width={1500}
                    height={500}
                    alt="newAboutMe"
                  />
                </a>
              </div>
            </div>

            <div className="basis-1/3 flex flex-col p-5 overflow-hidden rounded-lg">
              <p className="text-gray-800 dark:text-white text-[24px] py-4">
                <span className="hover:text-[#d93d3d]">
                  <a
                    href="https://firstreactlandingpage.000webhostapp.com/"
                    className="font-burtons"
                    rel="noopener noreferrer"
                  >
                    3. HooBank Yoga
                  </a>
                </span>
              </p>
              <div className="justify-center w-full flex rounded-lg drop-shadow-3xl hover:shadow-red-400 hover:shadow-3xl">
                <a
                  href="https://firstreactlandingpage.000webhostapp.com/"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={Hoob}
                    className="rounded-lg object-cover"
                    width={1500}
                    height={500}
                    alt="Hoobank"
                  />
                </a>
              </div>
            </div>

            <div className="basis-1/3 flex flex-col p-5 overflow-hidden rounded-lg">
              <p className="text-gray-800 dark:text-white text-[24px] py-4">
                <span className="hover:text-[#d93d3d]">
                  <a
                    href="https://ablog-about-yoga.herokuapp.com/"
                    className="font-burtons"
                    rel="noopener noreferrer"
                  >
                    4. About Me Blog
                  </a>
                </span>
              </p>
              <div className="justify-center w-full flex rounded-lg drop-shadow-3xl hover:shadow-red-400 hover:shadow-3xl">
                <Image
                  src={AboutImg}
                  className="rounded-lg object-cover"
                  width={1500}
                  height={500}
                  alt="About Creator"
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
