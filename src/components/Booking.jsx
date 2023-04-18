import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "./booking_api";
import { useFormik } from "formik";
import "../styles/booking.css";
import { bookingSchema } from "../schemas";
const Booking = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    time: "",
    occasion: "",
    guests: "",
    seating: "",
  };
  const { values, errors, touched, resetForm, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: bookingSchema,
    });
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const dateSetter = (e) => {
    setDate(e.target.value);
  };
  const [times, setTimes] = useState([]);
  const initialiseTimes = () => {
    setTimes(...[fetchAPI(new Date(date))]);
  };
  useEffect(() => {
    initialiseTimes();
  }, [date]);

  const [confirmationData, setConfirmationData] = useState([]);
  const [confirmWindowToggle, setConfirmWindowToggle] = useState("hidden");
  const [formWindowToggle, setFormWindowToggle] = useState("visible");
  const submitHandler = (event) => {
    const formData = new FormData(event.target);
    // submitAPI(formData) ? setConfirmationData(formData) : null;
    if (submitAPI(formData) == true) {
      const tempConfirmationData = [];
      for (const i of formData.entries()) {
        tempConfirmationData.push(i[1]);
      }
      setConfirmationData(tempConfirmationData);
      setConfirmWindowToggle("visible");
      setFormWindowToggle("hidden");
    } else setConfirmationData([]);
  };
  return (
    <section className="booking" id="booking">
      <form
        className={` booking-form  ${formWindowToggle}`}
        onSubmit={(event) => {
          event.preventDefault();
          submitHandler(event);
          resetForm({ values: initialValues });
        }}
      >
        <h3 className="form-heading">Reserve your table</h3>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Please enter your name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your E-mail"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={dateSetter}
            value={date}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="time">Time</label>
          <select name="time" id="time" required>
            <option key={0}>Please select a time</option>
            {times.map((currElem) => {
              return (
                <>
                  <option value={currElem} key={times.indexOf(currElem) + 1}>
                    {currElem}
                  </option>
                  ;
                </>
              );
            })}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="occasion">Occasion</label>
          <select name="occasion" id="ocassion">
            <option key={0} value="">
              None
            </option>
            <option key={1} value="birthday">
              Birthday
            </option>
            <option key={2} value="anniversary">
              Anniversary
            </option>
            <option key={3} value="official party">
              Official party
            </option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            name="guests"
            id="guests"
            placeholder="Total number of guests"
            value={values.guests}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.guests && touched.guests ? (
            <p className="form-error">{errors.guests}</p>
          ) : null}
        </div>
        <div className="input-group">
          <label htmlFor="seating">Seating Preference</label>
          <div className="indoor-grp">
            <input
              type="radio"
              name="seating"
              id="indoor"
              value="indoor"
              required
            />
            <label htmlFor="indoor" id="seating">
              Indoor
            </label>
          </div>
          <div className="outdoor-grp">
            <input
              type="radio"
              name="seating"
              id="outdoor"
              value="outdoor"
              required
            />
            <label htmlFor="outdoor" id="seating">
              Outdoor
            </label>
          </div>
          {errors.seating && touched.seating ? (
            <p className="form-error">{errors.seating}</p>
          ) : null}
        </div>
        <input type="submit" value="submit" />
      </form>
      <div className={` booking-confirmation  ${confirmWindowToggle}`}>
        <h3>Thank you {confirmationData[0]}</h3>
        <p>
          Your booking has been confirmed for {"  "}
          {confirmationData[2] + " , " + confirmationData[3]}
        </p>

        <p>Location details have been sent to {confirmationData[1]}</p>
        <button
          onClick={() => {
            setConfirmWindowToggle("hidden"), setFormWindowToggle("visible");
          }}
        >
          Okay
        </button>
      </div>
    </section>
  );
};

export default Booking;
