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
    } else {
      this.setState({
        errors: [
          ...this.state.errors,
          `${updateIndex}. ${questions[this.state.index].error}`,
        ],
      });
    }
  };

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
