import {} from "react";
import Success_Card from "./Helper/Success_Card";
import Export_card from "./Helper/Export_card";
import { AiOutlineSearch, AiOutlineAmazon } from "react-icons/ai";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaPencil } from "react-icons/fa6";
function Others_Stories() {
  return (
    <section className="for_blur">
      <div className="con_tainer">
        <div className="py-14">
          <div className="">
            <p className="text-center text_yellow font-bold text-2xl">
              Other success stories on Amazon
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <Success_Card
                box_title={"MojoFun +50% en ventas"}
                date={"OCTOBER 3, 2023"}
                title={"Mojo Fun, +50% Sales in 4 weeks 630% increase in sales"}
              />
              <Success_Card
                box_title={"Mine Stamp +630% en ventas"}
                date={"SEPTEMBER 28, 2023"}
                title={"Mine Stamp, 630% increase in sales Mine Stamp,"}
              />
              <Success_Card
                box_title={"Bella Aurora"}
                date={"AUGUST 3, 2023"}
                title={"Bella Aurora, 400%  in 2 years, Bella Aurora,"}
              />
            </div>
          </div>
          <div className="my-24 grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:space-y-0 md:space-y-0 space-y-10">
            <Export_card
              title={"SEO on Amazon"}
              des={
                <p className="">
                  We know the <b>A9 algorithm</b> . We know how to position your
                  products on Amazon. We have achieved that our clients can
                  boast of being Top 1 in sales.
                </p>
              }
              icon={
                <AiOutlineSearch className="text_yellow text-5xl border_style p-2 rounded-full lg:mx-0 md:mx-0 mx-auto" />
              }
            />
            <Export_card
              title={"Amazon ADS"}
              des={
                <p className="">
                  As Amazon experts we manage to <b>increase your sales</b>{" "}
                  thanks to advertising: Sponsored Product, Sponsored Brand,
                  Amazon DSP , etc.
                </p>
              }
              icon={
                <AiOutlineAmazon className="text_yellow text-5xl border_style p-2 rounded-full lg:mx-0 md:mx-0 mx-auto" />
              }
            />
            <Export_card
              title={"Brand Store"}
              des={
                <p>
                  Department 100% dedicated to helping you generate{" "}
                  <b>Branding within Amazon</b> . We design the Brand Store of
                  your business thanks to our study of user behavior.
                </p>
              }
              icon={
                <BiSolidShoppingBag className="text_yellow text-5xl border_style p-2 rounded-full lg:mx-0 md:mx-0 mx-auto" />
              }
            />
            <Export_card
              title={"A+ Content"}
              des={
                <p>
                  We develop <b>improved descriptions</b> in your product
                  listings thanks to our A+ Content Exclusive Designs service.
                </p>
              }
              icon={
                <FaPencil className="text_yellow text-5xl border_style p-2 rounded-full lg:mx-0 md:mx-0 mx-auto" />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Others_Stories;
