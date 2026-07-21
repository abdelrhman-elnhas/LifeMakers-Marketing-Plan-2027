import Header from "./components/Header";
import Hero from "./components/Hero";
import WheelSection from "./components/WheelSection";
import PrinciplesSection from "./components/PrinciplesSection";
import TeamsSection from "./components/TeamsSection";
import EvergreenPillarsSection from "./components/EvergreenPillarsSection";
import WeeklyCalendarSection from "./components/WeeklyCalendarSection";
import DevPlanSection from "./components/DevPlanSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <WheelSection />
      <EvergreenPillarsSection />
      <WeeklyCalendarSection />
      <PrinciplesSection />
      <TeamsSection />
      <DevPlanSection />
      <Footer />
    </div>
  );
}
