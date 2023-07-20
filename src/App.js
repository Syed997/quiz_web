import { useState } from "react";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "Total number of oceans in the World is",
      answers: [{ text: "7" }, { text: "6" }, { text: "5", isCorrect: true }],
    },
    {
      question: "Who is CEO of Tesla?",
      answers: [
        { text: "Jeff Bezos" },
        { text: "Elon Musk", isCorrect: true },
        { text: "Bill Gates" },
        { text: "Tony Stark" },
      ],
    },
    {
      question: "Where is Statue of Liberty is located?",
      answers: [
        { text: "India" },
        { text: "Russia" },
        { text: "UK" },
        { text: "USA", isCorrect: true },
      ],
    },
    {
      question: "What is the capital of Germany?",
      answers: [
        { text: "Paris" },
        { text: "Berlin", isCorrect: true },
        { text: "London" },
        { text: "Dublin" },
      ],
    },
    {
      question: "Which one is the largest tropical rain forest in the world?",
      answers: [
        { text: "Amazon", isCorrect: true },
        { text: "Bosawas" },
        { text: "Southeast Asian Rain Forest" },
        { text: "Daintree Rain Forest" },
      ],
    },
  ];
  const [mark, setMark] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const handleBtnClicked = (isCorrect) => {
    currentQuestion === questions.length-1 ? setQuizOver(true) : setcurrentQuestion(currentQuestion + 1);
    isCorrect && (setMark(mark + 1));
  }
  const handleResetBtn = () =>{
    setMark(0);
    setQuizOver(false);
    setcurrentQuestion(0);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {quizOver ? <ScoreView mark={mark} handleResetBtn={handleResetBtn} /> : <QuizView questions={questions} currentQuestion={currentQuestion} handleBtnClicked={handleBtnClicked} />}
      
    </div>
  );
}

export default App;
