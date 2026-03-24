import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tasks from "@/components/Tasks";
import Applications from "@/components/Applications";
import Services from "@/components/Services";
import Catalog from "@/components/Catalog";
import Custom from "@/components/Custom";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Tasks />
      <Applications />
      <Services />
      <Catalog />
      <Custom />
      <HowItWorks />
      <FAQ />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}
