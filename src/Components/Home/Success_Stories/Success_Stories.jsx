import {} from "react";
import img from "./Images/mine-stamp-caso-exito-1024x689.webp";
import logo from "./Images/mine-stamp-logo-qd2ilmszzgrwdkxuufz29v90qek3kpc47ypu2pyj3u.webp";
function Success_Stories() {
  return (
    <section className="bg-gray-200 for_blur">
      <div className="con_tainer">
        <div className="py-24">
          <div className="text-center">
            <p className="font-bold text-lg text_yellow">
              Success stories on Amazon
            </p>
            <p className="hero_title mt-2"> SALES SKYROCKETED 630% </p>
          </div>
          {/* image section */}
          <div className="mt-24 flex items-center lg:flex-row md:flex-row flex-col">
            <div className="">
              <img className="story_image" src={img} alt="" />
            </div>
            <div className="">
              <p className="text-justify">
                “ Thanks to Roicos and Amazon Ads, we have experienced an
                extraordinary process. Our sales have progressively risen month
                after month, which has helped us achieve substantial growth ”
              </p>
              <img className="mt-3" src={logo} alt="" />
              <p className="font-bold mt-3">Paco Narvaez</p>
              <p className="">Founding partner of Mine Stamp</p>
              <button className="btn_style mt-6">See success story</button>
            </div>
          </div>
          {/* impression */}
          <div className="mt-14 gap-6 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
            <div className="text-center bg-slate-100 rounded-lg px-4 py-6">
              <p className="font-extrabold text_yellow text-2xl">+ 65%</p>
              <p className="font-bold text_yellow">Clicks</p>
            </div>
            <div className="text-center bg-slate-100 rounded-lg px-4 py-6">
              <p className="font-extrabold text_yellow text-2xl">+ 893%</p>
              <p className="font-bold text_yellow">Impressions</p>
            </div>
            <div className="text-center bg-slate-100 rounded-lg px-4 py-6">
              <p className="font-extrabold text_yellow text-2xl">+50%</p>
              <p className="font-bold text_yellow">ROAS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success_Stories;
