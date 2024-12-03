import Header from './components/layout/Header';
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Footer from './components/layout/Footer'
import PageWrapper from './components/shared/PageWrapper';
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import About from './components/sections/About'
import MouseFollower from './components/shared/MouseFollower';

function App() {
  return (
    <div className="bg-[#0a192f] min-h-screen">
    <MouseFollower />
    <PageWrapper>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </PageWrapper>
  </div>
  );
}

export default App;