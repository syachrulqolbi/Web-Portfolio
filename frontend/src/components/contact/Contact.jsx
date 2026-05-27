import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const subject = form.current.subject.value;
    const description = form.current.description.value;

    const email = "syachrulqolbinursepti@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Hi, my name is ${name}.\n\n${description}`)}`;

    // Open mailto link
    window.open(mailtoLink);

    // Show toast notification
    toast.success("Redirecting to your email app!");

    // Reset form
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                syachrulqolbinursepti@gmail.com
              </span>
              <a
                href="mailto:syachrulqolbinursepti@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">syachrulqolbi</span>
              <a
                href="https://www.linkedin.com/in/syachrulqolbi/"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">syahrulqolbi</span>
              <a
                href="https://www.instagram.com/syahrulqolbi"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reach me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Let’s Collaborate</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Subject</label>
              <input
                type="text"
                name="subject"
                className="contact__form-input"
                placeholder="Insert your subject"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Description</label>
              <textarea
                name="description"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your description"
                required
              ></textarea>
            </div>

            <button className="button button--flex" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;