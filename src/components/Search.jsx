import React, { Component } from "react";
import API from "../utils/API";

export class Search extends Component {
  state = {
    result: [],
    search: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.search)
      .then((res) => this.setState({ result: res.data.message }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search By Breed:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Type a dog breed to begin"
              id="search"
            />
            <br />
            <button onClick={this.handleFormSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
        {this.state.result.map((dog) => (
          <img  alt="Dog" src={dog} className="img-responsive" />
        ))}
      </div>
    );
  }
}
