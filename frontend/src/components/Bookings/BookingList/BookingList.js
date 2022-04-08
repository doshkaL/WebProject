import React from 'react';
import {Button} from 'react-bootstrap';
import './BookingList.css';

const bookingList = props => (
  <ul className="bookings__list">
    {props.bookings.map(booking => {
      return (
        <li key={booking._id} className="bookings__item">
          <div className="bookings__item-data">
            {booking.event.title} -{' '}
            {new Date(booking.createdAt).toLocaleDateString()}
          </div>
          <div className="bookings__item-actions">
            <Button  variant="primary" className='btn'  onClick={props.onDelete.bind(this,booking._id)}>Cancel{console.log(booking._id)}</Button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;