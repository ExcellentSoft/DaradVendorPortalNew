// components/DashboardHeader.tsx
import Image from "next/image";
import { Bell, Search } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-16 py-4 bg-white shadow-sm">
      {/* Left: Title */}
      <h1 className="text-xl font-semibold text-gray-900">Dashboard Overview</h1>

      {/* Center: Search */}
      <div className="relative flex-1 mx-6 max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Search orders, products, customers......"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-4">
        <Bell className="w-8 h-8 text-gray-600 cursor-pointer" />
        <div className="flex items-center gap-2">
          <Image
            src="/profile.svg" 
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
            width={10} height={10} 
          />
          <span className="text-sm font-medium text-gray-800">Temitope Soremekun</span>
        </div>
      </div>
    </header>
  );
}
