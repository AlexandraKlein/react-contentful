import React from "react";
import client from "./Client";
import Loader from "../images/black-loader.gif";
import marked from "marked";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutPage: [],
    };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "about",
      })
      .then((entries) => {
        this.setState({
          aboutPage: entries.items[0],
        });
      });
  }

  getParsedMarkdown(aboutDescription) {
    return {
      __html: marked(aboutDescription, { sanitize: true }),
    };
  }

  render() {
    return (
      <div className="container text-center pt-5">
        <h1>About</h1>
        {this.state.aboutPage.length === 0 ? (
          <div>
            <img src={Loader} alt="Loader" />
          </div>
        ) : (
          <div
            dangerouslySetInnerHTML={this.getParsedMarkdown(
              this.state.aboutPage.fields.aboutDescription
            )}
          />
        )}
      </div>
    );
  }
}

export default About;
