
import PropTypes from "prop-types";

import Bookdetails from "./Bookdetails";
import Featurebook from "./Featurebook";

function Bookrow({book}) {
  return (
    <>
      <Bookdetails title={book.title} author={book.author} />
      <Featurebook />
    </>
  );
}

Bookrow.PropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bookrow;
