import React, { useState } from 'react'

function App() {

  const initialNames = ["Alvee","Mahia", "Ovi", "Orpita"];
  const additionalNames = ['Hridoy', "sakib", "arif", "badhon"]

  const [name,setname] = useState(initialNames);


  
  
  const randomname = additionalNames[Math.floor(Math.random()*(4))+0];
  console.log(randomname);
  
  return (
    
    <>
    
    {

     initialNames.map((name,index)=>(

      <h1 key={index}>{name}</h1>
     ))
    }
    

    <button className='border-1 p-5 mt-10'>Add </button>
    
    </>
  )
}

export default App