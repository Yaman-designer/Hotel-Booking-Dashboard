import { Cairo, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Hotel Booking Dashboard",
  description: "Hotel booking dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} ${poppins.variable} antialiased`}>
        <Navbar />  
        {children}
      </body>
    </html>
  );
}
