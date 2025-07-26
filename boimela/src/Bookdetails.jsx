
import PropTypes from 'prop-types';

function Bookdetails({title,author}) {
  return (
    <div>

      <h2 className="text-lg font-semibold ">{title}</h2>
      <p className='text-gray-500' >{author}</p>
    </div>
  )
}

Bookdetails.propTypes = {

  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Bookdetails;