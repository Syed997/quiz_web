import { useState } from "react";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";
import { Route, Routes, useNavigate,  } from "react-router-dom";
import Start from "./components/Start";

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
  const history = useNavigate() ;
  const [mark, setMark] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const handleBtnClicked = (isCorrect) => {
    currentQuestion === questions.length-1 ? setQuizOver(true) : setcurrentQuestion(currentQuestion + 1);
    isCorrect && (setMark(mark + 1));
    quizOver && (history('/score'))
  }
  const handleResetBtn = () =>{
    setMark(0);
    setQuizOver(false);
    setcurrentQuestion(0);
    history('/home');
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/home" element={<Start/>} />
        <Route path="/score" element={<ScoreView mark={mark} handleResetBtn={handleResetBtn} />} />
        <Route path="/quiz" element={<QuizView questions={questions} currentQuestion={currentQuestion} handleBtnClicked={handleBtnClicked} />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
