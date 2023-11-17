import {} from "react";
import Logo from "./Images/Roicos-logo.webp";
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsTwitch,
} from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";

import amazon_ads from "./Images/amazon.webp";
import shopify from "./Images/shopify-partner-logo.webp";
import google_partner from "./Images/PartnerBadgeClickable.svg";
import others from "./Images/logo-miravia-partner-1.webp";
function Footer() {
  return (
    <footer className="for_blur">
      <div className="con_tainer">
        <div className="py-14">
          <div className="flex justify-between lg:flex-row flex-col">
            {/* left div */}
            <div className="lg:w-4/12 ">
              <div className="">
                <img className="-ms-3" src={Logo} alt="" />
              </div>
              <p className="font-bold mt-3">CREATING BESTSELLERS SINCE 2015</p>
              <div className="mt-8 ">
                <div className="flex space-x-8">
                  <BsFacebook className="text-3xl text_yellow" />
                  <AiOutlineTwitter className="text-3xl text_yellow" />
                  <BsYoutube className="text-3xl text_yellow" />
                  <BsInstagram className="text-3xl text_yellow" />
                </div>
                <div className="flex space-x-8 mt-8">
                  <BsLinkedin className="text-3xl text_yellow" />
                  <FaTiktok className="text-3xl text_yellow" />
                  <BsTwitch className="text-3xl text_yellow" />
                </div>
              </div>
            </div>
            {/* middile div */}
            <div className=" lg:w-4/12 lg:mt-0 mt-8">
              <div className="space-y-5">
                <div className="flex items-center">
                  <IoCallSharp className="text_yellow" />
                  <p className="">+34 684 402 122</p>
                </div>
                <div className="flex">
                  <IoLocationSharp className="text_yellow mt-1" />
                  <div className="">
                    <p>Avenida Ernest Lluch, 32, TCM2 5.07 08302</p>
                    <p className="">Mataró, Barcelona, Spain</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <AiTwotoneMail className="text_yellow" />
                  <p className="">info@roicos.com</p>
                </div>
              </div>
              <p className="font-bold text-lg my-6">SERVICE</p>
              <div className="lg:space-x-0 space-x-10 lg:space-y-5 flex lg:flex-col flex-row">
                <p className="underline">Amazon</p>
                <p className="underline">Marketplaces</p>
                <p className="underline">Ecommerce</p>
              </div>
            </div>
            {/* last div */}
            <div className="lg:w-4/12 lg:mt-0 mt-8">
              <h4 className="font-bold text_yellow mb-6">PARTNER</h4>
              <div className="">
                {/* img-1 */}
                <div className="flex items-center">
                  <div className="">
                    <img src={amazon_ads} />
                  </div>
                  <div className="">
                    <img className="shopify" src={shopify} />
                  </div>
                </div>
                {/* img-2 */}
                <div className="flex items-center">
                  <div className="">
                    <img className="" src={google_partner} />
                  </div>
                  <div className="">
                    <img className="miravia" src={others} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end footer */}
          <div className="mt-10 text-center text-slate-500">
            <p className="underline">Terms and conditions | Privacy Policy.</p>
            <p className="">© Copyright Roicos 2023 | All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
