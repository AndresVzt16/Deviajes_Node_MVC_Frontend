import React from "react";

const Aerolineas = () => {
  return (
    <>
      <h2 className=" w-full text-center mt-10 text-4xl  text-gray-900 font-medium">
        Tu viaje está seguro
      </h2>
      <p className=" w-full text-center text-xl my-3 text-gray-500">
        Tenemos una gran cantidad de opciones y aerolineas que se adaptan a ti
      </p>
      <div className="md:flex justify-center  w-full gap-16 my-10">
        <img
          src="assets/img/LatamAirlines.png"
          className=" object-contain md:w-1/6 rounded-md   bg-gray-50 p-10"
          alt=""
        />
        <img
          src="assets/img/QatarAirways.png"
          className=" object-contain md:w-1/6 rounded-md  bg-gray-50 p-10"
          alt=""
        />
        <img
          src="assets/img/FlyEmirates.png"
          className=" object-contain md:w-1/6 rounded-md  bg-gray-50 p-10"
          alt=""
        />
      </div>
    </>
  );
};

export default Aerolineas;
