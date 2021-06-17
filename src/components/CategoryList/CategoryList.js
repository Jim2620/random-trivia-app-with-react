import React, { Component } from "react";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://jservice.io/api/categories?count=10")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        this.setState({
          categories: data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const categoryListItems = this.state.categories.map((category, index) => {
      return (
        <li
          key={`${category.title}-${index}`}
        >{`${category.title}, ${category.id}`}</li>
      );
    });
    return (
      <div>
        <h2>List of Top Categories</h2>
        <ol>{categoryListItems}</ol>
      </div>
    );
  }
}
