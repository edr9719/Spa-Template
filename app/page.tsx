import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Membership from '@/components/Membership';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { businessConfig } from '@/lib/business-config';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      {/* Controlled by businessConfig.features.showMembership */}
      {businessConfig.features.showMembership && <Membership />}
      <CTA />
      <Footer />
    </main>
  );
}
