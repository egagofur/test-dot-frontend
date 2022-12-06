import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Reset from './pages/Reset/Reset';

export default function App() {
  const [questions, setQuestions] = useState();
  const [nameUser, setNameUser] = useState('');
  const [score, setScore] = useState(0);
  const [inccorect, setInccorect] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);

  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="w-full h-screen bg-gradient-to-tl from-secondery to-primary">
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                nameUser={nameUser}
                setNameUser={setNameUser}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/quiz"
            element={
              <Quiz
                nameUser={nameUser}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
                inccorect={inccorect}
                setInccorect={setInccorect}
                totalAnswers={totalAnswers}
                setTotalAnswers={setTotalAnswers}
              />
            }
          />
          <Route
            path="/result"
            element={
              <Result
                score={score}
                nameUser={nameUser}
                inccorect={inccorect}
                totalAnswers={totalAnswers}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
