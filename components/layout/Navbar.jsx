import { MessageSquareMore, Bell, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="w-full h-16  bg-background text-foreground">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-primary">
            Hotel Dashboard
          </span>
        </div>

        {/* Center */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search here"
            className="
      w-full h-10 rounded-full
      bg-blue-100
      pl-10 pr-10
      text-sm
      placeholder:text-muted-foreground
      border-border
      focus:outline-none
      focus:border-primary
    "
          />

          {/* vertical line */}
          <span className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-[2px] bg-primary" />

          {/* search icon */}
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-8 md:w-96">
          {/* Profile */}
          <div className="flex items-center gap-2">
            <Avatar className="h-7 w-7 flex items-center justify-center">
              <AvatarImage src="/globe.svg" alt="User Avatar" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-primary">John Doe</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary cursor-pointer"
            >
              <MessageSquareMore
                className="h-10 w-10"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary cursor-pointer"
            >
              <Bell
                className="h-10 w-10"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary cursor-pointer"
            >
              <Heart
                className="h-10 w-10"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
              />
            </Button>
          </div>

          {/* Language Button */}
          <button className="flex items-center gap-1 border rounded-full px-3 py-1 text-sm">
            EN
            <span className="text-xs">⌄</span>
          </button>
        </div>
      </div>
    </header>
  );
}
