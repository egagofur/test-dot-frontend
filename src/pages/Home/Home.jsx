import indicator from "../../assets/indicator.svg";
import Button from "../../components/Button/Button";
import { TextField, MenuItem } from "@mui/material";
import Categories from "../../Data/Categories.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Search from "../../components/Search/Search";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };
  return (
    <div className="relative h-screen flex-col space-y-8 top-24">
      <div className="px-6 space-y-2 flex flex-col">
        <h3 className="text-white text-sm font-dm">Hello, Ega</h3>
        <h2 className="font-bold text-white text-xl font-ubuntu">
          Let's test your knowledge
        </h2>
        <Search />
      </div>
      <div className="h-5/6 bg-white rounded-t-3xl pt-4 flex flex-col items-center space-y-6 ">
        <img src={indicator} />
        <h2 className="text-3xl font-bold font-Nunito">Welcome to Quiz</h2>
        <div className="flex flex-col gap-8">
          {error && <ErrorMessage>Please Fill all</ErrorMessage>}
          <TextField
            label="Your Name"
            variant="outlined"
            style={{ width: 300 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((data) => (
              <MenuItem key={data.category} value={data.value}>
                {data.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Mode"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            handleSubmit={handleSubmit}
            value={"Start Quiz"}
            next={"bg-gradient-to-tl from-secondery to-primary"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
