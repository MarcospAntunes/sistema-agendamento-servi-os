import {
  Header,
  HeroSection,
  AboutSection,
  ServicesSection,
  ContactSection,
  Footer,
  CustomAlert,
} from "@/components/index";

export default function Home() {
  return (
    <>
    <CustomAlert />
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
