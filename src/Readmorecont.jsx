import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
function Readmorecont({ close, Nname, Ndesc }) {
  return (
    <div className="absolute w-[95%] h-[90vh] rounded-3xl left-[50%] translate-x-[-50%] z-10  bg-slate-800 top-[5%] flex flex-col items-center">
      <div className="top w-full h-[20%]  flex items-center justify-between px-[5%]">
        <h3 className="font-mono text-3xl text-blue-300 max-sm:text-2xl">
          {Nname}
        </h3>
        <IoCloseCircleOutline
          size={50}
          className="text-gray-300 cursor-pointer "
          onClick={() => close(false)}
        />
      </div>
      <div className="bottom w-full h-[75%] flex  justify-between px-[5%]">
        <p className="font-mono text-gray-300 text-lg overflow-auto max-sm:text-md">
          {Ndesc}
        </p>
      </div>
    </div>
  );
}

export default Readmorecont;
