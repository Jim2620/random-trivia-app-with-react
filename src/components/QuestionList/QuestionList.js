import React, { Component } from "react";

export default class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: undefined,
      questions: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      count: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userInput = this.state.count;
    fetch(`http://jservice.io/api/random?count=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("handleSubmit", data);
        this.setState({
          questions: data,
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
        <h2>Random Trivia Questions</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="count"># of Trivia Questions</label>
            <input
              id="count"
              type="text"
              name="count"
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <ul>{questionListItems}</ul>
      </div>
    );
  }
}
