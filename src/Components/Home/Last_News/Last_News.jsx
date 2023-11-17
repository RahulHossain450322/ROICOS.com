import {} from "react";
import Success_Card from "./Helper/Success_Card";

function Last_News() {
  return (
    <section className="for_blur">
      <div className="con_tainer">
        <div className="py-24">
          <div className="text-center">
            <h2 className="hero_title">LAST NEWS</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8 text-left">
              <Success_Card
                box_title={"Amazon Partner Network"}
                date={"OCTOBER 3, 2023"}
                title={"Amazon Partner Network:Types of Partners"}
              />
              <Success_Card
                box_title={"ChargeBacks en Amazon"}
                date={"SEPTEMBER 28, 2023"}
                title={
                  "Chargebacks on Amazon Vendor: How to avoid these penalties?"
                }
              />
              <Success_Card
                box_title={"Amazon Posts"}
                date={"AUGUST 3, 2023"}
                title={
                  "Amazon Posts: What is it and how to use it to sell more?"
                }
              />
            </div>
            <button className="bg_yellow text-white px-3 py-1 rounded-full border border-transparent mt-10 hover:bg-transparent hover:border-yellow-500 hover:text_yellow transition-all duration-200 ease-linear">
              More news about Amazon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Last_News;
