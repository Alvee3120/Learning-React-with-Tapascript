import Header from "./Header";
import Search from "./Search";
import Checkbox from "./Checkbox";
import Carlist from "./Carlist";

function Carshowroom() {
  return (
    <>
    <div className="mx-auto p-10 ">
      <Header />
      <div className="flex items-center justify-between gap-8 ">
        <div className="w-1/2">
          <Search />
        </div>

        <div className="w-1/2">
          <Checkbox />
        </div>
      </div>

      <Carlist />
    </div></>
  );
}

export default Carshowroom;
