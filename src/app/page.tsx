import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';

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
        {/* <Tech /> */}
        {/* <Works /> */}
        <div className="relative z-0">
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
        </div>
        {/* <Feedbacks /> */}
      </div>
    </main>
  );
};

export default Home;
