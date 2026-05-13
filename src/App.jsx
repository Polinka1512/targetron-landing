import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Case from "./components/Case";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Case />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;