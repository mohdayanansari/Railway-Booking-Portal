import { TicketIcon } from "@heroicons/react/outline";
import Button from "../Button";

const Main = () => {
  return (
    <div className="flex items-center justify-center w-full main_container rounded-2xl">
      <div className="p-4 border border-gray-100 shadow-lg lg:w-8/12 lg:p-24 rounded-2xl my-card">
        <form className="flex flex-col justify-center w-full ">
          <div className="relative ">
            <TicketIcon className="absolute z-10 w-8 h-8 text-black text-opacity-30 top-3 left-3" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter No. of Seats"
              className="w-full px-3 py-4 text-lg leading-tight text-gray-700 border border-gray-100 shadow appearance-none rounded-xl caret-blue-600 pl-14 focus:ring focus:ring-blue-500 focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="flex justify-between w-full gap-4 mt-16">
            <Button btnName="Check Seat" />
            <Button btnName="Book Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
