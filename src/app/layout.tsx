import "@/assets/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-bydeusz_dark_green text-bydeusz_light_green flex items-center h-screen w-full font-gilmer justify-center text-center">
        {children}
      </body>
    </html>
  );
}
