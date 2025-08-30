import Hero from "@/components/Hero";
import SkyDive from "@/components/SkyDive/SkyDive";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <SkyDive />
      <Carousel />
    </div>
  );
}
