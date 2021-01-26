import React, { Component } from "react";

import "bootswatch/dist/lux/bootstrap.min.css";
import "./App.css";

import InputForm from "./components/InputForm";
import InfoTable from "./components/InfoTable";
import PhotoWidget from "./components/PhotoWidget";

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
        <div className="search-container">
          <div className="search-container-rect">
            <InputForm handleNumberPlateCall={this.handleChildSubmit} />
          </div>
        </div>
        {this.state.searchData && (
          <div className="content-container">
            <InfoTable
              brand={this.state.brand}
              tradeName={this.state.tradeName}
              firstAdmissionDate={this.state.firstAdmissionDate}
              fuelType={this.state.fuelType}
            />
            <PhotoWidget
              brand={this.state.brand}
              tradeName={this.state.tradeName}
            />
          </div>
        )}
      </div>
    );
  }
}
