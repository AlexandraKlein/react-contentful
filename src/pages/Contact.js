import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="pt-5">
        <div className="container">
          <div className="text-center">
            <h2>Contact</h2>
            <p className="lead">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="contact-form">
            <iframe
              title="contact"
              src="https://docs.google.com/forms/d/e/1FAIpQLSe7P_aAYilR9bSJ_0sPrUfV75TWIXKwLSBTswi_u-JUzkcKSw/viewform?embedded=true"
              width="640"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
