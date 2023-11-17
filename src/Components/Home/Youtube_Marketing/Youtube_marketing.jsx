import {} from "react";

function Youtube_marketing() {
  return (
    <section className="bg-gray-50 for_blur">
      <div className="con_tainer">
        <div className="py-20 flex items-center justify-between lg:flex-row flex-col lg:space-y-0 space-y-10">
          <div className=" w-full text-center lg:text-left">
            <div className="">
              <p className="text-lg font-bold  text_yellow">Youtube</p>
              <p className="text-4xl font-bold mt-3">
                WE TELL YOU ALL THE <br /> TRICKS TO SELL ON <br /> AMAZON AND
                OTHER
                <br /> MARKETPLACES
              </p>
              <button className="bg_yellow text-white px-3 py-1 rounded-full border border-transparent mt-8 hover:bg-transparent hover:border-yellow-500 hover:text_yellow transition-all duration-200 ease-linear">
                View YouTube channel
              </button>
            </div>
          </div>
          <div className="w-full">
            <iframe
              className="w-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zyTSNZKR7NU?si=FgdCFjyMRYIKTQT6"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Youtube_marketing;
