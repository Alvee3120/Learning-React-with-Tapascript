import React from "react";

import Cardetails from "./Cardetails";
import PropTypes from "prop-types";


function Carlist({Cars, searchVal,premcar}) {
  const rows = [];
  
  

  Cars.forEach((car)=> {
    if(car.title.toLowerCase().indexOf(searchVal.toLowerCase()) === -1){
       return;
    }
    rows.push(<Cardetails key={car.id} car={car} />);
  });

  return (
    <div className="w-full flex flex-wrap gap-4">
      {rows}
    </div>
  );
}

Carlist.PropTypes = {

  Cars:PropTypes.array.isRequired,
  searchVal:PropTypes.string.isRequired,
  premcar:PropTypes.bool.isRequired
}

export default Carlist;
