import React from 'react'

function Checkbox() {
  return (
    <>
    <label class="text-xl inline-flex items-center space-x-2 cursor-pointer">
  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" id="premiumFilter" />
  <span>Show Premium Cars Only</span>
</label>
    </>
  )
}

export default Checkbox