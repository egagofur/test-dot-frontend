import { useState, useEffect } from 'react';
import indicator from '../../assets/indicator.svg';
import Question from '../../components/Question/Question';
import CircularProgress from '@mui/material/CircularProgress';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';

const Quiz = ({
  nameUser,
  score,
  questions,
  setQuestions,
  setScore,
  setInccorect,
  inccorect,
  setTotalAnswers,
  totolAnswers,
}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  const handleTimer = () => {
    alert('Your time is up');
    navigate('/result');
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => handleTimer(),
  });
  return (
    <div className="relative  h-screen flex-col space-y-8 top-24">
      <span className="text-white font-Nunito font-semibold px-6 flex justify-between items-center">
        <div className="flex-col">
          <p className="text-xl font-medium">Hello, {nameUser}</p>
          <p className="text-md font-medium">
            time: {hours} : {minutes} : {seconds}
          </p>
        </div>
        <p className="text-md">Score: {score}</p>
      </span>
      <div className="h-5/6 bg-white rounded-t-3xl pt-4 flex flex-col items-center space-y-6">
        <img src={indicator} />
        {questions ? (
          <>
            <Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              setInccorect={setInccorect}
              inccorect={inccorect}
              setTotalAnswers={setTotalAnswers}
              totolAnswers={totolAnswers}
            />
          </>
        ) : (
          <CircularProgress
            color="primary"
            style={{ margin: 200 }}
            size={80}
            thickness={2}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
