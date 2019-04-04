import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/footer_header/Header';

class App extends Component {
   render() {
      return (
         <div
            className="App"
            style={{ height: '1500px', backgroundColor: 'red' }}
         >
            <Header />
         </div>
      );
   }
}

export default App;
