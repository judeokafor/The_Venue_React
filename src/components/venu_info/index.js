import React from 'react';
import Zoom from 'react-reveal/Zoom';
import IconCalender from '../../resources/images/icons/calendar.png';
import IconLocation from '../../resources/images/icons/location.png';

const VenuInfo = () => {
   return (
      <div className="bck_black">
         <div className="center_wrapper">
            <div className="vn_wrapper">
               <Zoom duration={500}>
                  <div className="vn_item">
                     <div className="vn_outer">
                        <div className="vn_inner">
                           <div className="vn_icon_square bck_red" />
                           <div
                              className="vn_icon"
                              style={{
                                 background: `url(${IconCalender})`
                              }}
                           />
                           <div className="vn_title">Event Date & Time</div>
                           <div className="vn_desc">
                              7th January, 2019 @ 10.00 pm
                           </div>
                        </div>
                     </div>
                  </div>
               </Zoom>
               <Zoom duration={500} delay={500}>
                  <div className="vn_item">
                     <div className="vn_outer">
                        <div className="vn_inner">
                           <div className="vn_icon_square bck_yellow" />
                           <div
                              className="vn_icon"
                              style={{
                                 background: `url(${IconLocation})`
                              }}
                           />
                           <div className="vn_title">Event Location</div>
                           <div className="vn_desc">
                              Plot 436 Arab Road Kubwa
                           </div>
                        </div>
                     </div>
                  </div>
               </Zoom>
            </div>
         </div>
      </div>
   );
};

export default VenuInfo;
