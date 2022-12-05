import iconSearch from "../../assets/search.svg";
import iconHome from "../../assets/home.svg";

const Search = () => {
  return (
    <div className="sm:w-[328px] h-10 bg-white rounded-3xl flex justify-evenly items-center">
      <img src={iconSearch} alt="icon search" />
      <input
        type="text"
        className="w-64 focus:outline-none"
        placeholder="Search"
      />
      <img src={iconHome} alt="icon home" />
    </div>
  );
};

export default Search;
