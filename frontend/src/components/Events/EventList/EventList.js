
import React, { Component} from 'react';
import EventItem from './EventItem/EventItem';
import './EventList.css';
import Filter from '../../Filter/Filter';
import { useState } from "react";



const EventList = props => {
  const [data, setdata] = useState("All");
  function handleInputChange(event) {
    const input = event.target
    const newN2 = input.value
    setdata(newN2)
  }
  const events = props.events.filter(x=>x.filter===data||data==='All').map(event => {
   
    return (
     
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail} 
        onCancell={props.onDancel} />
       

    );
    
  })
 
  ;

  return  <ul className="event__list"><div><Filter data={handleInputChange}></Filter></div>{events}</ul>;
};


export default EventList ;