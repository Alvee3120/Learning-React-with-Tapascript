import {Star} from "lucide-react"
import PropTypes from "prop-types"

function Featurebook({book,ontoggleFeature}) {
  return (

    <button 
    onClick={()=>ontoggleFeature(book.id)}
    >
       <Star color = {book.featured ? "Green" : "Black"}/>
    </button>
    
  )
}


Featurebook.propTypes = {

  book:PropTypes.object.isRequired,
  ontoggleFeature:PropTypes.func.isRequired

}

export default Featurebook