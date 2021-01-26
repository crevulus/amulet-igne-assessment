import React, { Component } from "react";

import equal from "fast-deep-equal";

import ImageCarousel from "./ImageCarousel";

export default class Photowidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoData: "",
      tradeName: "",
    };
  }

  componentDidUpdate = (prevProps) => {
    if (!equal(this.props.tradeName, prevProps.tradeName)) {
      this.callUnsplash();
    }
  };

  callUnsplash = async () => {
    const photoData = await fetch(
      `https://api.unsplash.com/search/photos?query=${this.props.brand}+${this.props.tradeName}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Client-ID NFBRQOZzuKVjItjg2_H1fI8TMpXqfndB9e0m23Bbx7Y", // would hide this in a .env file in real build
        },
      }
    ).then((data) => data.json());
    this.setState({ photoData });
  };

  componentDidMount = () => {
    this.callUnsplash();
  };

  render() {
    return (
      <div>
        {this.state.photoData && (
          <ImageCarousel data={this.state.photoData.results} />
        )}
      </div>
    );
  }
}
