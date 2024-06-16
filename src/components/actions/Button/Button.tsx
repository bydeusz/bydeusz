import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}

export default function Button({ href, children, target }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className="inline-block bg-bydeusz_light_green font-extrabold text-bydeusz_dark_green rounded-full py-6 px-10 hover:bg-bydeusz_green transition-all duration-300">
      {children}
    </Link>
  );
}
