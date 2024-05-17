import React, { Fragment } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaRegMap } from "react-icons/fa";
import "./contactUs.css";
const ContactUsComp = () => {
  return (
    <Fragment>
      <section className="contactUs">
        <div className="contact_header">
          <h2>Contact Us</h2>
        </div>
        <div className="container">
          <div className="contact_info">
            <div className="icon">
              <FaMobileAlt size={30} />
            </div>
            <div className="info">
              <h3>Call Us</h3>
              <p>+966 555 555 555</p>
            </div>
          </div>
          <div className="contact_info">
            <div className="icon">
              <IoMailOpenOutline size={30} />
            </div>
            <div className="info">
              <h3>Email Address</h3>
              <p>info@yourmail.com</p>
            </div>
          </div>
          <div className="contact_info">
            <div className="icon">
              <FaRegMap size={30} />
            </div>
            <div className="info">
              <h3>Address</h3>
              <p>123 Street, Old Trafford, London, UK</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="card">
            <span className="title">Leave a Comment</span>
            <form className="form">
              <div className="group">
                <input placeholder="" type="text" required />
                <label for="name">Name</label>
              </div>
              <div className="group">
                <input placeholder="" type="email" id="email" name="email" required />
                <label for="email">Email</label>
              </div>
              <div className="group">
                <textarea
                  id="comment"
                  name="comment"
                  rows="5"
                  placeholder=""
                  required
                ></textarea>
                <label for="comment">Comment</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          </div>
      </section>
    </Fragment>
  );
};

export default ContactUsComp;
