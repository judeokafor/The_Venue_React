import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
export class Countdown extends Component {
   constructor(props) {
      super(props);

      this.state = {
         deadline: 'Dec, 27, 2019',
         days: '0',
         hours: '0',
         minutes: '0',
         seconds: '0'
      };
   }
   getCount(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date());
      // console.log(time);
      if (time < 0) {
         console.log('date passed');
      } else {
         const seconds = Math.floor((time / 1000) % 60);
         const minutes = Math.floor((time / 1000 / 60) % 60);
         const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
         const days = Math.floor(time / (1000 * 60 * 60 * 24));
         //  console.log('seconds', seconds);
         this.setState({
            days,
            hours,
            minutes,
            seconds
         });
      }
   }
   componentDidMount() {
      setInterval(() => {
         this.getCount(this.state.deadline);
      }, 1000);
   }
   render() {
      const { days, minutes, hours, seconds } = this.state;
      return (
         <Slide left delay={1500}>
            <div className="countdown_wrapper">
               <div className="countdown_top">Event starts in</div>
               <div className="countdown_bottom">
                  <div className="countdown_item">
                     <div className="countdown_time">{days}</div>
                     <div className="countdown_tag">Days</div>
                  </div>
                  <div className="countdown_item">
                     <div className="countdown_time">{hours}</div>
                     <div className="countdown_tag">Hrs</div>
                  </div>
                  <div className="countdown_item">
                     <div className="countdown_time">{minutes}</div>
                     <div className="countdown_tag">Mins</div>
                  </div>
                  <div className="countdown_item">
                     <div className="countdown_time">{seconds}</div>
                     <div className="countdown_tag">Secs</div>
                  </div>
               </div>
            </div>
         </Slide>
      );
   }
}

export default Countdown;
