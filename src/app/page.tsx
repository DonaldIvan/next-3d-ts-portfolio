import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import OtherContact from '@/components/OtherContact';
import Feedbacks from '@/components/Feedbacks';
import StarsCanvas from '@/components/canvas/Stars';

const Home = ({}) => {
  return (
    <main>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <OtherContact />
      </div>
    </main>
  );
};

export default Home;
