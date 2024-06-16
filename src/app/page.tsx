import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full lg:w-1/2 px-4 space-y-8">
      <h1 className="text-6xl font-extrabold">
        <span className="font-normal">Tech solutions</span> that free up
        business resources
      </h1>
      <p className="text-2xl font-light">
        👋🏽{" "}
        <span className=" opacity-30">
          I am Tadeusz. An Agile Software Developer specialised in Business
          Automations. Currently available for new projects, let’s chat!
        </span>
      </p>
      <Link
        href="#"
        className="inline-block bg-bydeusz_light_green font-extrabold text-bydeusz_dark_green rounded-full py-6 px-10 hover:bg-bydeusz_green">
        Download my pitch deck
      </Link>
      <ul className="text-sm flex space-x-24 justify-center items-center font-light">
        <li>
          <Link href="#" className="opacity-30 hover:opacity-100">
            Connect with me
          </Link>
        </li>
        <li>
          <Link href="#" className="opacity-30 hover:opacity-100">
            Call me +316 12345678
          </Link>
        </li>
        <li>
          <Link href="#" className="opacity-30 hover:opacity-100">
            Schedule a meeting
          </Link>
        </li>
      </ul>
    </main>
  );
}
