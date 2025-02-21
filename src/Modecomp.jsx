import React from 'react'
import { HiOutlineMoon } from "react-icons/hi";
import { LuSun } from "react-icons/lu";

function Modecomp({changemode,mode}) {
    return (
        <div
                className="fixed h-[40px] w-[50px] right-4 rounded-b-xl  bg-[#dddff6]  z-[12] flex justify-center items-center cursor-pointer"
                onClick={() => changemode()}
              >
                {mode == "light" ? (
                  <HiOutlineMoon color="black" size={20} />
                ) : (
                  <LuSun color="black" size={20} />
                )}
              </div>
    )
}

export default Modecomp
