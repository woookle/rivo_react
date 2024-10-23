import React, { useEffect } from 'react';
import './style/main.css';
import 'animate.css/animate.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { WOW } from 'wowjs';

function App() {

  useEffect(() => {
    const wow = new WOW({
      offset: 200,
      mobile: false,
      live: true
    })

    wow.init();
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
