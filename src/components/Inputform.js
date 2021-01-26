import React, { Component } from "react";

export default class Inputform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const numberPlateData = await fetch(
      `https://api.overheid.io/voertuiggegevens/${this.state.searchTerm}`,
      {
        method: "GET",
        headers: {
          "ovio-api-key":
            "4320c29517eb75e528e416fea8b0067db0e73a5c71a3fc68be2122f8b91b4877", // would hide this in a .env file in real build
        },
      }
    ).then((data) => data.json());
    this.props.handleNumberPlateCall(numberPlateData);
  };

  render() {
    return (
      <div>
        <h1>Please enter your license plate number</h1>
        <div className="form-group">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              id="inputDefault"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
