import {} from "react";
import img from "./Images/Mockup-1024x650.webp";
import img_2 from "./Images/roicos-advanced-partner-amazon-q9l71bukeilw5a0f0qkgn58vnw5jr1d0d7v449ta3g.webp";
import google_logo from "./Images/google-icon-2048x2048-czn3g8x8.png";

import { AiTwotoneStar } from "react-icons/ai";
import "animate.css";

function E_Primary_Sec() {
  return (
    <div className="">
      <div className="text-center animate__animated animate__fadeInLeft">
        <p className="text_yellow font-bold text-2xl">
          Agencia Especializada en Amazon
        </p>
        <h2 className="hero_title mt-2">EXPERTOS EN AMAZON</h2>
      </div>
      {/*  */}
      <div className="flex justify-between lg:flex-row md:flex-row flex-col items-center mt-14">
        <div className=" lg:w-1/2 md:w-1/2 w-full">
          <img className="export_Img_1 mx-auto" src={img} />
        </div>
        {/* 2nd html */}
        <div className="lg:w-1/2 md:w-1/2">
          <div className="flex lg:flex-row md:flex-row flex-col items-center">
            {/* google card */}
            <div className="google_card flex items-center ">
              <div className="">
                <img className="google_logo" src={google_logo} />
              </div>
              <div className="ms-3 text-slate-500">
                <p className="">Google Rating</p>
                <div className=" flex items-center">
                  <p className="text_yellow font-extrabold">4.9</p>
                  <div className="flex items-center ms-2 star_color">
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                  </div>
                </div>
                <p className="">Based on 29 review</p>
              </div>
            </div>
            {/* amazon adds image */}
            <div className="amazon_adds lg:mt-0 md:mt-0 mt-6">
              <img className="lg:ms-8 md:ms-8 me-32" src={img_2} />
            </div>
          </div>
          {/* paragraph texts and button */}
          <div className="mt-3">
            <p className="text-justify">
              Somos especialistas en Amazon y formamos parte de su Red Oficial
              de Proveedores de Servicios. Llevamos más de 7 años guiando a
              marcas hacía el éxito dentro de Amazon.
            </p>
            <p className="mt-4">¿Quieres realizar una Consultoría en Amazon?</p>
            <button className="btn_style mt-6">¡Escríbenos!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default E_Primary_Sec;
