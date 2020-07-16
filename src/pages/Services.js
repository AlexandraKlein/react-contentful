import React from "react";
import client from "./Client";
import Loader from "../images/loader.gif";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicePage: [],
    };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "services",
        order: "sys.createdAt",
      })
      .then((entries) => {
        this.setState({ servicePage: entries.items });
      });
  }
  render() {
    return (
      <section id="services" className="p-5">
        <div className="container">
          <div className="text-center">
            <h2>Our Services</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              porta in ipsum non facilisis.
            </p>
          </div>

          <div className="row">
            {this.state.servicePage.length === 0 ? (
              <div>
                <img url={Loader} alt="Loader" />
              </div>
            ) : (
              this.state.servicePage.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="media service-wrap">
                    <img
                      className="pr-3"
                      src={item.fields.serviceIcon.fields.file.url}
                      alt=""
                    />
                    <div className="media-body">
                      <h3 className="media-heading">
                        {item.fields.serviceTitle}
                      </h3>
                      <p>{item.fields.serviceDescription}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
