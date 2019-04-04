import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';

import Header from './components/footer_header/Header';
import Featured from './components/featured';
import VenuInfo from './components/venu_info';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/footer_header/Footer';

class App extends Component {
   render() {
      return (
         <div className="App" style={{ height: '1500px' }}>
            <Header />
            <Element name="Featured">
               <Featured />
            </Element>
            <Element name="VenuInfo">
               <VenuInfo />
            </Element>
            <Element name="Highlights">
               <Highlight />
            </Element>
            <Element name="Pricing">
               <Pricing />
            </Element>
            <Element name="Location">
               <Location />
            </Element>

            <Footer />
         </div>
      );
   }
}

export default App;
