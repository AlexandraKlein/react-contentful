import React from "react";
import client from "./Client";
import { Link } from "react-router-dom";
import Loader from "../images/black-loader.gif";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPage: [],
    };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "blogs",
      })
      .then((entries) => {
        this.setState({ blogPage: entries.items });
      });
  }

  render() {
    return (
      <section className="p-5">
        <div className="container">
          <div className="text-center">
            <h2>Blog</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nisl lorem, dictum id pellentesque at, vestibulum ut arcu.
            </p>
          </div>
          {this.state.blogPage.length === 0 ? (
            <img src={Loader} alt="Loader" />
          ) : (
            <div className="row">
              {this.state.blogPage.map((item, index) => (
                <div key={index} className="col-md-6 blog-content">
                  <img
                    className="img-blog img-fluid"
                    src={item.fields.blogThumbnail.fields.file.url}
                    alt=""
                  />
                  <h3>
                    <Link to={`../Blog/${item.fields.slug}`}>
                      {item.fields.blogTitle}
                    </Link>
                  </h3>
                  <p>{item.fields.blogDescription}</p>

                  <Link
                    className="text-light"
                    to={`../Blog/${item.fields.slug}`}
                  >
                    <button className="btn btn-primary">Read more</button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Blog;
