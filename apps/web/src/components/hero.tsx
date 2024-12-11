import { Button } from "@v1/ui/button";
import Link from "next/link";
import { HeroImage } from "./hero-image";
import { Metrics } from "./metrics";
import { WordAnimation } from "./word-animation";

export function Hero() {
  return (
    <section className="mt-[60px] lg:mt-[180px] min-h-[530px] relative lg:h-[calc(100vh-300px)]">
      <div className="flex flex-col">
        <h2 className="mt-6 md:mt-10 max-w-[580px] text-[#878787] leading-tight text-[24px] md:text-[36px] font-medium">
          由重庆对外经贸学院、FizzDragon、沸腾宇宙影业联合打造的中国高校首个“AIGC影像创作工作坊”在12月12日正式开展，
          参加本次展映的作品有：
          <WordAnimation />
        </h2>
      </div>

      <HeroImage />
      <Metrics />
    </section>
  );
}
