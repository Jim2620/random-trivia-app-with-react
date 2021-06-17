import React, { Component } from "react";

export default class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answer: "",
      category: "",
    };

    console.log("this is the constructor method");
  }

  // componentDidMount gets called after every re-render of the page
  componentDidMount() {
    console.log("this is the componentDidMount method");

    fetch("http://jservice.io/api/random")
      .then((response) => response.json())
      .then((data) => {
        console.log("data from API", data);
        // No more DOM manipulation!
        // call this.setState here to update the DOM
        this.setState({
          question: data[0].question,
          answer: data[0].answer,
          category: data[0].category.title,
        });
      });
  }

  render() {
    console.log("this is the render method");

    // // putting this.setState inside render() will cause infinite re-renders
    // fetch("http://jservice.io/api/random")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("data from API", data);
    //     // No more DOM manipulation!
    //     // call this.setState here to update the DOM
    //     this.setState({
    //       question: data[0].question,
    //       answer: data[0].answer,
    //       category: data[0].category.title,
    //     });
    //   });

    return (
      <div>
        <h2>Question: {this.state.question}</h2>
        <h3>Answer: {this.state.answer}</h3>
        <p>Category: {this.state.category}</p>
      </div>
    );
  }
}
