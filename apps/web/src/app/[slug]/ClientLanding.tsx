"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/landings.module.css";

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

interface ClientLandingProps {
  lead: Lead;
  prevSlug: string;
  nextSlug: string;
}

// Category configuration matches Python script
const CITY_LABEL: Record<string, string> = {
  bejaia: "Béjaïa",
  tizi: "Tizi Ouzou",
  setif: "Sétif",
  other: "Algérie",
};

interface CatMeta {
  label: string;
  emoji: string;
  primary: string;
  goal: string;
  actions: string[];
  fields: string[];
  voice: string;
}

const CAT_META: Record<string, CatMeta> = {
  fashion: {
    label: "Mode & retail",
    emoji: "👗",
    primary: "AI vendeur catalogue",
    goal: "transformer les commentaires “prix?” en conversations de vente",
    actions: ["Prix & tailles", "Commander maintenant", "Adresse magasin", "Nouvel arrivage"],
    fields: ["produit", "taille", "couleur", "ville", "téléphone"],
    voice: "Bonjour, je peux vérifier les tailles, couleurs et disponibilité, puis préparer votre commande ou vous orienter vers le magasin le plus proche.",
  },
  food: {
    label: "Food / restaurant",
    emoji: "🍽️",
    primary: "AI commandes & réservations",
    goal: "prendre commandes, réservations et anniversaires sans saturer le téléphone",
    actions: ["Commander", "Réserver une table", "Menu du jour", "Livraison"],
    fields: ["commande", "nombre de personnes", "heure", "adresse", "téléphone"],
    voice: "Bonjour, dites-moi si vous souhaitez commander, réserver une table ou organiser un anniversaire. Je confirme tout de suite les détails.",
  },
  travel: {
    label: "Voyage",
    emoji: "✈️",
    primary: "AI conseiller voyage",
    goal: "répondre aux prix, dates et places restantes, puis pré-réserver",
    actions: ["Voir programme", "Prix & dates", "Pré-réserver", "Documents"],
    fields: ["destination", "date souhaitée", "nombre de voyageurs", "budget", "téléphone"],
    voice: "Bonjour, je vous présente le programme, les dates disponibles, les inclusions et les places restantes. Je peux aussi préparer une pré-réservation.",
  },
  health: {
    label: "Santé / beauté",
    emoji: "🩺",
    primary: "AI rendez-vous",
    goal: "réduire appels manqués et no-shows avec prise de rendez-vous automatique",
    actions: ["Prendre RDV", "Prix service", "Disponibilités", "Adresse"],
    fields: ["service souhaité", "jour préféré", "nom", "téléphone", "urgence"],
    voice: "Bonjour, je vous aide à choisir le service, vérifier les disponibilités et confirmer votre rendez-vous par WhatsApp.",
  },
  immo: {
    label: "Immobilier",
    emoji: "🏢",
    primary: "AI qualification immobilière",
    goal: "qualifier budget, type de bien et organiser une visite",
    actions: ["F3 / F4 disponible", "Prix & crédit", "Planifier visite", "Voir plans"],
    fields: ["type de bien", "budget", "paiement", "quartier", "téléphone"],
    voice: "Bonjour, je vais qualifier votre recherche en trois questions puis proposer les biens adaptés et les créneaux de visite.",
  },
  meuble: {
    label: "Maison / meubles",
    emoji: "🛋️",
    primary: "AI catalogue & devis",
    goal: "envoyer modèles, prix, dimensions et devis livraison instantanément",
    actions: ["Voir catalogue", "Prix modèle", "Devis livraison", "Commander"],
    fields: ["pièce recherchée", "modèle", "ville", "budget", "téléphone"],
    voice: "Bonjour, je peux vous envoyer les modèles disponibles, dimensions, prix et calculer la livraison selon votre ville.",
  },
  ecom: {
    label: "E-commerce",
    emoji: "🛒",
    primary: "AI boutique WhatsApp",
    goal: "prendre commandes structurées et suivre les colis sans appels répétitifs",
    actions: ["Commander produit", "Prix & stock", "Suivi commande", "Livraison wilaya"],
    fields: ["produit", "quantité", "wilaya", "adresse", "téléphone"],
    voice: "Bonjour, je vérifie stock, prix et livraison, puis je prends votre commande avec toutes les informations nécessaires.",
  },
  cosm: {
    label: "Cosmétique",
    emoji: "💄",
    primary: "AI conseiller beauté",
    goal: "recommander les bons produits et relancer les réachats",
    actions: ["Conseil peau", "Prix produit", "Commander", "Réachat"],
    fields: ["type de peau", "problème", "produit", "ville", "téléphone"],
    voice: "Bonjour, je pose deux questions sur votre type de peau ou cheveux, puis je recommande le produit le plus adapté.",
  },
  school: {
    label: "Formation",
    emoji: "🎓",
    primary: "AI inscriptions",
    goal: "répondre aux formations, prix, sessions et inscriptions",
    actions: ["Formations disponibles", "Prix & durée", "Inscription", "Prochaine session"],
    fields: ["formation", "niveau", "session", "nom", "téléphone"],
    voice: "Bonjour, je vous indique les formations disponibles, les dates, les prix et les étapes d’inscription.",
  },
  auto: {
    label: "Auto / pièces",
    emoji: "🔧",
    primary: "AI pièces & devis",
    goal: "vérifier disponibilité des pièces et générer des devis rapides",
    actions: ["Chercher pièce", "Prix & stock", "Devis liste", "Réserver pièce"],
    fields: ["marque", "modèle", "année", "pièce", "téléphone"],
    voice: "Bonjour, envoyez marque, modèle, année et pièce. Je vérifie disponibilité, prix et réservation.",
  },
  gym: {
    label: "Fitness",
    emoji: "🏋️",
    primary: "AI abonnements & rétention",
    goal: "convertir inscriptions et relancer les membres absents",
    actions: ["Prix abonnement", "Horaires", "Réserver séance", "Programme"],
    fields: ["objectif", "abonnement", "horaire", "nom", "téléphone"],
    voice: "Bonjour, je vous donne les abonnements, horaires et je peux réserver une séance d’essai ou relancer votre programme.",
  },
};

interface ChatMessage {
  text: string;
  who: "bot" | "user" | "typing";
  stamp: string;
}

export default function ClientLanding({ lead, prevSlug, nextSlug }: ClientLandingProps) {
  const meta = CAT_META[lead.cat] || CAT_META.ecom;
  const city = CITY_LABEL[lead.city] || "Algérie";
  const phone = lead.phone && lead.phone !== "N/A" ? lead.phone : "à connecter";
  const aiStatus = lead.ai === "no" ? "Aucune IA détectée" : lead.ai === "partial" ? "Automatisation partielle" : "IA présente";

  // Fit score calculation logic matching Python script
  const getFitScore = () => {
    let nVal = 0;
    try {
      nVal = parseInt(lead.likes.replace(/[^0-9]/g, "") || "0");
    } catch {
      nVal = 0;
    }
    let score = 74;
    if (nVal > 200000) score = 98;
    else if (nVal > 100000) score = 94;
    else if (nVal > 40000) score = 90;
    else if (nVal > 10000) score = 84;
    else if (nVal > 3000) score = 79;
    return lead.ai === "partial" ? score - 4 : score;
  };

  // Bot intents & response scripts
  const st = lead.stack || [];
  const s1 = st[0]?.n || meta.primary;
  const s2 = st[1]?.n || "relance automatique";
  const s3 = st[2]?.n || "avis et fidélisation";
  const fieldsStr = meta.fields.slice(0, 4).join(", ");

  const RESPONSE_SCRIPTS: Record<string, string> = {
    price: `Je peux répondre aux demandes de prix sans faire attendre le client. Pour ${lead.name}, je montre l’offre, je vérifie les infos utiles (${fieldsStr}) et je propose l’étape suivante. Module utilisé: ${s1}.`,
    book: `Parfait. Je collecte les informations nécessaires, je crée une fiche prospect propre, puis j’envoie un récapitulatif à l’équipe. Si le client hésite, ${s2} déclenche une relance avec urgence claire.`,
    location: `Je donne adresse, horaires, zones de livraison ou conditions selon le cas. Le but: enlever la friction avant qu’un humain intervienne. Cela évite les messages répétés et les appels inutiles.`,
    human: `Je transfère seulement quand le prospect est chaud: besoin clair, coordonnées collectées, intention validée. L’équipe reçoit un résumé professionnel et peut répondre avec contexte complet.`,
    review: `Après achat, visite ou service, ${s3} demande un avis, récupère feedback et détecte les problèmes avant qu’ils deviennent publics.`,
    fallback: `Je peux gérer les questions fréquentes de ${lead.name}: prix, disponibilité, réservation, livraison, suivi, avis et relance. Essayez un message comme: ‘prix?’, ‘je veux réserver’, ‘livraison?’ ou ‘humain’.`,
  };

  const getNowString = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // React State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [leadCRM, setLeadCRM] = useState({
    status: "Nouveau visiteur",
    intent: "Non détecté",
    missingInfo: meta.fields.slice(0, 3).join(", "),
    nextAction: "Répondre à la première question",
  });
  const [chatTurns, setChatTurns] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat with Welcome Messages
  useEffect(() => {
    setMessages([
      {
        who: "bot",
        text: `<b>Bonjour 👋</b> Je suis l’assistant live de <strong>${lead.name}</strong>. Testez-moi avec une question comme: <i>prix, réserver, livraison, devis ou humain</i>.`,
        stamp: getNowString(),
      },
    ]);

    // Simulate second welcome message shortly after
    const timer = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          who: "bot",
          text: "<b>Objectif principal:</b> répondre en moins de 60 secondes, qualifier le prospect et préparer le transfert (handoff) proprement vers un humain.",
          stamp: getNowString(),
        },
      ]);
    }, 700);

    return () => clearTimeout(timer);
  }, [lead.name, meta.fields]);

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Toast System Helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Classify User Input to Intent
  const classify = (txt: string) => {
    const clean = txt.toLowerCase();
    if (/prix|tarif|cout|combien|price|taille|stock|dispo|available|valeur|acheter/.test(clean)) return "price";
    if (/rdv|rendez|reserve|réserve|reservation|commander|commande|book|visite|inscri|devis|quote|planning/.test(clean)) return "book";
    if (/adresse|où|ou se trouve|livraison|wilaya|location|horaire|open|delivery|boutique|magasin/.test(clean)) return "location";
    if (/humain|agent|appel|call|manager|vendeur|conseiller|directeur|téléphone/.test(clean)) return "human";
    if (/avis|review|google|feedback|suivi|garantie|reclamation|rembourser/.test(clean)) return "review";
    return "fallback";
  };

  const getHumanIntentName = (intent: string) => {
    const map: Record<string, string> = {
      price: "Prix / disponibilité",
      book: "Intention de commande/RDV",
      location: "Localisation / livraison",
      human: "Transfert humain requis",
      review: "Avis / suivi client",
      fallback: "FAQ générale",
    };
    return map[intent] || intent;
  };

  // Send Chat message
  const handleSendChat = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    // Add user message
    const userMsg: ChatMessage = {
      who: "user",
      text: text,
      stamp: getNowString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    const intent = classify(text);
    const turns = chatTurns + 1;
    setChatTurns(turns);

    // Add typing state
    setMessages((prev) => [...prev, { who: "typing", text: "...", stamp: getNowString() }]);

    // Simulate AI response delay
    setTimeout(() => {
      // Remove typing, and add bot response
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.who !== "typing");
        let reply = RESPONSE_SCRIPTS[intent] || RESPONSE_SCRIPTS.fallback;

        if (intent === "book") {
          reply += `<br/><br/><b>Question suivante:</b> collecter les champs ${meta.fields.slice(0, 3).join(" + ")}?`;
        } else if (intent === "price") {
          reply += `<br/><br/><b>Prochaine étape:</b> Voulez-vous que je prépare une commande ou réservation test?`;
        } else if (intent === "human") {
          reply += `<br/><br/><b>Résumé du transfert:</b> intention d'achat détectée, fiche prospect enregistrée, équipe alertée.`;
        }

        return [
          ...filtered,
          {
            who: "bot",
            text: reply,
            stamp: getNowString(),
          },
        ];
      });

      // Update CRM Card
      const missing = meta.fields.slice(Math.min(turns, 3)).join(", ") || "Fiche complète pour transfert";
      const nextActMap: Record<string, string> = {
        book: "Confirmer créneau/panier",
        price: "Envoyer l'offre + urgence",
        location: "Envoyer itinéraire/détails",
        human: "Notifier l'équipe commerciale",
        review: "Demander note et feedback",
        fallback: "Poser une question ouverte",
      };

      setLeadCRM({
        status: intent === "human" ? "Prêt pour transfert" : "Qualifié en cours",
        intent: getHumanIntentName(intent),
        missingInfo: missing,
        nextAction: nextActMap[intent] || "Poser une question qualifiante",
      });
    }, 800 + Math.random() * 400);
  };

  // Clickable stack card logic
  const handleTestModule = (index: number) => {
    const s = st[index];
    if (!s) return;

    // Scroll to phone simulator
    const simulator = document.getElementById("live-demo");
    if (simulator) {
      simulator.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Add custom system bubble
    setMessages((prev) => [
      ...prev,
      {
        who: "user",
        text: `Déclencher module: ${s.n}`,
        stamp: getNowString(),
      },
    ]);

    setMessages((prev) => [...prev, { who: "typing", text: "...", stamp: getNowString() }]);

    setTimeout(() => {
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.who !== "typing");
        return [
          ...filtered,
          {
            who: "bot",
            text: `<b>[Module ${s.n} activé]</b><br/>${s.d}<br/><br/>Dans la version finale, ce module s'active sur Facebook/WhatsApp avec vos règles métiers.`,
            stamp: getNowString(),
          },
        ];
      });
      triggerToast(`Module chargé dans le simulateur: ${s.n}`);
    }, 600);
  };

  // Play Vocal Synthesis
  const handlePlayVoice = () => {
    if (isVoicePlaying) {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsVoicePlaying(false);
      return;
    }

    setIsVoicePlaying(true);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(meta.voice);
      utterance.lang = "fr-FR";
      utterance.rate = 0.92;
      utterance.pitch = 0.96;

      utterance.onend = () => {
        setIsVoicePlaying(false);
      };

      utterance.onerror = () => {
        setIsVoicePlaying(false);
      };

      window.speechSynthesis.speak(utterance);
      triggerToast("Synthèse vocale en cours d'écoute...");
    } else {
      // Fallback timer if SpeechSynthesis not supported
      setTimeout(() => {
        setIsVoicePlaying(false);
      }, 4000);
      triggerToast("Synthèse vocale non supportée par votre navigateur.");
    }
  };

  // Copy Pitch message
  const handleCopyPitch = () => {
    navigator.clipboard.writeText(lead.pitch);
    triggerToast("Message d'approche copié dans le presse-papier !");
  };

  return (
    <div className={styles.container}>
      {/* Sticky Top Nav */}
      <nav className={styles.nav}>
        <div className={styles.navin}>
          <a className={styles.brand} href="/">
            <span className={styles.logo}></span>
            <span>20TWENTY AI Portal</span>
          </a>
          <div className={styles.navlinks}>
            <a className={styles.pill} href={`/${prevSlug}`}>
              ← Précédent
            </a>
            <a className={styles.pill} href={`/${nextSlug}`}>
              Suivant →
            </a>
            <a className={styles.pill} target="_blank" rel="noopener noreferrer" href={lead.fb}>
              Page Facebook
            </a>
            <a className={styles.cta} href="#live-demo">
              Démo interactive
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className={styles.hero}>
        <div>
          <span className={styles.kicker}>
            <span className={styles.liveDot}></span>
            {city} · {meta.label} · Démo Client
          </span>
          <h1 className={styles.heroTitle}>
            {lead.name}
            <br />
            <span>AI Conversational Demo</span>
          </h1>
          <p className={styles.copy}>
            Cette interface propose une simulation client ultra-réaliste pour <strong>{lead.name}</strong>. Testez les messages clés en direct, écoutez la voix d&apos;accueil générée, et observez la fiche CRM se remplir à la volée.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.cta} href="#live-demo">
              Lancer le simulateur live
            </a>
            <a className={styles.pill} href="#stack">
              Voir le stack technique
            </a>
          </div>
          <div className={styles.proof}>
            <span>{lead.likes} abonnés</span>
            <span>{aiStatus}</span>
            <span>Recommandé: {lead.price} DZD/mois</span>
          </div>
        </div>

        {/* Live Demo Shell (Right Column) */}
        <aside className={styles.demoShell} id="live-demo">
          <div className={styles.demoTop}>
            <div>
              <div className={styles.clientName}>{lead.name}</div>
              <div className={styles.clientSub}>
                {lead.sub}
                <br />
                Téléphone/WA: <strong>{phone}</strong> · Solution: {meta.primary}
              </div>
            </div>
            <div className={styles.score}>
              <b>{getFitScore()}</b>
              <small>fit score</small>
            </div>
          </div>

          <div className={styles.lab}>
            {/* Interactive Phone Simulator */}
            <div className={styles.phone}>
              <div className={styles.phonebar}>WhatsApp / Messenger Agent</div>
              <div className={styles.screen}>
                <div className={styles.messages}>
                  {messages.map((m, idx) => {
                    if (m.who === "typing") {
                      return (
                        <div key={idx} className={styles.typing}>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={idx}
                        className={m.who === "user" ? styles.msgUser : styles.msgBot}
                        dangerouslySetInnerHTML={{
                          __html: m.text + `<span class="${styles.stamp}">${m.stamp}</span>`,
                        }}
                      />
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick actions row */}
                <div className={styles.quick}>
                  {meta.actions.map((act, idx) => (
                    <button key={idx} onClick={() => handleSendChat(act)}>
                      {act}
                    </button>
                  ))}
                  <button onClick={() => handleSendChat("Je veux parler à un conseiller humain")}>
                    🗣️ Parler à un humain
                  </button>
                </div>

                {/* Message input */}
                <div className={styles.inputrow}>
                  <input
                    type="text"
                    value={inputText}
                    placeholder="Tapez: prix, réserver, livraison, humain..."
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSendChat();
                    }}
                  />
                  <button onClick={() => handleSendChat()}>Envoyer</button>
                </div>
              </div>
            </div>

            {/* Live CRM Lead Card */}
            <div className={styles.side}>
              <div className={styles.panel}>
                <h3>CRM Live Lead Card</h3>
                <div className={styles.leadcard}>
                  <div className={styles.line}>
                    <span>Statut</span>
                    <b>{leadCRM.status}</b>
                  </div>
                  <div className={styles.line}>
                    <span>Intention détectée</span>
                    <b>{leadCRM.intent}</b>
                  </div>
                  <div className={styles.line}>
                    <span>Infos manquantes</span>
                    <b>{leadCRM.missingInfo}</b>
                  </div>
                  <div className={styles.line}>
                    <span>Prochaine action</span>
                    <b>{leadCRM.nextAction}</b>
                  </div>
                </div>
                <div className={styles.statusBadges}>
                  <span>Réponse 24/7 active</span>
                  <span>Fiche synchronisée</span>
                </div>
              </div>

              {/* Vocal Simulator Box */}
              <div className={`${styles.voicebox} ${isVoicePlaying ? styles.voiceboxPlaying : ""}`}>
                <h3>🎙️ Démo vocale (Text-To-Speech)</h3>
                <p>{meta.voice}</p>
                <div className={`${styles.wave} ${isVoicePlaying ? styles.waveActive : ""}`}>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <button onClick={handlePlayVoice}>
                  {isVoicePlaying ? "⏹️ Arrêter la synthèse vocale" : "▶️ Écouter le message d'accueil"}
                </button>
              </div>
            </div>
          </div>
        </aside>
      </header>

      {/* Pain and Solution Grid */}
      <section className={styles.section}>
        <div className={styles.head}>
          <h2>Douleur client &amp; Valeur ajoutée</h2>
          <p>
            Analyse ciblée des frictions opérationnelles de {lead.name} et impact immédiat de la mise en place de l&apos;IA.
          </p>
        </div>
        <div className={styles.cards}>
          <article className={styles.pain}>
            <h3>Le problème identifié</h3>
            <p>{lead.pain}</p>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <strong>{lead.m1 || "0 DMs perdus"}</strong>
                <span>Cible</span>
              </div>
              <div className={styles.metric}>
                <strong>{lead.m2 || "+30% ventes"}</strong>
                <span>Conversion</span>
              </div>
              <div className={styles.metric}>
                <strong>{lead.m3 || "24h/7 actif"}</strong>
                <span>Disponibilité</span>
              </div>
            </div>
          </article>
          <article className={styles.promise}>
            <h3>La solution installée</h3>
            <p>
              Mise en place de l&apos;agent <b>{meta.primary}</b> sur-mesure pour <strong>{lead.name}</strong>. Cet agent intercepte chaque commentaire Facebook et message WhatsApp, répond instantanément, pré-qualifie le lead en extrayant les informations utiles et transfère les prospects chauds à vos équipes.
            </p>
            <p style={{ marginTop: "12px" }}>
              <b>Objectif business :</b> {meta.goal}.
            </p>
          </article>
        </div>
      </section>

      {/* Dynamic modules list */}
      <section className={styles.section} id="stack">
        <div className={styles.head}>
          <h2>Modules d&apos;automatisation recommandés</h2>
          <p>
            Chaque module ci-dessous est cliquable. Cliquez pour tester son comportement directement dans le téléphone de démonstration.
          </p>
        </div>
        <div className={styles.stackgrid}>
          {st.map((s, idx) => (
            <article key={idx} className={styles.stackCard}>
              <div className={styles.stackHead}>
                <span>MODULE 0{idx + 1}</span>
                <b>Agent Actif</b>
              </div>
              <h3>{s.n}</h3>
              <p>{s.d}</p>
              <button onClick={() => handleTestModule(idx)}>Tester ce module</button>
            </article>
          ))}
        </div>
      </section>

      {/* Flow Grid */}
      <section className={styles.section}>
        <div className={styles.head}>
          <h2>Parcours de l&apos;utilisateur avec l&apos;agent</h2>
          <p>Comment l&apos;agent transforme une simple demande sur les réseaux en opportunité qualifiée.</p>
        </div>
        <div className={styles.flowgrid}>
          <div className={styles.flowstep}>
            <b>1. Capture</b>
            <span>L&apos;utilisateur commente ou envoie un DM WhatsApp.</span>
          </div>
          <div className={styles.flowstep}>
            <b>2. Détection</b>
            <span>L&apos;IA détecte l&apos;intention (prix, réservation, devis).</span>
          </div>
          <div className={styles.flowstep}>
            <b>3. Qualification</b>
            <span>L&apos;IA pose des questions pour extraire les informations clés.</span>
          </div>
          <div className={styles.flowstep}>
            <b>4. Enregistrement</b>
            <span>La fiche CRM se met à jour en temps réel avec les données.</span>
          </div>
          <div className={styles.flowstep}>
            <b>5. Transfert</b>
            <span>Les leads chauds sont transmis à l&apos;équipe commerciale.</span>
          </div>
          <div className={styles.flowstep}>
            <b>6. Fidélisation</b>
            <span>Relance automatique et demande d&apos;avis après achat.</span>
          </div>
        </div>
      </section>

      {/* Pricing and Pitch outreach */}
      <section className={styles.section}>
        <div className={styles.pricing}>
          <div className={styles.pricecard}>
            <h3>Offre Sprint AI Conversion</h3>
            <p>Tarif mensuel estimé pour ce pack complet :</p>
            <div className={styles.price}>{lead.price || "Sur devis"} DZD</div>
            <ul className={styles.priceList}>
              <li>Landing page dédiée et personnalisée</li>
              <li>Simulateur interactif pour tester l&apos;IA</li>
              <li>Synthèse vocale d&apos;accueil client intégrée</li>
              <li>Intégration WhatsApp Business &amp; Facebook DM</li>
              <li>Installation et configuration sous 72 heures</li>
            </ul>
            <a className={styles.cta} href="#live-demo">
              Tester à nouveau la démo
            </a>
          </div>

          <div className={styles.pitchCard}>
            <div>
              <h3>Premier message d&apos;approche commercial (Pitch)</h3>
              <div className={styles.pitchBlock}>{lead.pitch}</div>
            </div>
            <button className={styles.pitchCopyBtn} onClick={handleCopyPitch}>
              📋 Copier le pitch de vente
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>Solution générée pour le dossier client #{String(lead.n).padStart(2, "0")} ({lead.name})</span>
        <span>
          <a href="/">Retour au Dashboard</a> · <a href={`/${prevSlug}`}>Précédent</a> · <a href={`/${nextSlug}`}>Suivant</a>
        </span>
      </footer>

      {/* Toast popup */}
      <div className={`${styles.toast} ${showToast ? styles.show : ""}`}>{toastMessage}</div>
    </div>
  );
}
