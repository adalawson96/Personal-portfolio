import Header from './components/Header/Header';
import css from './styles/app.module.scss';
import Hero from './components/Hero/Hero';
import Skill from './components/Skill/Skill';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Skill />
    <Portfolio/>
    <Footer />
  </div>
};

export default App;
