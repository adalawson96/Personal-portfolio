import Header from './components/Header/Header';
import css from './styles/app.module.scss';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
// import Bio from './components/Bio/Bio';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Works />
    <Portfolio/>
    {/* <Bio/> */}
  </div>
};

export default App;
