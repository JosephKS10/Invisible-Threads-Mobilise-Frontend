"use client";
// import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      {/* <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      > */}
        <Nav />
        <Hero />
        <Schedule />
      {/* </ReactLenis> */}
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://image.lexica.art/full_webp/c265f476-b981-49bf-801e-cb48a4143271)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://image.lexica.art/full_webp/145313df-184d-4c5d-924a-ed506d9e1bc8"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://image.lexica.art/full_webp/da498763-a1c9-4fd2-8ce6-d3bd7a8b8837"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://wearemobilise.org.au/wp-content/uploads/2024/11/graphics-for-website.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://wearemobilise.org.au/wp-content/uploads/2023/10/Mobilise_GroupShot_Home_Direct_Giving-2048x1365.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
     
      {/* <div className="flex flex-col text-center w-full py-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-neutral-500 text-sm">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div> */}
    <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        🏠 Homelessness in Australia: <br/> <span className="text-[#ffff00]">A Crisis in the Making 🌏</span>
       
    </motion.h1>
    <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
         DID YOU KNOW ? <br/> <span className="text-[#ffff00]"></span>
       
    </motion.h1>
    <ScheduleItem 
  title="Homelessness in Melbourne" 
  date="2025" 
  description="Did you know Melbourne has one of the highest rates of homelessness in Australia, with more than 1,200 people sleeping rough each night? Despite the vibrant city life, there's a growing need for affordable housing solutions and greater community support." 
  location="Melbourne" 
/>

<ScheduleItem 
  title="Sydney's Rising Homeless Rates" 
  date="2025" 
  description="Sydney is facing a homelessness crisis, with over 1,500 people sleeping on the streets every night. The city's skyrocketing property prices and high rental costs are pushing more individuals into homelessness." 
  location="Sydney" 
/>

<ScheduleItem 
  title="Brisbane's Homeless Crisis" 
  date="2025" 
  description="Brisbane is struggling with a homelessness epidemic, where the number of people sleeping rough has increased by 20% in the last few years. The lack of affordable housing options is a key factor in the rising numbers." 
  location="Brisbane" 
/>

<ScheduleItem 
  title="Perth: The City Struggling with Housing Affordability" 
  date="2025" 
  description="Perth's homelessness issue has escalated, with many individuals facing the harsh reality of living without stable housing. The shortage of affordable housing, along with rising rents, has left many without a place to call home." 
  location="Perth" 
/>

<ScheduleItem 
  title="Adelaide: Homelessness on the Rise" 
  date="2025" 
  description="Adelaide’s homelessness rate is rapidly increasing, with a 15% rise in rough sleepers over the past year. Affordable housing options are dwindling, and the need for solutions is urgent to combat the growing issue." 
  location="Adelaide" 
/>

<ScheduleItem 
  title="Canberra's Homeless Population" 
  date="2025" 
  description="Even the nation's capital, Canberra, is not immune to the homelessness crisis. The city has seen an alarming rise in the number of individuals experiencing homelessness, especially in the wake of housing affordability issues." 
  location="Canberra" 
/>

<ScheduleItem 
  title="Hobart's Growing Homeless Issue" 
  date="2025" 
  description="Hobart, once known for its peaceful lifestyle, is now grappling with rising homelessness. More than 200 people in the city are living without stable housing, and affordable rental properties are becoming scarce." 
  location="Hobart" 
/>

<ScheduleItem 
  title="Darwin: Homelessness Impacting the North" 
  date="2025" 
  description="Darwin's homelessness situation is growing, with a sharp increase in the number of people without homes. The city faces challenges due to a lack of affordable housing and support services for vulnerable individuals." 
  location="Darwin" 
/>

    </section>
  );
};

const ScheduleItem = ({
  title,
  description,
  date,
  location,
}: {
  title: string;
  description: string;
  date: string;
  location: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl font-bold uppercase text-[#ffff00]">{title}</p>
        <p className="mb-1.5 text-md text-zinc-200 pr-52 py-3">{description}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};