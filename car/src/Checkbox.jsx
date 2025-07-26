import React from 'react'
import PropTypes from 'prop-types'

function Checkbox({premcar,onsetPremcar}) {
  return (
    <>
    <label className="text-xl inline-flex items-center space-x-2 cursor-pointer">
  <input type="checkbox" 
  className="form-checkbox h-5 w-5 text-blue-600" 
  id="premiumFilter" 
  checked= {premcar}
  onChange={(e)=> onsetPremcar(e.target.value)}
  />
  <span>Show Premium Cars Only</span>
</label>
    </>
  )
}


Checkbox.PropTypes = {
  premcar:PropTypes.bool.isRequired,
  onsetPremcar:PropTypes.func.isRequired
}
export default Checkbox