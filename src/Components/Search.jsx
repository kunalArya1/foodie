import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div>
      <div className=" text-center">
        <input
          className=" p-3 w-[40em] mt-16 shadow-lgfont-mono font-bold text-lg outline-none border-black border"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
