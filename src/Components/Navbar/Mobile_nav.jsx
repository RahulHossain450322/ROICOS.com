import { useEffect, useState } from "react";
import Logo from "./Images/Roicos-logo.webp";
import { MdCall } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { BiCross } from "react-icons/bi";
import "../../App.css";
function Mobile_nav() {
  const [color, setColor] = useState(false);
  const scroll_effect = () => {
    if (scrollY) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  // addEventlistener
  useEffect(() => {
    window.addEventListener("scroll", scroll_effect);
  }, []);
  // bars
  const bars = () => {
    const bar = document.querySelector(".bars");
    const cros = document.querySelector(".cross");
    const mobile_menu = document.querySelector(".mobile_menu");
    bar.classList.add("hide");
    cros.classList.remove("hide");
    mobile_menu.classList.remove("hide");
    mobile_menu.classList.add("show");
    // for blur
    let blur = document.querySelectorAll(".for_blur");
    blur[0].classList.add("blur");
    blur[1].classList.add("blur");
    blur[2].classList.add("blur");
    blur[3].classList.add("blur");
    blur[4].classList.add("blur");
    blur[5].classList.add("blur");
    blur[6].classList.add("blur");
    blur[7].classList.add("blur");
    blur[8].classList.add("blur");
    blur[9].classList.add("blur");
    blur[10].classList.add("blur");
    blur[11].classList.add("blur");
  };
  // cross
  const cross = () => {
    const bar = document.querySelector(".bars");
    const cros = document.querySelector(".cross");
    const mobile_menu = document.querySelector(".mobile_menu");
    cros.classList.add("hide");
    bar.classList.remove("hide");
    mobile_menu.classList.add("hide");
    mobile_menu.classList.remove("show");
    // for-blur
    let blur = document.querySelectorAll(".for_blur");
    blur[0].classList.remove("blur");
    blur[1].classList.remove("blur");
    blur[2].classList.remove("blur");
    blur[3].classList.remove("blur");
    blur[4].classList.remove("blur");
    blur[5].classList.remove("blur");
    blur[6].classList.remove("blur");
    blur[7].classList.remove("blur");
    blur[8].classList.remove("blur");
    blur[9].classList.remove("blur");
    blur[10].classList.remove("blur");
    blur[11].classList.remove("blur");
  };
  // handleClick

  return (
    <section
      className={
        color
          ? " bg-white sticky top-0 lg:hidden block z-50"
          : "bg_yellow sticky top-0 lg:hidden block z-50"
      }
    >
      <div className="con_tainer relative">
        <div className="py-4 flex justify-between items-center">
          <div className="">
            <img
              className="mobile_logo bg-white p-3 rounded-lg"
              src={Logo}
              alt=""
            />
          </div>
          <div className=" relative">
            <FaBars onClick={bars} className="text-4xl bars" />
            <BiCross onClick={cross} className="text-4xl cross hide " />
          </div>
        </div>
        <div className="mobile_menu hide">
          <div className="px-5 py-10 ">
            <ul className="capitalize space-y-4 font-bold font-sans">
              <li className="list">amazon</li>
              <li className="list">Marketplace</li>
              <li className="list">Ecommerce</li>
              <li className="list">Recoursos</li>
              <li className="list">Blog</li>
              <li className="list">Contact</li>
            </ul>
            <div className="nav_num mt-4 py-2 border border-slate-400">
              <MdCall className="text_yellow" />
              <p className="ms-2">+90632482746</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mobile_nav;
