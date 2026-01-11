import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Credentials from './components/Credentials';
import SignupForm from './components/SignupForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Credentials />
      <SignupForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
