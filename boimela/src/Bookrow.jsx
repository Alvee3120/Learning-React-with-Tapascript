
import PropTypes from "prop-types";

import Bookdetails from "./Bookdetails";
import Featurebook from "./Featurebook";

function Bookrow({book, ontoggleFeature}) {
  return (
    <>
    <div  className="flex items-center justify-between p-4 rounded-lg bg-white shadow ">
       <Bookdetails title={book.title} author={book.author} />
      <Featurebook book ={book} ontoggleFeature ={ontoggleFeature}/>
    </div>
     
    </>
  );
}

Bookrow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  ontoggleFeature:PropTypes.func.isRequired
};

export default Bookrow;
