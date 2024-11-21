import Articles from "@/components/Articles";
import Contacts from "@/components/Contacts";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurStory from "@/components/OurStory";
import Stats from "@/components/Stats";
import Target from "@/components/Target";
import OurTeam from "@/components/team/OurTeam";
import Testimonies from "@/components/Testimonies";

export default function Home() {
  return (
    <main className="w-full relative antialiased">
      <Navbar />
      <Hero />
      <OurStory />
      <Target />
      <Features />
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
