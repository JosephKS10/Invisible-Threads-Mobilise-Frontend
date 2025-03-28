import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroGeometric from "@/components/kokonutui/hero-geometric";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";

export default function Home() {
  return (
    <div className=" text-white"> 
        <HeroGeometric/>
        <StickyScrollRevealDemo/>
    </div>
  );
}
