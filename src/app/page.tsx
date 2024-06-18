import {
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import Links from "@/components/actions/Links/Links";
import Button from "@/components/actions/Button/Button";

export default function Home() {
  return (
    <main className="z-10 w-full lg:w-1/2 px-6">
      <Image
        className="mt-8 mb-[130px] xl:mb-[200px] mx-auto h-[35px] w-auto"
        src="/img/bydeusz-logo.svg"
        alt="bydeusz logo"
        width={150}
        height={35}
      />
      <h1 className="text-6xl font-extrabold mb-8">
        <span className="font-normal">Tech solutions</span> that free up
        business resources
      </h1>
      <p className="text-2xl font-light mb-8">
        👋🏽{" "}
        <span className=" opacity-30">
          I am Tadeusz. An Agile Software Developer specialised in Business
          Automations. Currently available for new projects, let’s chat!
        </span>
      </p>
      <Button
        href="https://drive.google.com/file/d/1dvAnnRDOSPXD3dfhW4itAmYA6tkbih10/view?usp=sharing"
        target="_blank">
        Download my pitch deck
      </Button>
      <div className="grid lg:grid-cols-1 xl:grid-cols-3 gap-4 mt-16">
        <Links
          href="https://www.linkedin.com/in/tadeuszderuijter/"
          target="_blank">
          <Image
            src="/img/linkedin-icon.svg"
            alt="linkedin icon on website"
            className="mr-2"
            objectFit="cover"
            width={24}
            height={24}
          />
          Connect with me
        </Links>
        <Links href="tel:+31620370451">
          <PhoneIcon className="w-4 h-4 mr-2" />
          Call me +316 20370451
        </Links>
        <Links href="#">
          <ChatBubbleBottomCenterTextIcon className="w-4 h-4 mr-2" />
          Schedule a meeting
        </Links>
      </div>
    </main>
  );
}
