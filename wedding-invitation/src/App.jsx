import { LanguageProvider } from "./context/LanguageContext";
import { MusicProvider } from "./context/MusicContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Invitation from "./components/Invitation";
import CoupleSection from "./components/CoupleSection";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Family from "./components/Family";
import Footer from "./components/Footer";
import BackToTop from "./components/decorative/BackToTop";

function App() {
  return (
    <LanguageProvider>
      <MusicProvider>
        <div className="relative w-full overflow-x-hidden bg-ivory">
          <Navigation />
          <main>
            <Hero />
            <Countdown />
            <Invitation />
            <CoupleSection />
            <Events />
            <Gallery />
            <Family />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </MusicProvider>
    </LanguageProvider>
  );
}

export default App;
