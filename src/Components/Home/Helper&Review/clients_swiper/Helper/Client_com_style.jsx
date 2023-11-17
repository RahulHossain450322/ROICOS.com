import {} from "react";

function Client_com_style({ img, name, profession }) {
  return (
    <div className="mt-8 flex items-center justify-center lg:flex-row md:flex-row flex-col">
      <div className="text-center">
        <div className="">
          <img className="w-20 h-20  rounded-full mx-auto" src={img} alt="" />
        </div>
        <div className="text-white mt-4">
          <h6 className="text-lg font-bold">{name}</h6>
          <p className="text-lg">{profession}</p>
        </div>
      </div>
      <div className="relative mt-5 lg:mt-0 md:mt-0">
        <p className="bg-white p-4 ms-10 text-center after">
          <i>
            We started advertising our sunscreen
            <br /> on Amazon in 2018 and the campaign did well ,
            <br /> but we weren,t leveraging a full funnel strategy <br />
            to help us really stand out.
          </i>
        </p>
      </div>
    </div>
  );
}

export default Client_com_style;
