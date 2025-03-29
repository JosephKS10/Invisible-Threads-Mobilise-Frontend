"use client"
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h1 className="font-bold text-2xl">Clara Higgins</h1>
          <p className="text-neutral-400 pt-2 text-md md:text-sm font-normal mb-8">
          Hi I'm Clara, I'm orignally from Uganda, I never ever imagined I would be homeless. Never. From having a beautiful home, three beautiful kids, never thought, no, never thought I'd find myself in this situation. Never. Never in a moment. Never.
Homeless women in Australia are the women we know. Our mothers, our aunties, our neighbours, our sisters. <br/><br/>It can happen to anyone. I was 65 when suddenly everything imploded and I thought I had all my ducks in a row. In fact, I thought I could keep working forever. But it's a fact of life that ageism exists in the workforce and it's just if you don't have money coming in, you can't pay your rent. And so in no time at all, I was homeless, basically, yeah.

          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://img.freepik.com/free-photo/woman-near-house-destroyed-by-war-war-ukraine_169016-66295.jpg?t=st=1743219768~exp=1743223368~hmac=9bf20d1a7dc3b2a7c87098b80d58206a09034b4ba4f2b6d7a8579b3a08bca13c&w=826"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <h1 className="font-bold text-2xl">Gary Steaphens</h1>
          <p className="text-neutral-400 py-2 text-xs md:text-sm font-normal mb-8">
          I became homeless for the same reason a lot of people do: childhood trauma and a relationship breakdown. My mum was an addict and she died a couple of years ago, my dad was an alcoholic and I haven’t seen him since I was nine. I saw a lot of nasty stuff, and you take that into your relationships. <br/><br/> I became homeless not long after I had a baby with my partner. I wouldn’t stay with friends much because I felt ashamed. I was sofa surfing and I slept in derelict garages; I’d been in the building game from a young age, and you can just tell where’s empty. Sometimes I slept in people’s cars. Once someone caught me when I’d slept in an old fridge. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://img.freepik.com/free-photo/homeless-man-bottle-alcohol_23-2148464300.jpg?t=st=1743220200~exp=1743223800~hmac=d69899ad9e152748f838f29546e536beb585e5bc1e6b7be3410d1c2a487c07f2&w=2000"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h1 className="font-bold text-2xl">Daniel Wright</h1>
          <p className="text-neutral-400 py-2 text-xs md:text-sm font-normal mb-8">
          I served in the military for eight years. When I came back, I struggled with PTSD and couldn’t hold down a job. My savings dried up, and before I knew it, I was on the streets. <br/><br/> 
    I sleep near train stations now. Some nights are safer than others. I never thought my service to the country would lead me here.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://img.freepik.com/free-photo/side-view-homeless-man-outside_23-2148760813.jpg?t=st=1743220924~exp=1743224524~hmac=1ae7bd9353d14170804a01821df3aedd228e9f8242f3f95fd8e63816f7825e71&w=1800"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h1 className="font-bold text-2xl mt-12">Melissa Carter</h1>
  <p className="text-neutral-400 py-2 text-xs md:text-sm font-normal mb-8">
    I was a teacher for over 15 years. But when I lost my husband to cancer, the medical bills piled up. I fell behind on rent and, within a few months, I had nowhere to go. <br/><br/> 
    Shelters were full, and I spent nights sleeping on park benches, always clutching my late husband’s photo. The hardest part? People stopped seeing me as a person. I became invisible.
  </p>
  <div className="grid grid-cols-2 gap-4">
    <Image
      src="https://img.freepik.com/free-photo/homeless-man-outdoors-blanket_23-2148760804.jpg?t=st=1743220980~exp=1743224580~hmac=43c3473a15ca669adb329d1c501622a635c27bebc009089f785364777764f50d&w=2000"
      alt="Melissa Carter"
      width={500}
      height={500}
      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
    />
  </div>
  </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
