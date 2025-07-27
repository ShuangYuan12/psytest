import Image from "next/image";

import Deco from "@/../public/deco/greenDeco.svg";
import Title from "@/../public/deco/title.svg";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#58644C] bg-[url(/deco/butterflyTexture.svg)]">
      <div className="w-full h-full backdrop-blur-sm flex justify-center">

        <div className="w-full h-full md:w-auto md:aspect-[9/16] p-6 bg-[#58644C] flex flex-col justify-center items-center">
          <Image src={Deco} alt="Decoration" className=""/>
          <Image src={Title} alt="Title" className=""/>
        </div>

      </div>
    </div>
  );
}
