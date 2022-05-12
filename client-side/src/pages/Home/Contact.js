import React from "react";
import PrimaryBtn from "../Share/PrimaryBtn";
import bg from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section className="py-8 mt-16" style={{ background: `url(${bg})` }}>
      <div className="w-1/3 mx-auto">
        <div className="">
          <h5 className="text-primary text-center">Contact Us</h5>
          <h2 className="text-white text-2xl text-center mb-6">
            Stay Connected with us
          </h2>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Email Address"
            class="nput input-bordered input-sm w-full max-w-xs rounded-md"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            class="nput input-bordered input-sm w-full max-w-xs rounded-md"
          />
          <br />
          <textarea
            class="textarea textarea-secondary h-24"
            placeholder="Your message"
          ></textarea>
          <br />
          <div className="text-center">
          <PrimaryBtn>Submit</PrimaryBtn>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
