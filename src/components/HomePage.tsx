import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import Credentials from './Credentials';
import CQCInfo from './CQCInfo';
import SignupForm from './SignupForm';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Credentials />
      <CQCInfo />
      <SignupForm />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
