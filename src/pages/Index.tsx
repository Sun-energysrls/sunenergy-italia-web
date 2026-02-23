import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeChiSiamo from "@/components/HomeChiSiamo";
import HomeImportazione from "@/components/HomeImportazione";
import HomeForniture from "@/components/HomeForniture";
import HomeBrands from "@/components/HomeBrands";
import HomeTransizione from "@/components/HomeTransizione";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HomeChiSiamo />
      <HomeImportazione />
      <HomeForniture />
      <HomeBrands />
      <HomeTransizione />
      <HomeCTA />
      <Footer />
    </div>
  );
};

export default Index;
