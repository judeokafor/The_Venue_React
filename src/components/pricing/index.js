import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

export class Pricing extends Component {
   constructor(props) {
      super(props);

      this.state = {
         prices: [100, 150, 250],
         postions: ['Balcony', 'Medium', 'Star'],
         descriptions: [
            'Lorem text doesnt work for me here as a string',
            'But i will try to teype in some random text that should fill in these spaces',
            'I think these three spaces are enough, biko hand done tire me'
         ],
         linkto: [
            'https://jiji.com',
            'https://jumia.com.ng',
            'https://yudala.com.ng'
         ],
         delay: [500, 0, 500]
      };
   }
   showBoxes = () => {
      return this.state.prices.map((box, i) => (
         <Zoom key={i} delay={this.state.delay[i]}>
            <div className="pricing_item">
               <div className="pricing_inner_wrapper">
                  <div className="pricing_title">
                     <span>${this.state.prices[i]}</span>
                     <span>{this.state.postions[i]}</span>
                  </div>
                  <div className="pricing_description">
                     {this.state.descriptions[i]}
                  </div>
                  <div className="pricing_buttons">
                     <MyButton
                        text="Purchase"
                        color="white"
                        bck="#ffa800"
                        link={this.state.linkto[i]}
                     />
                  </div>
               </div>
            </div>
         </Zoom>
      ));
   };
   render() {
      return (
         <div className="bck_black">
            <div className="center_wrapper pricing_section">
               <h2>Pricing</h2>
               <div className="pricing_wrapper">{this.showBoxes()}</div>
            </div>
         </div>
      );
   }
}

export default Pricing;
