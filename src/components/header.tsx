"use client";

import Image from "next/image";
import { Bell } from "lucide-react";
import { FaBars } from "react-icons/fa";

export default function Header({
  activePage,
  onHamburgerClick,
}: {
  activePage: string;
  onHamburgerClick?: () => void;
}) {
  return (
    <header className="flex items-center justify-between px-4 md:px-16 py-4 bg-white shadow-sm">
      {/* Left: Hamburger + Title */}
      <div className="flex items-center gap-4">
        {/* Hamburger - only on mobile */}
        <button onClick={onHamburgerClick} className="md:hidden text-2xl text-gray-700">
          <FaBars />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">{activePage}</h1>
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-4">
        <Bell className="w-6 h-6 md:w-8 md:h-8 text-gray-600 cursor-pointer" />
        <div className="flex items-center gap-2">
          <Image
            src="/profile.svg"
            alt="Profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="hidden sm:inline text-sm font-medium text-gray-800">
            Temitope Soremekun
          </span>
        </div>
      </div>
    </header>
  );
}
