import WelcomeSection from "@/components/dashboard/WelcomeSection";
import StatsCards from "@/components/dashboard/StatsCards";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <WelcomeSection name="Ahmed" />
      <StatsCards />
    </div>
  );
}
