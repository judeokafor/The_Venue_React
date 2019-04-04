import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const Sidedrawer = props => {
   const scrollToElement = elements => {
      scroller.scrollTo(elements, {
         duration: 1500,
         delay: 100,
         smooth: true,
         offset: -85
      });
      props.onClose(false);
   };
   return (
      <Drawer
         anchor="right"
         open={props.open}
         onClose={() => {
            props.onClose(false);
         }}
      >
         <List component="nav">
            <ListItem
               button
               onClick={() => {
                  scrollToElement('Featured');
               }}
            >
               Event Starts In
            </ListItem>
            <ListItem
               button
               onClick={() => {
                  scrollToElement('VenuInfo');
               }}
            >
               Venu Info
            </ListItem>
            <ListItem
               button
               onClick={() => {
                  scrollToElement('Highlights');
               }}
            >
               Highlights
            </ListItem>
            <ListItem
               button
               onClick={() => {
                  scrollToElement('Pricing');
               }}
            >
               Pricing
            </ListItem>
            <ListItem
               button
               onClick={() => {
                  scrollToElement('Location');
               }}
            >
               Location
            </ListItem>
         </List>
      </Drawer>
   );
};

export default Sidedrawer;
