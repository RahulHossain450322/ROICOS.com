import {} from "react";
import Export_card from "./Export_card";
import { BiSolidUser } from "react-icons/bi";
import { FaDiagramProject, FaUserTie } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

function E_2ndary() {
  return (
    <section className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:space-y-0 md:space-y-0 space-y-10">
      <Export_card
        title={"Creación de cuenta"}
        des={
          <p className="">
            <b>As Amazon</b> Experts we understand that your products are
            unique, so <i>Research</i> , Competitor Analysis and Strategy are
            key to understanding your customers and knowing what motivates their
            purchasing decisions.
          </p>
        }
        icon={
          <BiSolidUser className="text_yellow text-5xl border_style p-2 rounded-full lg:mx-0 md:mx-0 mx-auto" />
        }
      />
      <Export_card
        title={"Creación de cuenta"}
        des={
          <p>
            As a <b>Specialized Marketing Agency on Amazon</b> , we have helped
            companies of all sizes. From creating an Amazon account to
            exponentially increasing your sales performance.
          </p>
        }
        icon={
          <FaDiagramProject className="text_yellow text-5xl border_style p-2 rounded-full lg:mx-0 md:mx-0 mx-auto" />
        }
      />
      <Export_card
        title={"Creación de cuenta"}
        des={
          <p>
            We have the experience to <b>enhance your brand</b> on both Amazon
            platforms and establish a mixed strategy with the aim of taking your
            brand to the next level.
          </p>
        }
        icon={
          <FaUserTie className="text_yellow text-5xl border_style p-2 rounded-full lg:mx-0 md:mx-0 mx-auto" />
        }
      />
      <Export_card
        title={"Creación de cuenta"}
        des={
          <p>
            Forget about automatic translations. At Roicos we have{" "}
            <b>native specialists</b> to cover the international expansion of
            all our clients.
          </p>
        }
        icon={
          <FaGlobeAmericas className="text_yellow text-5xl border_style p-2 rounded-full lg:mx-0 md:mx-0 mx-auto" />
        }
      />
    </section>
  );
}

export default E_2ndary;
