"use client";

import { usePathname } from "next/navigation";
import {
  MessageSquare,
  Bell,
  Heart,
  Search,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const pathTitles = {
  "/": "Dashboard",
  "/room": "Room",
  "/bookings": "Bookings",
  "/guest": "Guest",
  "/concierge": "Concierge",
};

export default function Navbar({ onMenuClick }) {
  const pathname = usePathname();

  const Title = pathTitles[pathname] || "Page";

  return (
    <header className="w-full h-16 bg-white border-b">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Menu Button - Mobile */}
          <button onClick={onMenuClick} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>

          <h1 className="text-lg lg:text-xl font-bold text-gray-900">{Title}</h1>
        </div>

        {/* Search - Desktop only */}
        <div className="hidden lg:block relative w-96">
          <input
            type="text"
            placeholder="Search here"
            className="w-full h-10 rounded-lg bg-gray-50 pl-4 pr-10 text-sm border  focus:outline-none   focus:border-transparent focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Icons - Desktop only */}
          <div className="hidden lg:flex items-center gap-1">
            <IconButton icon={MessageSquare} count={3} />
            <IconButton icon={Bell} count={5} />
            <IconButton icon={Heart} count={2} fill="CurrentColor" />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9  text-gray-900">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>GE</AvatarFallback>
            </Avatar>

            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold  text-gray-900">Geovanny</span>
              <span className="text-xs text-gray-500">Superadmin</span>
            </div>
          </div>

          {/* Language - Desktop only */}
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded-lg  text-gray-900">
            EN <ChevronDown className="h-4 w-4  text-gray-900" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* Helper */
function IconButton({ icon: Icon, count, color = "primary" }) {
  return (
    <button className="relative p-2 hover:bg-gray-50 rounded-lg">
      <Icon className={`h-5 w-5 text-${color}`} />
      <span className="absolute top-1 right-1 h-4 w-4 text-[10px] flex items-center justify-center rounded-full bg-primary text-white">
        {count}
      </span>
    </button>
  );
}
