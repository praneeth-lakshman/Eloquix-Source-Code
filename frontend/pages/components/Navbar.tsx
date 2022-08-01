import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Blog", href: "/blog" },
    { id: 3, name: "Contact", href: "/contact" },
    { id: 4, name: "About", href: "/about" },
  ];
  return (
    <nav className="w-full bg-slate-800 shadow-2xl">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-2 md:block">
            <a href="javascript:void(0)">
              <Image src="/With_text.svg" width="200px" height="50px" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              ></button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navItems.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.href}>
                      <span className="link link-underline link-underline-black text-[#FFE4C4] font-semibold text-xl">
                        {item.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
