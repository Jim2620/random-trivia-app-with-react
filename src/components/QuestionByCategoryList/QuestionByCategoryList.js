import React, { Component } from "react";

export default class QuestionByCategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryID: undefined,
      questions: [],
      header: "Get Random Trivia Questions By Category",
    };
  }

  handleChange = (event) => {
    this.setState({
      categoryID: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userInput = this.state.categoryID;
    fetch(`http://jservice.io/api/category?id=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("handleSubmit", data);
        this.setState({
          questions: data.clues,
          header: `${data.title} asdgfasd`,
        });
      });
  };

  render() {
    const questionListItems = this.state.questions.map((question, index) => {
      return (
        <li key={`${question.question}-${index}`}>
          Question {index + 1}: {question.question}
        </li>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2>{this.state.header}</h2>
            <label htmlFor="count">Enter category ID: </label>
            <input
              id="count"
              type="text"
              name="count"
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="submit" />
        </form>
        <ul>{questionListItems}</ul>
      </div>
    );
  }
}
