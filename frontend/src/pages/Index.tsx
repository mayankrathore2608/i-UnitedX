import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Pricing } from "@/components/Pricing";
import { BookCall } from "@/components/BookCall";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Pricing />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
