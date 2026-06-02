"use client";

import React, { useState } from "react";
import styles from "../styles/landings.module.css";

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

interface DashboardPortalProps {
  leads: Lead[];
}

const CAT_LABELS: Record<string, string> = {
  fashion: "👗 Mode",
  food: "🍽️ Food",
  travel: "✈️ Voyage",
  health: "🩺 Santé",
  immo: "🏢 Immo",
  meuble: "🛋️ Maison",
  ecom: "🛒 E-com",
  cosm: "💄 Cosmétique",
  school: "🎓 Ecole",
  auto: "🔧 Auto",
  gym: "🏋️ Gym",
};

const CITY_LABELS: Record<string, string> = {
  bejaia: "Béjaïa",
  tizi: "Tizi Ouzou",
  setif: "Sétif",
};

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

export default function DashboardPortal({ leads }: DashboardPortalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");

  // Filtering logic
  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.cat.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat = selectedCat === "all" || l.cat === selectedCat;
    const matchesCity = selectedCity === "all" || l.city === selectedCity;

    return matchesSearch && matchesCat && matchesCity;
  });

  return (
    <div className={styles.container}>
      {/* Navigation bar */}
      <nav className={styles.nav}>
        <div className={styles.navin}>
          <a className={styles.brand} href="/">
            <span className={styles.logo}></span>
            <span>20TWENTY AI Portal</span>
          </a>
          <div className={styles.navlinks}>
            <span className={styles.kicker}>
              <span className={styles.liveDot}></span>
              Dashboard Agency
            </span>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className={styles.section} style={{ paddingTop: "40px" }}>
        <header className={styles.head} style={{ flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
          <h2>50 Landing Pages Démos Live</h2>
          <p>
            Chaque prospect dispose de son propre environnement de démonstration local avec un simulateur de chat intelligent adapté à son activité, une synthèse vocale réaliste en français, des modules d&apos;automatisation cliquables et une fiche d&apos;information CRM.
          </p>
        </header>

        {/* Statistics Row */}
        <section className={styles.statsPanel}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <b>50</b>
              <span>Dossiers Clients</span>
            </div>
            <div className={styles.statItem}>
              <b>50</b>
              <span>Chats Interactifs</span>
            </div>
            <div className={styles.statItem}>
              <b>50</b>
              <span>Démos Vocales</span>
            </div>
            <div className={styles.statItem}>
              <b>0</b>
              <span>Dépendances Externes</span>
            </div>
          </div>
        </section>

        {/* Search and Filters panel */}
        <section className={styles.controlsPanel}>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Rechercher une entreprise, une ville, une catégorie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Category Filters */}
          <div className={styles.filtersRow}>
            <button
              className={`${styles.filterButton} ${selectedCat === "all" ? styles.filterButtonActive : ""}`}
              onClick={() => setSelectedCat("all")}
            >
              Toutes les catégories
            </button>
            {Object.entries(CAT_LABELS).map(([key, value]) => (
              <button
                key={key}
                className={`${styles.filterButton} ${selectedCat === key ? styles.filterButtonActive : ""}`}
                onClick={() => setSelectedCat(key)}
              >
                {value}
              </button>
            ))}
          </div>

          {/* City Filters */}
          <div className={styles.filtersRow}>
            <button
              className={`${styles.filterButton} ${selectedCity === "all" ? styles.filterButtonActive : ""}`}
              onClick={() => setSelectedCity("all")}
            >
              Toutes les villes
            </button>
            {Object.entries(CITY_LABELS).map(([key, value]) => (
              <button
                key={key}
                className={`${styles.filterButton} ${selectedCity === key ? styles.filterButtonActive : ""}`}
                onClick={() => setSelectedCity(key)}
              >
                {value}
              </button>
            ))}
          </div>
        </section>

        {/* Grid of clients */}
        <section className={styles.dashboardGrid}>
          {filteredLeads.map((l) => {
            const slug = getSlug(l.n, l.name);
            const catLabel = CAT_LABELS[l.cat] || l.cat;
            return (
              <a key={l.n} className={styles.dashboardCard} href={`/${slug}`}>
                <div>
                  <div className={styles.dashboardCardHeader}>
                    <span className={styles.dashboardCardNum}>{String(l.n).padStart(2, "0")}</span>
                    <span className={styles.dashboardCardTag}>{catLabel}</span>
                  </div>
                  <h3 className={styles.dashboardCardTitle}>{l.name}</h3>
                  <p className={styles.dashboardCardDesc}>{l.sub}</p>
                </div>
                <div className={styles.dashboardCardFooter}>
                  <span className={styles.dashboardCardLikes}>{l.likes} abonnés</span>
                  <span className={styles.dashboardCardLink}>
                    Tester l&apos;IA <span>→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </section>

        {filteredLeads.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--muted)", fontSize: "1.1rem" }}>
            Aucun dossier client ne correspond à votre recherche.
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <span>20TWENTY Agency AI Dashboard Portal</span>
        <span>© {new Date().getFullYear()} 100X Elite Engineering Foundation</span>
      </footer>
    </div>
  );
}
