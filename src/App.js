import React, { Component } from "react";

import "bootswatch/dist/lux/bootstrap.min.css";
import "./App.css";

import Inputform from "./components/Inputform";
import Infotable from "./components/Infotable";
import Photowidget from "./components/Photowidget";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: "",
      brand: "",
      tradeName: "",
      firstAdmissionDate: "",
      fuelType: "",
    };
  }

  handleChildSubmit = (data) => {
    this.setState({
      searchData: data,
      brand: data.merk,
      tradeName: data.handelsbenaming,
      firstAdmissionDate: data.datum_eerste_toelating,
      fuelType: data.brandstof[0].brandstof_omschrijving,
    });
  };

  render() {
    return (
      <div className="App">
        <Inputform handleNumberPlateCall={this.handleChildSubmit} />
        {this.state.searchData && (
          <div>
            <Infotable
              brand={this.state.brand}
              tradeName={this.state.tradeName}
              firstAdmissionDate={this.state.firstAdmissionDate}
              fuelType={this.state.fuelType}
            />
            <Photowidget
              brand={this.state.brand}
              tradeName={this.state.tradeName}
            />
          </div>
        )}
      </div>
    );
  }
}
