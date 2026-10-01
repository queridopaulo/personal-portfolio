import { PortfolioSite } from "./components/PortfolioSite";
import { resumeData } from "./data/resume";

export default function Home() {
  return <PortfolioSite data={resumeData} />;
}
