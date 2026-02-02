import { ChevronRight } from "lucide-react";
export default function RecentBookings() {
  return (
    <>
      <div className="w-full flex justify-between items-center pt-5">
        <h1 className="text-xl font-bold">Recent Bookings</h1>
        <button className="group flex items-center gap-2 bg-slate-0 text-gray-500 font-medium text-lg">
          see all
          <ChevronRight className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-1.5" />
        </button>
      </div>
    </>
  );
}
