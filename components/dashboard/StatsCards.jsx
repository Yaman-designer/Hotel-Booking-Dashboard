import { CalendarDays } from "lucide-react";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <CardsUi
        className="border-l-secondary-900"
        icon={CalendarDays}
        paragraf="320"
        title="Bookings"
      />
    </div>
  );
}
export  function CardsUi({ className, paragraf, title, icon: Icon }) {
  return (
    <div className={`w-40 h-20 bg-white shadow-sm flex items-center justify-between p-3 border border-l-4 ${className}`}>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-bold">{paragraf}</h2>
      </div>

      <Icon className="text-gray-400" />
    </div>
  );
}
