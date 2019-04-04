import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/footer_header/Header';
import Featured from './components/featured';
import VenuInfo from './components/venu_info';
import Highlight from './components/highlights';

class App extends Component {
   render() {
      return (
         <div className="App" style={{ height: '1500px' }}>
            <Header />
            <Featured />
            <VenuInfo />
            <Highlight />
         </div>
      );
   }
}

export default App;
