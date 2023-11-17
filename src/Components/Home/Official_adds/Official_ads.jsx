import {} from "react";
import img from "./Images/roicos-advanced-partner-amazon-q9l71bukeilw5a0f0qkgn58vnw5jr1d0d7v449ta3g.webp";
import ads from "./Images/roicos-amazon-ads-logo-1-300x75.webp";
function Official_ads() {
  return (
    <section className="bg-gray-100 for_blur">
      <div className="con_tainer">
        <div className="py-24">
          <div className="">
            <img className="mx-auto" src={img} alt="" />
          </div>
          <div className="flex items-center mt-6 justify-center flex-wrap">
            <h2 className="hero_title">PARTNER OFICIAL DE</h2>
            <img className="ads ms-2 mt-4" src={ads} alt="" />
          </div>
          <div className="text-center mt-6">
            <button className="btn_style">Find us!</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Official_ads;
