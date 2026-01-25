export const dynamic = "force-dynamic";

import CustomCursor from "../components/CustomCursor";
import Hero from "../components/Hero";
import ClientStories from "../components/ClientStories";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import TheWork from "../components/TheWork";
import WhatWeDo from "../components/WhatWeDo";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import { getProjects } from "../lib/actions";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="relative min-h-screen bg-black text-white">
      <CustomCursor />
      <Hero />
      <section id="services">
        <WhatWeDo />
      </section>
      <section id="work">
        <TheWork projects={projects} />
      </section>
      <section id="why-us">
        <WhyWorkWithUs />
      </section>
      <section id="clients">
        <ClientStories />
      </section>
      <section id="contact">
        <ContactCTA />
      </section>
      <Footer />
    </div>
  );
}
