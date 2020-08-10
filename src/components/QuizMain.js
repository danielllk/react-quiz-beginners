import React, { Component } from "react";
import data from "../data";
import QuizEnd from "./QuizEnd";

class QuizMain extends Component {
  state = {
    index: 0,
    questions: data,
    score: 0,
    errors: [],
  };

  nextQuestion = (answer) => {
    const questions = this.state.questions;
    const updateIndex = this.state.index + 1;

    this.setState({
      index: updateIndex,
    });

    if (answer === questions[this.state.index].correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    if (
      answer === questions[0].answers[0] ||
      answer === questions[0].answers[2]
    ) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. State stores property of the component.`,
        ],
      });
    }
    if (answer === questions[1].answers[1]) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. Redux can be used with any JavaScript Application`,
        ],
      });
    }
    if (
      answer === questions[2].answers[1] ||
      answer === questions[2].answers[2]
    ) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. componentDidMount() is a Lifecycle method`,
        ],
      });
    } else if (answer === questions[3].answers[0]) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. If / Else don't work inside JSX. We should use ternary operator instead.`,
        ],
      });
    } else if (
      answer === questions[4].answers[1] ||
      answer === questions[4].answers[2]
    ) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. Virtual DOM is a virtual respresentation of UI which is kept in memory and synced with the real DOM.`,
        ],
      });
    } else if (
      answer === questions[5].answers[0] ||
      answer === questions[5].answers[2]
    ) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. State is immutable, you should use setState() to update the value.`,
        ],
      });
    } else if (
      answer === questions[6].answers[0] ||
      answer === questions[6].answers[2]
    ) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. The right answer is: color = {this.state.color}`,
        ],
      });
    } else if (answer === questions[7].answers[0]) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. Browsers can only read JavaScript objects but JSX in not a regular JavaScript object`,
        ],
      });
    } else if (
      answer === questions[8].answers[1] ||
      answer === questions[8].answers[2]
    ) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. Props is the shorthand for Properties in React`,
        ],
      });
    } else if (
      answer === questions[9].answers[0] ||
      answer === questions[9].answers[1]
    ) {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. Wrong. The method componentDidUpdate() is called immediately after rendering takes place.`,
        ],
      });
    }
  };
  //<div>Your score is {score}</div>;
  render() {
    const questionItems = this.state.questions[this.state.index];
    if (this.state.index === 10) {
      return (
        <div className="quiz-container">
          <QuizEnd score={this.state.score} errors={this.state.errors} />
        </div>
      );
    } else {
      return (
        <div className="quiz-container">
          <div className="questions">Question: {this.state.index + 1} / 10</div>
          <div className="mt-20">{questionItems.question}</div>
          {questionItems.answers.map((item, i) => {
            return (
              <p key={i}>
                <button
                  className="btn-choose"
                  onClick={() => this.nextQuestion(item)}
                >
                  {item}
                </button>
              </p>
            );
          })}
        </div>
      );
    }
  }
}

export default QuizMain;
