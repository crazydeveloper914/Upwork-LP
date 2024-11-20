import Articles from "@/components/Articles";
import Contacts from "@/components/Contacts";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurStory from "@/components/OurStory";
import ServiceDemo from "@/components/ServiceDemo";
import Stats from "@/components/Stats";
import Target from "@/components/Target";
import OurTeam from "@/components/team/OurTeam";
import Testimonies from "@/components/Testimonies";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full relative antialiased">
      <Navbar />
      <Hero />
      <OurStory />
      <Target />
      <ServiceDemo />
      <Stats /> 
      <OurTeam />
      <Testimonies />
      <Articles />
      <Faqs />
      <Contacts />
      <Footer />
    </main>
  );
}
