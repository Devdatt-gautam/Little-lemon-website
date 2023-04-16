import React, { useState, useEffect } from "react";
import "../styles/booking.css";
const Booking = () => {
  return (
    <section className="booking" id="booking">
      <form action="#" className="booking-form">
        <h3 className="form-heading">Reserve your table</h3>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Please enter your name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your E-mail"
          />
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="input-group">
          <label htmlFor="time">Time</label>
          <select name="time" id="time">
            <option value="">Please select a time</option>
            <option value="12">12</option>
            <option value="10">10</option>
            <option value="08">08</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="Occasion">Occasion</label>
          <select name="occasion" id="ocassion">
            <option value="">None</option>
            <option value="birthday">birthday</option>
            <option value="anniversary">anniversary</option>
            <option value="official party">official party</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            name="guests"
            id="guests"
            placeholder="Total number of guests"
          />
        </div>
        <div className="input-group">
          <label htmlFor="seating">Seating Preference</label>
          <div className="indoor-grp">
            <input type="radio" name="seating" id="indoor" value="indoor" />
            <label htmlFor="indoor" id="seating">
              Indoor
            </label>
          </div>
          <div className="outdoor-grp">
            <input type="radio" name="seating" id="outdoor" value="outdoor" />
            <label htmlFor="outdoor" id="seating">
              Outdoor
            </label>
          </div>
        </div>
        <input type="submit" value="submit" />
      </form>
    </section>
  );
};

export default Booking;
