import Link from "next/link";

interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}

export default function Links({ children, href, target }: LinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className="flex items-center opacity-30 hover:opacity-100 justify-center transition-all duration-300">
      {children}
    </Link>
  );
}
