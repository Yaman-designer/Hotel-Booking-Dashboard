import {CalendarDays} from "lucide-react";
export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pt-9">
      <CardsUi
        className="border-l-secondary-700"
        icon={CalendarDays}
        paragraf="320"
        title="Total Rooms"
      />
      <CardsUi
        className="border-l-primary-700"
        icon={CalendarDays}
        paragraf="140"
        title="Available Rooms"
      />
      <CardsUi
        className="border-l-pink-800"
        icon={CalendarDays}
        paragraf="32"
        title="Bookings Today"
      />
      <CardsUi
        className="border-l-emerald-700"
        icon={CalendarDays}
        paragraf="320"
        title="Occupied Rooms"
      />
    </div>
  );
}

export function CardsUi({ className, paragraf, title, icon: Icon }) {
  return (
    <div className={`w-full min-h-[96px] bg-white shadow-md flex items-center justify-between p-4 border-l-4 rounded-lg ${className}`}>
      <div>
        <p className="text-xs sm:text-sm text-gray-500">{title}</p>
        <h2 className="text-lg sm:text-xl font-bold">{paragraf}</h2>
      </div>

      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
    </div>
  );
}
