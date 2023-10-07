import Header from './components/Header/Header';
import css from './styles/app.module.scss';
import Hero from './components/Hero/Hero';
import Skill from './components/Skill/Skill';
// import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return <div className={`${css.container}`}>
    <ChakraProvider>
      <Header />
      <Hero />
      <Skill />
      <Portfolio />
      {/* <Footer /> */}
    </ChakraProvider>
  </div>
};

export default App;

