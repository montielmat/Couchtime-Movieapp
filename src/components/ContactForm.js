import React from "react";

export const ContactForm = () => {
  return (
    <div className=" d-flex justify-content-center p-3">
      <form className="w-50">
        <div className="mb-2">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-danger">Send</button>
      </form>
    </div>
  );
};
