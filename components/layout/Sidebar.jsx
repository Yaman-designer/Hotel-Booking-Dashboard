"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  DoorClosed,
  CalendarDays,
  User,
  ConciergeBell,
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Room", href: "/room", icon: DoorClosed },
  { name: "Bookings", href: "/bookings", icon: CalendarDays },
  { name: "Guest", href: "/guest", icon: User },
  { name: "Concierge", href: "/concierge", icon: ConciergeBell },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen border-r bg-background">
      <div className="h-16 flex items-center justify-center text-xl font-bold">
        Hotel
      </div>

      <nav className="flex flex-col gap-2 px-3">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-2 rounded-lg py-4 transition group",
                isActive
                  ? "bg-white text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              )}
            >
              <Icon
                className={cn(
                  "h-6 w-6 transition",
                  isActive
                    ? "text-primary"
                    : "group-hover:text-primary"
                )}
              />
              <span className="text-sm font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
