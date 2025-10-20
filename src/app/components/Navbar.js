"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-gray-900">
      <Link href="/" className="text-xl font-bold text-white">
        &#123; Divyesh &#125; ::
      </Link>
      <div className="space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`hover:text-blue-400 ${
              pathname === item.path ? "text-blue-400" : "text-gray-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}