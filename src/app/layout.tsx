import "@/assets/styles/globals.css";

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-bydeusz_dark_green text-bydeusz_light_green flex items-center h-screen w-full font-gilmer justify-center text-center">
        <Image
          className="absolute top-6 z-0 h-[50px] w-auto"
          src="/img/bydeusz-logo.svg"
          alt="bydeusz logo"
          width={200}
          height={200}
        />
        <Image
          className="absolute top-0 right-0 z-0 h-[150px] w-[150px] lg:h-[400px] lg:w-[400px]"
          src="/img/bydeusz-bg-visual.svg"
          alt="bydeusz background visual"
          objectFit="cover"
          width={500}
          height={500}
        />
        {children}
      </body>
    </html>
  );
}
