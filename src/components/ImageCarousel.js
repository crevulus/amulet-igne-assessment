import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import equal from "fast-deep-equal";

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  render() {
    return (
      <Carousel>
        {/* {this.props.data.map((obj) => (
          <div>
            <img src={obj.urls.full} alt={obj.alt_description} />
            <p className="legend">{obj.description}</p>
          </div>
        ))} */}
        <div>
          <img
            src={this.props.data[0].urls.regular}
            alt={this.props.data[0].alt_description}
          />
          <p className="legend">{this.props.data[0].description}</p>
        </div>
        <div>
          <img
            src={this.props.data[1].urls.regular}
            alt={this.props.data[1].alt_description}
          />
          <p className="legend">{this.props.data[1].description}</p>
        </div>
        <div>
          <img
            src={this.props.data[2].urls.regular}
            alt={this.props.data[2].alt_description}
          />
          <p className="legend">{this.props.data[2].description}</p>
        </div>
      </Carousel>
    );
  }
}
