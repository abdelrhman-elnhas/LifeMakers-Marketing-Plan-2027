import { useState } from "react";
import Header from "./components/Header";
import PlanPage from "./components/pages/PlanPage";
import MeetingsPage from "./components/pages/MeetingsPage";
import FacebookGrowthPage from "./components/pages/FacebookGrowthPage";
import AdBudgetPage from "./components/pages/AdBudgetPage";
import CharitiesPage from "./components/pages/CharitiesPage";
import Footer from "./components/Footer";

const pageComponents = {
  plan: PlanPage,
  meetings: MeetingsPage,
  facebook: FacebookGrowthPage,
  ads: AdBudgetPage,
  charities: CharitiesPage,
};

export default function App() {
  const [activePage, setActivePage] = useState("plan");
  const ActivePageComponent = pageComponents[activePage];

  return (
    <div className="wrap">
      <Header activePage={activePage} onSelect={setActivePage} />
      <ActivePageComponent />
      <Footer />
    </div>
  );
}
