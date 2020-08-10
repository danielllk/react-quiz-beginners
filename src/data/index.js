const data = [
  {
    id: 1,
    question: "What is state?",
    answers: [
      "It's an object which stores properties of the array",
      "It's an object which stores properties of the component",
      "It's an object which stores properties of the database",
    ],
    correct: "It's an object which stores properties of the component",
  },
  {
    id: 2,
    question: "What is Redux?",
    answers: [
      "Predictable state container for JavaScript Applications",
      "Predictable state container for React",
    ],
    correct: "Predictable state container for JavaScript Applications",
  },
  {
    id: 3,
    question: "What is componentDidMount()?",
    answers: [
      "Lifecycle method",
      "Prebuild React method to use with axios",
      "DOM Element",
    ],
    correct: "Lifecycle method",
  },
  {
    id: 4,
    question: "We can use if/else statements inside JSX",
    answers: ["True", "False"],
    correct: "False",
  },
  {
    id: 5,
    question: "What is the Virtual DOM?",
    answers: [
      "It's a virtual respresentation of UI, which is kept in memory and synced with the real DOM",
      "It's a real respresentation of UI, which is kept in memory and synced with the virtual DOM",
      "It's a virtual respresentation of UI, which is kept in memory and synced with the virtual DOM",
    ],
    correct:
      "It's a virtual respresentation of UI, which is kept in memory and synced with the real DOM",
  },
  {
    id: 6,
    question: "State is immutable?",
    answers: ["No", "Yes", "Depends on the situation"],
    correct: "Yes",
  },
  {
    id: 7,
    question: "How we pass parent state as props to child component?",
    answers: [
      "color = {this.props.color}",
      "color = {this.state.color}",
      "color = {color}",
    ],
    correct: "color = {this.state.color}",
  },
  {
    id: 8,
    question: "Can browsers read JSX?",
    answers: [
      "Yes. Browsers can read JavaScript and JSX.",
      "No. Browsers can only read JavaScript.",
    ],
    correct: "No. Browsers can only read JavaScript.",
  },
  {
    id: 9,
    question: "What is Props?",
    answers: [
      "It's shorthand for Properties in React.",
      "It's shorthand for Production in React.",
      "It's shorthand for Proposition in React.",
    ],
    correct: "It's shorthand for Properties in React.",
  },
  {
    id: 10,
    question: "When componentDidUpdate() is called?",
    answers: [
      "Called after updating takes place.",
      "Called before rendering takes place.",
      "Called immediately after rendering takes place.",
    ],
    correct: "Called immediately after rendering takes place.",
  },
];

export default data;
