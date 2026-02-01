import { CalendarDays } from "lucide-react";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-5 gap-3 pt-9">
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
export  function CardsUi({ className, paragraf, title, icon: Icon }) {
  return (
    <div className={`w-52 h-24 bg-white shadow-md flex items-center justify-between p-3  border-l-4 rounded-md ${className}`}>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-bold">{paragraf}</h2>
      </div>

      <Icon className="text-gray-400" />
    </div>
  );
}
