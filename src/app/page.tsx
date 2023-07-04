import Navbar from '@/components/Navbar';

const Home = ({}) => {
  return (
    <main>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          {/* <Hero /> */}
        </div>
        {/* <About /> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
