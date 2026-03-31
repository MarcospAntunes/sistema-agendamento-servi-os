import { Header, HeroSection, AboutSection, ServicesSection } from "@/components/index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </>
  );
}
