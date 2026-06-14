"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BrainCircuit, BarChart3, ShieldCheck, Zap, Database, Globe, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-violet-500/30">
      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-panel border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-violet-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              L'ASYMÉTRIE IA
            </span>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Diagnostic Gratuit
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-4xl mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-violet-300 text-sm font-medium mb-8 self-start border border-violet-500/20"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>La Vision Complète</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8"
        >
          Pourquoi l'Orchestration IA Est Le Seul Investissement Qui Sépare Les Entreprises Qui Vont <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600 glow-text">Dominer</span> De Celles Qui Vont <span className="text-white/40">Disparaître.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none text-white/70 font-light leading-relaxed space-y-6"
        >
          <p className="text-xl text-white font-medium">
            Avant de lire ce document : Ce que vous tenez entre les mains n'est pas une brochure commerciale. Ce n'est pas une présentation de plus sur "l'intelligence artificielle" avec des mots compliqués et des promesses vagues.
          </p>
          <p>
            C'est une <strong>carte du terrain tel qu'il est réellement en ce moment</strong> — pas tel qu'on aimerait qu'il soit, pas tel qu'il était il y a deux ans. Le terrain a changé. La plupart des entreprises ne s'en sont pas encore rendu compte. Celles qui s'en rendent compte <em>maintenant</em>, pendant cette fenêtre précise, vont construire un avantage que leurs concurrents ne pourront plus rattraper.
          </p>
        </motion.div>
      </section>

      {/* Section 1: Le Changement de Perspective */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">1. Le Changement de Perspective</h2>
          <div className="glass-panel p-8 rounded-2xl mb-8 border-l-4 border-l-violet-500">
            <p className="text-xl italic font-light text-white/90">
              « Qu'est-ce qui se passe quand mon concurrent direct — celui qui vend le même produit, dans la même ville, aux mêmes clients — met en place ce système… et pas moi ? »
            </p>
          </div>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>Imaginez que demain matin, l'entreprise de votre concurrent fonctionne comme ceci :</p>
            <ul className="space-y-4 list-disc list-inside">
              <li><strong className="text-white">Chaque message reçoit une réponse en moins de 30 secondes.</strong> Tout le temps. Vendredi soir à 23h. Samedi matin à 7h.</li>
              <li><strong className="text-white">Chaque prospect est suivi automatiquement</strong> jusqu'à ce qu'il achète ou dise explicitement non.</li>
              <li><strong className="text-white">Chaque donnée est centralisée et analysée.</strong></li>
              <li><strong className="text-white">Tout cela sans embaucher une seule personne de plus.</strong></li>
            </ul>
            <p className="text-white font-medium mt-8">
              Ce n'est pas une question de technologie. C'est une question de mathématiques simples. L'écart ne se referme pas. Il s'accélère.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Ce que le système fait */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">2. Ce Que Le Système Fait Réellement</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: <Clock className="w-6 h-6 text-violet-400" />, title: "Il Ne Dort Jamais", desc: "24h/24, 7j/7. Le premier qui répond gagne le client. Votre système répond en secondes, qualifie le lead, et prend rendez-vous." },
            { icon: <Database className="w-6 h-6 text-indigo-400" />, title: "Il N'Oublie Jamais Rien", desc: "Le cerveau humain n'est pas conçu pour gérer 300 relations sans faille. Le système suit chaque prospect au moment optimal." },
            { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Il N'a Jamais De Mauvais Jour", desc: "La constance à grande échelle est impossible pour un humain. Le système délivre la même qualité à la 1ère ou à la 500ème interaction." },
            { icon: <Globe className="w-6 h-6 text-emerald-400" />, title: "Il Voit Tout, En Même Temps", desc: "C'est un directeur commercial omniscient qui peut orchestrer 10 000 conversations personnalisées simultanément." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl"
            >
              <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4 & 5: Le Pari et Le Fossé */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Le Pari Asymétrique</h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              Un risque vers le bas limité (un coût fixe, sans perturbation de votre équipe). Un potentiel vers le haut exponentiel et sans plafond. Chaque lead perdu aujourd'hui est un lead que le système capturerait.
            </p>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-violet-500" />
              La Boucle de l'Avantage Cumulatif
            </h3>
            <div className="glass-panel p-8 rounded-2xl font-mono text-sm text-violet-300 leading-loose">
              Réponse plus rapide → Plus de leads capturés <br/>
              Plus de leads capturés → Plus de données <br/>
              Plus de données → Meilleure compréhension <br/>
              Meilleure compréhension → Messages plus efficaces <br/>
              Messages plus efficaces → Taux de conversion plus élevé <br/>
              Taux de conversion plus élevé → Plus de clients <br/>
              Plus de clients → Capacité d'investir encore plus <br/>
              <span className="text-white font-bold mt-4 block">→ Et le cycle recommence, plus fort à chaque tour.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Cas Pratiques */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-b border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nos Clients Types</h2>
        <div className="space-y-8">
          {[
            { title: "Le Cabinet Médical / La Clinique Dentaire", impact: "20 à 50 patients supplémentaires par mois qui auraient été perdus. Rappels auto, diminution des no-shows de 40 à 70%." },
            { title: "L'Agence Immobilière", impact: "Chaque lead automatiquement qualifié. Suivis ciblés. Un seul client supplémentaire couvre le système pour des mois." },
            { title: "Le Restaurant / Service de Livraison", impact: "Centralisation des commandes WhatsApp/Instagram. Identification des clients VIP." },
            { title: "Le Prestataire de Services (Plombier, Avocat...)", impact: "Devis relancés automatiquement à J+2, J+5. Prise de rendez-vous fluide." }
          ].map((client, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-violet-500 pl-6 py-2"
            >
              <h3 className="text-2xl font-bold mb-2">{client.title}</h3>
              <p className="text-white/60">{client.impact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 10: Le Moment de Décision */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-8">Le Moment de Décision</h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Est-ce que je vais être celui qui agit maintenant, ou celui qui regarde les autres agir et qui essaie de rattraper plus tard ? <br/><br/>
            Contactez-nous pour un diagnostic gratuit de votre entreprise. En 48 heures, vous saurez combien de leads vous perdez et à quoi ressemblerait votre système.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform">
              Prendre Rendez-vous
            </button>
            <button className="glass-panel text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
              <Users className="w-6 h-6" />
              WhatsApp Direct
            </button>
          </div>
          
          <p className="mt-12 text-sm text-white/40 italic">
            Ce document est confidentiel. Sa redistribution constitue un avantage compétitif que nous préférons réserver à nos partenaires.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
