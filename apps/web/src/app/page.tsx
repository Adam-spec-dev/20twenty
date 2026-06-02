import fs from "fs";
import path from "path";
import DashboardPortal from "./DashboardPortal";

interface StackItem {
  n: string;
  d: string;
}

interface Lead {
  n: number;
  name: string;
  cat: string;
  city: string;
  likes: string;
  sub: string;
  phone: string;
  fb: string;
  ai: string;
  price: string;
  pain: string;
  stack: StackItem[];
  pitch: string;
}

function getLeads(): Lead[] {
  const filePath = path.join(process.cwd(), "src/data/leads.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export default function HomePage() {
  const leads = getLeads();

  return <DashboardPortal leads={leads} />;
}
