import React from "react";
import pza from "../assets/pizzasila.png";
import pzza2 from "../assets/11pz.png";

const Ubay1section = () => {
  return (
    <section className="bg-black pt-[50px] pb-[50px]">
      <div className="w-[85%] mx-auto md:flex md:flex-row justify-around items-center text-center ">
        <div>
          <h1 className="text-7xl w-[100%] pb-[30px] text-white font-bold leading-tight md:text-7xl">
            The Fastest Pizza Delivery
          </h1>

          <p className="text-white opacity-50 w-[360px] pb-[30px]">
            We will deliver juicy pizza for your family in 30 minutes, if the
            courier is late - pizza is free!
          </p>

          <img src={pza} alt="Pizza" className="pb-[30px] w-[40%] " />

          <button className="flex items-center border-2 border-orange-400 rounded-full w-[260px] overflow-hidden">
            <span className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-medium">
              To order
            </span>
            <span className="px-6 py-2 text-orange-400 font-medium hover:bg-orange-400 hover:text-white transition">
              Pizza–Menu
            </span>
          </button>
        </div>

        <img src={pzza2} alt="Pizza" className="w-[400px] md:w-[30%] flex mx-auto" />
      </div>
    </section>

  );
};

export default Ubay1section;
