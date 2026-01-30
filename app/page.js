import Navbar from "@/components/layout/Navbar";
import GuestProfileCard from "@/components/dashboard/GuestProfileCard";
import CurrentBookingCard from "@/components/dashboard/CurrentBookingCard";
export default function Home({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <div className="flex">
        <GuestProfileCard
          guest={{
            profileName: "johndoe",
            name: "John Doe",
            email: "test@gmail.com",
            phone: "+1234567890",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            bgAvatar:
              "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80 ",
          }}
        />
        <CurrentBookingCard booking={{
          id: "BK123456",
          room: {
            name: "Queen Room Deluxe Suite", 
            personLength: "2-3",
            bookingDate: "oct 20th - 24th, 2026",
            bedType: "Double ",
          },




        }}/>
     
      </div>
    </div>
  );
}