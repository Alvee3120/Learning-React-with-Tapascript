import React from 'react'
import PropTypes from 'prop-types' 

function Cardetails({car}) {
  return (
   <>

   <div className='mb-4 bg-white shadow rounded-2xl p-4 border-1'>  
   <h2 className='text-xl font-bold'>{car.title}</h2>
   <p><b>Brand: </b>{car.brand}</p>
   <p><b>Year:</b> {car.year}</p>
   <p><b>Price: </b>{car.price}</p>
   <p><b>Primium: </b>{car.isPremium ? "Yes" : "No"}</p>
</div> 
   </>
  )
}

Cardetails.propTypes = {
car:PropTypes.shape(
    {
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired

    }
).isRequired

}
export default Cardetails