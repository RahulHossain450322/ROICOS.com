import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
function Faq_Helper({ questions, answers }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-between px-4 py-8 cursor-pointer"
      >
        <p
          className={toggle ? "text_yellow font-bold" : "text-black font-bold"}
        >
          {questions}
        </p>
        <div>
          {toggle ? (
            <IoMdArrowDropup className="text-2xl" />
          ) : (
            <IoMdArrowDropright className="text-2xl" />
          )}
        </div>
      </div>
      {toggle && <div className="p-6 bg_color_toggle">{answers}</div>}
      <hr />
    </div>
  );
}

export default Faq_Helper;
