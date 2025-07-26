import Header from "./Header";
import Search from "./Search";
import Checkbox from "./Checkbox";
import Carlist from "./Carlist";
import { useState } from "react";

function Carshowroom() {


  const CARS = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];
  


  const [searchVal, setSearchVal] = useState('');
  const [premcar,setPremcar] =useState(false);
  return (
    <>
      <div className="mx-auto p-12 ">
        <Header />
        <div className="flex items-center justify-between gap-8 ">
          <div className="w-1/2">
            <Search searchVal = {searchVal} onSearch = {setSearchVal} />
          </div>

          <div className="w-1/3">
            <Checkbox  premcar={premcar} onsetPremcar={setPremcar} />
          </div>
        </div>
        
          <Carlist Cars ={CARS} searchVal= {searchVal}  premcar={premcar}   />
        
      </div>
    </>
  );
}

export default Carshowroom;
