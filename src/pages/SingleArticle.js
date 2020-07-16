import React from "react";
import { Link } from "react-router-dom";
import client from "./Client";
import marked from "marked";
import Loader from "../images/black-loader.gif";

class SingleArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;

    if (slug) {
      client
        .getEntries({
          content_type: "blogs",
          "fields.slug": slug,
        })
        .then((entries) => {
          this.setState({ article: entries.items[0] });
        });
    }
  }

  getParsedMarkdown(blogDescription) {
    return {
      __html: marked(blogDescription),
    };
  }

  redirectToTarget = () => {
    this.props.history.push("/Blog");
  };

  render() {
    return (
      <div>
        {this.state.article.length === 0 ? (
          <img src={Loader} alt="Loader" />
        ) : (
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-12">
                <h2>{this.state.article.fields.blogTitle}</h2>
                <p
                  dangerouslySetInnerHTML={this.getParsedMarkdown(
                    this.state.article.fields.blogDescription
                  )}
                />
                <p
                  style={{
                    textAlign: "right",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  <Link to="#" onClick={this.redirectToTarget}>
                    Back
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleArticle;
