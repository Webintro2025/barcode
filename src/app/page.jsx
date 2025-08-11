import Image from "next/image";
import WhatWeDo from "../components/WhatWeDo";
import WhyWeAreUnique from "../components/whyWeAreUnique";
import GetInTouch from "../components/GetInTouch";
import Map from "../components/Map";
import HomeBanner from "../components/HomeBanner";
import About from "../components/About";
import Gallery from "../components/Gallery";


export default function Home() {
  return (
   <>
     <HomeBanner />
   <About />
   <Gallery />
    <WhatWeDo />
   <WhyWeAreUnique />
    <GetInTouch />
     <Map />

   </>
  );
}
