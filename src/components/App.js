import React, { Component } from "react";
import QuizMain from "./QuizMain";
import logo from "../assets/img/logo.svg";

class App extends Component {
  state = {
    isPressed: false,
  };

  onSubmit = () => {
    this.setState({
      isPressed: !false,
    });
  };
  render() {
    if (this.state.isPressed) {
      return <QuizMain />;
    } else {
      return (
        <div className="App">
          <img className="logo" src={logo} alt="logo" />
          <h1>React Quiz for Beginners</h1>
          <p>This is a simple React quiz to check basic knowledge of React.</p>
          <button className="btn-choose mt-20" onClick={this.onSubmit}>
            Start Quiz
          </button>
        </div>
      );
    }
  }
}

export default App;
