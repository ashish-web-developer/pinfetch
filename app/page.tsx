import Hero from "@/components/hero.component";
import HowItWorks from "@/components/how-it-works.component";
import Features from "@/components/features.component";
import FAQ from "@/components/faq.component";
import Footer from "@/components/footer.component";

const Page = () => {
  return (
    <>
      <Hero />

      <HowItWorks />

      <Features />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
