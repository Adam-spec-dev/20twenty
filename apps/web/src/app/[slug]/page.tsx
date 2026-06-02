import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ClientLanding from "./ClientLanding";

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
  m1?: string;
  m2?: string;
  m3?: string;
}

function slugify(name: string): string {
  const normalized = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // remove accents
  return normalized
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase() || "client";
}

function getSlug(n: number, name: string): string {
  const formattedN = String(n).padStart(2, "0");
  return `${formattedN}-${slugify(name)}`;
}

// Read leads file statically
function getLeads(): Lead[] {
  const filePath = path.join(process.cwd(), "src/data/leads.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

// Generate static routes for all 50 leads
export async function generateStaticParams() {
  const leads = getLeads();
  return leads.map((l) => ({
    slug: getSlug(l.n, l.name),
  }));
}

// Page component
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const leads = getLeads();

  const currentIndex = leads.findIndex((l) => getSlug(l.n, l.name) === slug);
  if (currentIndex === -1) {
    notFound();
  }

  const currentLead = leads[currentIndex];

  // Wrap around for previous and next links
  const prevIndex = (currentIndex - 1 + leads.length) % leads.length;
  const nextIndex = (currentIndex + 1) % leads.length;

  const prevSlug = getSlug(leads[prevIndex].n, leads[prevIndex].name);
  const nextSlug = getSlug(leads[nextIndex].n, leads[nextIndex].name);

  return (
    <ClientLanding
      lead={currentLead}
      prevSlug={prevSlug}
      nextSlug={nextSlug}
    />
  );
}
