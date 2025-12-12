"use client";
import { useState } from "react";

import Herosection from "./component/Herosection/page";
import FeaturedProduct from "./component/Featuredproduct/page"
import Ourstory from "./component/Ourstory/page";
import Gallery from "./component/Gallery/page";
import Getintouch from "./component/Getintouch/page";
import Ageristrict from "./Ageristrict/page";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="min-h-screen bg-black overflow-hidden">

      {!isVerified && (
        <Ageristrict onVerify={() => setIsVerified(true)} />
      )}

      {isVerified && (
        <>
          <Herosection />
          <FeaturedProduct/>
          <Ourstory />
          <Gallery />
          <Getintouch />
        </>
      )}

    </div>
  );
}
