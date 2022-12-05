import React, { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
  setInccorect,
  inccorect,
  setTotalAnswers,
  totolAnswers,
}) => {
  const [selected, setSelected] = useState();
  let navigate = useNavigate();

  const handleNext = (i) => {
    setSelected(i);
    i === correct ? setScore(score + 1) : setInccorect(inccorect + 1);

    const nextQuest = currQues + 1;
    totolAnswers = nextQuest;
    setTotalAnswers(totolAnswers);
    if (nextQuest < questions.length) {
      setCurrQues(nextQuest);
      setSelected();
    } else if (nextQuest > 8) {
      navigate("/result");
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
    navigate("/");
  };

  let result = currQues > 20 ? "Submit" : "Next";
  return (
    <div className="w-full lg:w-2/6 px-6 gap-12 flex flex-col">
      <div className="space-y-4">
        <h1 className="text-lg text-center">
          Question {currQues + 1}/{questions.length}
        </h1>
        <div className="font-ubuntu text-[#333] space-y-4">
          <h2 className="text-base font-semibold">
            {questions[currQues].question}
          </h2>
          <div className="flex flex-col gap-2">
            {options &&
              options.map((i) => (
                <button
                  className="bg-white shadow-md py-2 rounded-lg"
                  key={i}
                  onClick={() => handleNext(i)}
                  disabled={selected}
                >
                  {i}
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Button value={"Quit"} handleQuit={handleQuit} quitz={"bg-rose-600"} />
      </div>
    </div>
  );
};

export default Question;
