import Footer from "../../components/footer/footer";
import Navbar from "../../components/nav/navbar";
import Accordion from "../../components/payments/accordion";
import PricingCTA from "../../components/payments/pricingCta";
import PricingHeader from "../../components/payments/pricingHeader";
import PricingSection from "../../components/payments/pricingSection";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <PricingHeader />
      <PricingSection />
      <Accordion />
      <PricingCTA />
      <Footer />
    </>
  );
};

export default Pricing;
