import React, { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
function Note({
  Nid,
  Notename,
  Notedesc,
  deleteNote,
  readMore,
  findex,
  heart,
  fav,
}) {
  const [nameLimit, setNameLimit] = useState(15);
  const [descLimit, setDescLimit] = useState(220);

  useEffect(() => {
    const updateLimits = () => {
      if (window.innerWidth <= 640) {
        setNameLimit(12);
        setDescLimit(160);
      } else {
        setNameLimit(13);
        setDescLimit(230);
      }
    };

    updateLimits();
    window.addEventListener("resize", updateLimits);

    return () => window.removeEventListener("resize", updateLimits);
  }, []);

  const truncateText = (text, limit) =>
    text.length <= limit ? text : `${text.slice(0, limit)}...`;

  const copytoclip = (desc) => {
    navigator.clipboard.writeText(desc);
  };

  return (
    <div className="bg-[#ebecf3] h-[330px] w-[330px] rounded-3xl max-sm:h-[265px] max-sm:w-[235px] max-sm:rounded-2xl dark:bg-[#242424]">
      <div className="h-[24%] max-sm:h-[22%] rounded-t-3xl flex justify-between items-center px-5">
        {/* <div className="w-[3px] h-[25px] rounded-sm bg-white mr-[10px]"></div> */}
        <h3 className="font-monts text-2xl select-none text-black dark:text-[#eae9e9] max-sm:text-lg font-semibold">
          {truncateText(Notename, nameLimit)}
        </h3>
        <div
          className="heart bg-white p-2 rounded-full cursor-pointer dark:bg-black"
          onClick={() => fav(findex)}
        >
          {!heart ? (
            <RiHeartLine size={25} className="dark:text-[#eae9e9] text-black" />
          ) : (
            <RiHeartFill size={25} className="text-red-500 " />
          )}
        </div>
      </div>
      <div className="h-[62%] max-sm:h-[64%] p-5 py-1 overflow-hidden">
        <p className="font-monts text-black dark:text-[#bdbdbd] w-[100%] select-none overflow-x-hidden max-sm:text-sm font-medium">
          {truncateText(Notedesc, descLimit)}&nbsp;
          {Notedesc.length > descLimit && (
            <span
              className=" text-red-700 dark:text-red-300 underline cursor-pointer"
              onClick={() => readMore(findex)}
            >
              Read More
            </span>
          )}
        </p>
      </div>
      <div className="h-[11%] rounded-b-3xl flex justify-end items-center pr-8 pt-1 gap-3">
        <MdContentCopy
          size={20}
          className="text-black dark:text-[#bdbdbd]"
          onClick={() => {
            copytoclip(Notedesc);
          }}
        />
        <RiDeleteBin7Line
          size={20}
          className="cursor-pointer text-black dark:text-[#bdbdbd]"
          onClick={() => deleteNote(Nid)}
        />
      </div>
    </div>
  );
}

export default Note;
