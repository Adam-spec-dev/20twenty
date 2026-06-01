import { Button } from "@20twenty/ui";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold tracking-tight">20TWENTY: Ai University</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        100X Elite Engineering Foundation
      </p>
      <div className="mt-8 flex gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </main>
  );
}
