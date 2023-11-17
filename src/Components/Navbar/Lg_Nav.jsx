import {} from "react";
import Logo from "./Images/Roicos-logo.webp";
import { MdCall } from "react-icons/md";
import Amazon from "./Helper/Amazon";
import Marketplace_menu from "./Helper/Marketplace_menu";
import Ecommerce_menu from "./Helper/Ecommerce";
function Lg_Nav() {
  const mouseOver = (class_Name) => {
    const menu = document.querySelector(`.${class_Name}`);
    menu.classList.add("show_menu");
  };
  const mouseOut = (class_Name) => {
    const menu = document.querySelector(`.${class_Name}`);
    menu.classList.remove("show_menu");
  };
  const stop_hide = (class_Name) => {
    const menu = document.querySelector(`.${class_Name}`);
    menu.classList.add("show_menu");
  };
  return (
    <section className="bg_yellow sticky top-0 lg:block hidden z-50">
      <div className="con_tainer relative">
        <div className="py-4 flex justify-between ">
          <div className="">
            <img className="logo bg-white p-3 rounded-lg" src={Logo} alt="" />
          </div>
          <ul className="flex capitalize items-center flex-wrap space-x-8 text-white ">
            <div className="relative"></div>
            <li
              onClick={() => stop_hide("amazon_menu")}
              onMouseOut={() => mouseOut("amazon_menu")}
              onMouseOver={() => mouseOver("amazon_menu")}
              className=""
            >
              Amazon
            </li>
            <Amazon />
            <div className="relative">
              <li
                onMouseOut={() => mouseOut("marketplace_menu")}
                onMouseOver={() => mouseOver("marketplace_menu")}
                className=""
              >
                Marketplace
              </li>
              <Marketplace_menu />
            </div>
            <div className="relative">
              <li
                onMouseOut={() => mouseOut("ecommerce_menu")}
                onMouseOver={() => mouseOver("ecommerce_menu")}
                className=""
              >
                Ecommerce
              </li>
              <Ecommerce_menu />
            </div>
            <li className="">Recoursos</li>
            <li className="">Blog</li>
            <li className="">Contact</li>
          </ul>
          <div className="nav_num">
            <MdCall className="text_yellow" />
            <p className="ms-2">+90632482746</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lg_Nav;
