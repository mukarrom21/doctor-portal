import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;

  const handleModalSubmit = event => {
    event.preventDefault();
    const date = event.target.date.value;
    console.log(name, date);

  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center text-secondary mb-4 font-bold">Booking for : {name}</h3>
          <div className="min-w-full mx-auto">
            <form onSubmit={handleModalSubmit} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="date"
              value={format(date, "PP")}
              readOnly
              className="input input-bordered input-sm w-full"
            />
            <select name="time" className="select select-bordered select-sm w-full">
              {
                slots.map(slot => <option>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered input-sm w-full"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-sm w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered input-sm w-full"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-primary input-bordered input-sm w-full"
            />
          </form>
          </div>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
