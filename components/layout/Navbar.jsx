import { MessageSquare, Bell, Heart, Search, ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left - Title */}
        <h1 className="text-xl font-bold text-gray-900">Guest Details</h1>

        {/* Center - Search */}
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search here"
            className="w-full h-10 rounded-lg bg-gray-50 pl-4 pr-10 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <Search className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {/* Right - Icons & Profile */}
        <div className="flex items-center gap-3">
          {/* Notification Icons with Badges */}
          <div className="flex items-center gap-1">
            {/* Messages */}
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <MessageSquare className="h-5 w-5 text-primary-500" strokeWidth={2} />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-primary-500" strokeWidth={2} />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white">
                5
              </span>
            </button>

            {/* Favorites */}
            <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Heart className="h-5 w-5 text-secondary-500" strokeWidth={2} fill="currentColor" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-500 text-[10px] font-bold text-white">
                2
              </span>
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-3 ml-2">
            {/* Avatar */}
            <Avatar className="h-10 w-10 ring-2 ring-primary-500">
              <AvatarImage src="/avatar.jpg" alt="Geovanny" />
              <AvatarFallback className="bg-primary-500 text-white font-semibold text-sm">
                GE
              </AvatarFallback>
            </Avatar>
            
            {/* User Info */}
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900 leading-tight">
                Geovanny
              </span>
              <span className="text-xs text-gray-500 leading-tight">
                Superadmin
              </span>
            </div>
          </div>

          {/* Language Selector */}
          <button className="flex items-center gap-1 px-3 py-1.5 ml-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200">
            EN
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}