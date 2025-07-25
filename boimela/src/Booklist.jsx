import Bookrow from "./Bookrow";

import PropTypes from "prop-types";


function Booklist({SearchTerm, Books}) {
  console.log(SearchTerm);
  
  return (
    <ul className="space-y-4">
      {Books.map((book) => (
        <li key={book.id} className="flex items-center justify-between p-4 rounded-lg bg-white shadow ">
          <Bookrow book={book} />
        </li>
      ))}
    </ul>
  );
}

Booklist.PropTypes = {

  SearchTerm:PropTypes.string.isRequired,
  Books: PropTypes.array.isRequired

}

export default Booklist;
