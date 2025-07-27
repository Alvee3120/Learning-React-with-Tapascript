import React from "react";

import PropTypes from "prop-types";

function Usercard({Users}) {
  return (
    <>
    {

        Users.map((user)=>(
            <div key={user.id} className="border-1 rounded-xl border-gray-500 p-6">

                <img src={user.profileUrl} className="w-50 h-50 rounded-2xl  " ></img>
                <h1 className=" text-xl font-bold text-center pt-5">{user.name}</h1>
                
                <p className="text-center pt-2 text-l"><b>Age: </b> {user.age}</p>
                
                <h1 className="text-center pt-2 text-l"><b>Email: </b>{user.email}</h1>
            </div>
        ))
    }
    </>
  

);
}

Usercard.propTypes = {
  Users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      profileUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Usercard;
