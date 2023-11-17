import {} from "react";
import { BsStopwatch } from "react-icons/bs";
function Success_Card({ box_title, date, title }) {
  return (
    <div className="card_wrapper">
      <div className="card mt-4">
        <h3 className="text-4xl text-white font-bold">{box_title}</h3>
      </div>
      <div className="py-8 px-3 bg-gray-200">
        <div className="flex items-center">
          <BsStopwatch className="text-slate-500" />
          <p className="text-slate-500 ms-2 text-sm">{date}</p>
        </div>
        <h4 className="text-2xl mt-8 font-bold">{title}</h4>
      </div>
    </div>
  );
}

export default Success_Card;
