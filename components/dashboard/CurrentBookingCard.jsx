import RoomGallery from "@/components/dashboard/RoomGallery";

export default function CurrentBookingCard({ booking }) {
    return (
        <div className="p-4 border rounded-lg shadow-md w-full max-w-5xl mt-12">
            {/* TODO RESPONSIVE */}
            {/* TODO DESIGN */}
            <h2 className="text-2xl font-semibold mb-4">Current Booking</h2>
            <p><strong>Guest Name:</strong> {booking.guestName}</p>
            <p><strong>Room Number:</strong> {booking.roomNumber}</p>
            <p><strong>Check-in Date:</strong> {booking.checkInDate}</p>

            <p><strong>Check-out Date:</strong> {booking.checkOutDate}</p>
            <p><strong>Status:</strong> {booking.status}</p>
            <br />
               <RoomGallery
          room={{
            images: [
              "https://images.unsplash.com/photo-1566073771259-6a8506099945",
              "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
              "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
              "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            ],
          }}
        />
        </div>
    );
}   
