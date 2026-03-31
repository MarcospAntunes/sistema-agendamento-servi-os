import { Header, HeroSection, AboutSection, ServicesSection, ContactSection } from "@/components/index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
