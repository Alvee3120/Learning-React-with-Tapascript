import Bookrow from "./Bookrow";

import PropTypes from "prop-types";


function Booklist({SearchTerm, Books,ontoggleFeature}) {
  
  const rows = [];

Books?.forEach((book) => {
  
  if(book.title.toLowerCase().indexOf(SearchTerm.toLowerCase()) === -1){
    return ;
  }

  rows.push(<Bookrow key={book.id} book={book} ontoggleFeature = {ontoggleFeature} />)

})
  
  return (
    <div className="space-y-4">
      {rows}
    </div>
    
  );
}

Booklist.propTypes = {

  SearchTerm:PropTypes.string.isRequired,
  Books: PropTypes.array.isRequired,
  ontoggleFeature: PropTypes.func.isRequired 

}

export default Booklist;
