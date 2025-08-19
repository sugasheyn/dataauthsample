import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import BlogSpecialsSection from "@/components/blog-specials-section";
import NonProfitDiscountSection from "@/components/nonprofit-discount-section";
import PhilosophySection from "@/components/philosophy-section";
import ProjectsSection from "@/components/projects-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-inter text-gray-800 bg-warm-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogSpecialsSection />
      <NonProfitDiscountSection />
      <PhilosophySection />
      <ProjectsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
