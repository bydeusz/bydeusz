import "@/assets/styles/globals.css";

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-bydeusz_dark_green text-bydeusz_light_green flex h-screen w-full font-gilmer justify-center text-center">
        <Image
          className="absolute top-0 right-0 z-0 h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] 2xl:h-[400px] 2xl:w-[400px]"
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
