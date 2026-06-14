import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function ManifestoPage() {
  // We read the markdown from the root of the project
  const filePath = path.join(process.cwd(), "../..", "described.PAGE");
  let markdownContent = "";
  
  try {
    markdownContent = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    markdownContent = "# Erreur: Le fichier manifesto (described.PAGE) est introuvable.";
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-violet-500/30 overflow-x-hidden pb-32">
      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar/Header for the manifesto */}
      <nav className="sticky top-0 w-full z-50 glass-panel border-b border-white/5 px-6 py-4 mb-16 backdrop-blur-md">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-2 opacity-60 text-sm">
            <BookOpen className="w-4 h-4" />
            <span>Lecture : 20 min</span>
          </div>
        </div>
      </nav>

      {/* The Manifesto Content */}
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <article className="prose prose-invert prose-violet max-w-none prose-lg
          prose-headings:font-black prose-headings:tracking-tight
          prose-h1:text-4xl sm:prose-h1:text-6xl prose-h1:mb-8 prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-violet-400 prose-h1:to-indigo-400
          prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-h2:text-white
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-violet-200
          prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6 prose-p:font-light
          prose-strong:text-white prose-strong:font-bold
          prose-blockquote:border-l-4 prose-blockquote:border-violet-500 prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:text-white/90
          prose-li:text-white/70 prose-li:marker:text-violet-500
          prose-ul:space-y-2
          prose-hr:border-white/10 prose-hr:my-16"
        >
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </article>
      </div>

      {/* Call to Action Footer */}
      <div className="max-w-3xl mx-auto px-6 mt-24 text-center">
        <Link 
          href="/"
          className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
        >
          Demander mon diagnostic gratuit
        </Link>
      </div>
    </main>
  );
}
