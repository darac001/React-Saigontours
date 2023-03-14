import React from "react";
import { useForm } from "react-hook-form";


const ContactForm = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="section services" id="contact">
      <div className="contact-box">
        <div className="left-img">

        </div>
        <div className="right">
          <h2 className="contact-tag">Contact us</h2>
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formspree.io/f/xzbqvvgo"
            method="POST"
          >
            <input
              type="text"
              placeholder="Your name"
              className="field"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              type="text"
              placeholder="Email"
              className="field"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              placeholder="Your message"
              className="field"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button className="btn" type="submit">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default ContactForm

