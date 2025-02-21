import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
function Readmorecont({ close, Nname, Ndesc, Ndate,Ntime }) {
  return (
    <div className=" w-[95%] h-[90vh] rounded-3xl left-[50%] translate-x-[-50%] z-10  bg-[#ebecf3] fixed top-[5%] flex flex-col items-center max-sm:top-[0%] max-sm:rounded-none max-sm:w-full max-sm:h-screen max-sm:left-0 max-sm:translate-x-0  dark:bg-[#121212]">
      <div className="top w-full h-[20%] max-sm:h-[15%]  flex items-center justify-between px-[5%]">
        <h3 className="font-monts font-bold text-5xl text-black dark:text-[#d6d6d6] max-sm:text-2xl">
          {Nname}
        </h3>
        <IoCloseCircleOutline
          size={45}
          className="dark:text-[#eae9e9] text-black cursor-pointer"
          onClick={() => close(false)}
        />
      </div>

      <div className="bottom w-full h-[65%] max-sm:h-[70%] flex  justify-between px-[5%]">
        <p className="font-monts text-black dark:text-[#d6d6d6] font-medium text-lg overflow-auto max-sm:text-md">
          {Ndesc}
        </p>
      </div>

      <div className="w-full h-[10%] flex justify-between items-center max-sm:items-end px-[5%] font-monts font-medium dark:text-[#d6d6d6]">
        <p>{Ntime}</p>
        <p>{Ndate}</p>
      </div>
    </div>
  );
}

export default Readmorecont;
