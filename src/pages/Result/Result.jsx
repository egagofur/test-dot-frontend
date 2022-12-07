import { useEffect } from 'react';
import Button from '../../components/Button/Button';

const Result = ({ nameUser, score, inccorect, totalAnswers }) => {
  useEffect(() => {
    if (!nameUser) {
      window.location.href = '/home';
    }
  }, [nameUser]);
  const handleQuit = () => {
    window.location.href = '/';
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-6">
      <div className="lg:w-2/6 w-full flex flex-col justify-evenly gap-8 items-center">
        <h2 className="text-4xl font-ubuntu font-bold text-slate-200 mb-44">
          Result Quiz!
        </h2>
        <div className="w-full bg-white/10 shadow-lg space-x-5 rounded-lg flex justify-around items-center  p-4">
          <h2 className="lg:text-xl md:text-md font-ubuntu font-bold text-green-400">
            Correct: {score}
          </h2>
          <h2 className="lg:text-xl md:text-md font-ubuntu font-bold text-rose-500">
            Wrong: {inccorect}
          </h2>
          <h2 className="lg:text-xl md:text-md font-ubuntu font-bold text-white/80">
            Total Answers: {totalAnswers}
          </h2>
        </div>
        <Button value={'Quit'} handleQuit={handleQuit} quitz={'bg-rose-600'} />
      </div>
    </div>
  );
};

export default Result;
