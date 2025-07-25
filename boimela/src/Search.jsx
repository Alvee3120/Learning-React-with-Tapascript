import PropTypes from "prop-types";

function Search({ SearchTerm, onSearchTerm }) {
  return (
    <>
      <form>
        <input
          value={SearchTerm}

          type="text"
          placeholder="Search Books..."
          className=" border-1 border-gray-300 rounded-md w-full text-[18px] p-2  mb-6"
          onChange={(e)=> onSearchTerm(e.target.value)}
        />
      </form>
    </>
  );
}

Search.PropTypes = {
  SearchTerm: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired
}
export default Search;
