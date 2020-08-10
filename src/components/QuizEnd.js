import React from "react";

const QuizEnd = (props) => {
  const score = props.score;
  const errors = props.errors;

  const startAgain = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <h1>Your final score: </h1>
      <h2
        className="score-number"
        style={{
          color: score >= 8 ? "#00cc00" : score >= 5 ? "#ff6600" : "#e60000",
          fontSize: "2rem",
        }}
      >
        {score}0%
      </h2>
      <p>
        {score === 10
          ? "Fantastic! Keep it up!"
          : score >= 8
          ? "Awesome! You know it!"
          : score >= 6
          ? "Good. But you should practice more."
          : score >= 5
          ? "So-so. Please check the wrong answers:"
          : "Bad. Oh my, you really need to study. Check the errors below:"}
      </p>

      <div className={score === 10 ? "" : "errors-list"}>
        {errors.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
      <button className="btn-choose mt-20 mb-20" onClick={startAgain}>
        Try again
      </button>
    </div>
  );
};

export default QuizEnd;
