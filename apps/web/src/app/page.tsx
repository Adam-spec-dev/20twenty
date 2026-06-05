import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import SmokeBackground from "@/components/SmokeBackground";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="px-6 lg:px-14 h-20 flex items-center justify-between border-b border-border/40 backdrop-blur-md fixed top-0 w-full z-50">
        <Link className="flex items-center justify-center" href="/">
          <Sparkles className="h-6 w-6 text-primary mr-2" />
          <span className="font-bold text-xl tracking-tight text-primary">20TWENTY</span>
        </Link>
        <nav className="flex gap-6 sm:gap-10">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      
      <main className="flex-1 pt-20 px-6 lg:px-14">
        <section className="relative w-full py-28 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden border-b border-border/40">
          {/* Premium WebGL Smoke Background */}
          <div className="absolute inset-0 z-0 opacity-25">
            <SmokeBackground smokeColor="#7F2020" />
          </div>

          <div className="relative z-10 space-y-6 max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary">
              Elevate Your Brand With <span className="text-secondary">AI-Driven</span> Excellence.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We build premium, high-converting digital experiences tailored for the modern web. Fast, scalable, and beautifully designed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-20 border-t border-border/40">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground">Optimized architectures that load instantly and keep your users engaged.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Premium Design</h3>
              <p className="text-muted-foreground">Custom-tailored aesthetics that make your brand stand out from the competition.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Enterprise Ready</h3>
              <p className="text-muted-foreground">Secure, scalable, and built on the robust technologies trusted by industry leaders.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full border-t border-border/40 px-6 lg:px-14 flex flex-col sm:flex-row justify-between items-center bg-card">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} 20TWENTY Agency. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
