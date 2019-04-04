import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export class Discount extends Component {
   constructor(props) {
      super(props);

      this.state = {
         discountStart: 0,
         discountEnd: 30
      };
   }
   percentage() {
      if (this.state.discountStart < this.state.discountEnd) {
         this.setState({
            discountStart: this.state.discountStart + 1
         });
      }
   }
   componentDidUpdate() {
      setTimeout(() => {
         this.percentage();
      }, 30);
   }

   render() {
      return (
         <div className="center_wrapper">
            <div className="discount_wrapper">
               <Fade
                  onReveal={() => {
                     this.percentage();
                  }}
               >
                  <div className="discount_porcentage">
                     <span>{this.state.discountStart}%</span>
                     <span>OFF</span>
                  </div>
               </Fade>
               <Slide right>
                  <div className="discount_description">
                     <h3>Purcahase tickets before November 23rd 2019</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus sapiente reiciendis ipsa libero eligendi
                        quos, labore dicta accusantium possimus doloremque.
                     </p>
                     <div>{/* button space */}</div>
                  </div>
               </Slide>
            </div>
         </div>
      );
   }
}

export default Discount;
