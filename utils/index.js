import SMA from "../public/sma.png";
import UTY from "../public/UYT Logo fit border.png";

export const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  lightMode: "bg-white ",
  darkMode: "bg-black",
};

export const EducationCardContent = [
  {
    id: 1,
    Title: "SMAN 15 Garut",
    picture: SMA,
    content:
      "i spent another 3 years in high school to learn even more in order to advance my knowledge. The school sometimes gave too much homework where i got overwhelmed many times, but thankfull i have quite lots of friends where we usually help each other out. Here is where i started to get interested in making a website",
  },
  {
    id: 2,
    Title: "Universitas Teknologi Yogyakarta",
    picture: UTY,
    content:
      "This is where i'm currently studying after graduate from high school, here they teach how to develop not just a website but also how to make a mobile app, Artificial Reality, and how to process big data(although i very bad at this one) ",
  },
];
