'use client'

import { HeroHighlightDemo } from "@/components/heroHighlight";
import Galary from "./get-galary/page";




export default function Home() {
  return (
    <>
      <div className=" dark:bg-black">
        <HeroHighlightDemo />
        <Galary />
      </div>
    </>
  );
}
