import {
  Header,
  HeroSection,
  AboutSection,
  ServicesSection,
  ContactSection,
  Footer,
} from "@/components/index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
