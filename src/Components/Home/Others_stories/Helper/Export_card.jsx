import {} from "react";
import { BsArrowRight } from "react-icons/bs";
function Export_card({ icon, title, des }) {
  return (
    <div className="lg:text-left md:text-left text-center">
      <div className="">{icon}</div>
      <p className="mt-4 text_yellow font-bold text-2xl">{title}</p>
      <div className="mt-4 md:text-justify text-center lg:text-justify f-15">
        {des}
      </div>
      <div className="text_yellow flex items-center mt-4 justify-center lg:justify-start md:justify-start hover:text-black transition-all duration-200 ease-linear">
        <p className="font-bold">Creación cuenta</p>
        <BsArrowRight className="ms-3" />
      </div>
    </div>
  );
}

export default Export_card;
