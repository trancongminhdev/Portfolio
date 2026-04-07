import { Header } from '@/components/header';
import { Starfield } from '@/components/starfield';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Starfield />
      <main className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
