import React from "react";
import client from "./Client";
import Loader from "../images/black-loader.gif";

const contents = [
  {
    type: "homeBanner",
  },
  {
    type: "homeFeatures",
  },
  {
    type: "homeGallery",
  },
  {
    type: "homeFaq",
    order: "sys.createdAt",
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeBanner: [],
      homeFeatures: [],
      homeGallery: [],
      homeFaq: [],
    };
  }

  componentDidMount() {
    contents.forEach((content) => {
      client
        .getEntries({
          content_type: content.type,
          order: content.order || undefined,
        })
        .then((entries) => {
          this.setState({ [content.type]: entries.items });
        });
    });
  }

  render() {
    return (
      <div>
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <ol className="carousel-indicators">
              {this.state.homeBanner.length === 0 ? (
                <img src={Loader} alt="Loader" />
              ) : (
                this.state.homeBanner.map((item, index) => (
                  <li
                    key={index}
                    data-target="#carousel"
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  ></li>
                ))
              )}
            </ol>
            {this.state.homeBanner.length === 0 ? (
              <img src={Loader} alt="Loader" />
            ) : (
              this.state.homeBanner.map((item, index) => (
                <div
                  className={`carousel-item${index === 0 ? " active" : ""}`}
                  key={index}
                >
                  <img
                    src={item.fields.homeBannerImage.fields.file.url}
                    className="d-block w-100"
                    alt="banner"
                  />
                </div>
              ))
            )}
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <section id="feature">
          <div className="container text-center pt-5">
            <h2>Features</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="container">
            <div className="row">
              {this.state.homeFeatures.length === 0 ? (
                <img src={Loader} alt="Loader" />
              ) : (
                this.state.homeFeatures.map((item, index) => (
                  <div key={index} className="col-md-4">
                    <div className="feature-wrap">
                      <div>
                        <i className={`fa ${item.fields.featureIcon}`} />
                      </div>
                      <div>
                        <h2>{item.fields.featureTitle}</h2>
                        <h3>{item.fields.featureDescription}</h3>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="container text-center pt-5">
            <h2>Portfolio</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="container cssbox-container">
            {this.state.homeGallery.length === 0 ? (
              <img src={Loader} alt="Loader" />
            ) : (
              this.state.homeGallery.map((item, index) => (
                <div key={index} className="cssbox">
                  <a id={`image${index + 1}`} href={`#image${index + 1}`}>
                    <div className="cssbox_thumb">
                      <img
                        src={item.fields.galleryImage.fields.file.url}
                        alt="gallery"
                      />
                    </div>

                    <div className="cssbox_full">
                      <img
                        src={item.fields.galleryImage.fields.file.url}
                        alt="gallery"
                      />
                    </div>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a className="cssbox_close" href="#void" />
                  {index !== 0 && (
                    <a className="cssbox_prev" href={`#image${index}`}>
                      &lt;
                    </a>
                  )}
                  {index !== this.state.homeGallery.length - 1 && (
                    <a className="cssbox_next" href={`#image${index + 2}`}>
                      &gt;
                    </a>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
        <section id="faqs">
          <div className="container text-center pt-5">
            <h2>FAQs</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="container mt-10">
            <div className="col-md-12">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {this.state.homeFaq.map((item, index) => (
                  <div key={index} className="panel panel-default">
                    <div
                      className="panel-heading"
                      role="tab"
                      id={`heading${index + 1}`}
                    >
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href={`#collapse${index + 1}`}
                          aria-expanded="true"
                          aria-controls={`collapse${index + 1}`}
                        >
                          {item.fields.faqTitle}
                        </a>
                      </h4>
                    </div>
                    <div
                      id={`collapse${index + 1}`}
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby={`heading${index + 1}`}
                    >
                      <div className="panel-body">
                        <p>{item.fields.faqDescription}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
