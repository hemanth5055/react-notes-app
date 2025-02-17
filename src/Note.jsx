import React, { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

function Note({ Nid, Notename, Notedesc, deleteNote, readMore, findex }) {
  const [nameLimit, setNameLimit] = useState(15);
  const [descLimit, setDescLimit] = useState(220);

  useEffect(() => {
    const updateLimits = () => {
      if (window.innerWidth <= 640) {
        setNameLimit(13);
        setDescLimit(105);
      } else {
        setNameLimit(13);
        setDescLimit(210);
      }
    };

    updateLimits();
    window.addEventListener("resize", updateLimits);

    return () => window.removeEventListener("resize", updateLimits);
  }, []);

  const truncateText = (text, limit) =>
    text.length <= limit ? text : `${text.slice(0, limit)}...`;

  return (
    <div className="bg-gray-800 h-[330px] w-[310px] rounded-3xl max-sm:h-[250px] max-sm:w-[200px] max-sm:rounded-2xl">
      <div className="h-[20%] max-sm:h-[22%] rounded-t-3xl flex justify-start items-center pl-5">
        <div className="w-[3px] h-[25px] rounded-sm bg-white mr-[10px]"></div>
        <h3 className="font-mono text-xl text-blue-300 max-sm:text-lg">
          {truncateText(Notename, nameLimit)}
        </h3>
      </div>
      <div className="h-[66%] max-sm:h-[62%] p-5 py-1 overflow-hidden">
        <p className="font-mono text-gray-300 w-[100%] overflow-x-hidden max-sm:text-sm">
          {truncateText(Notedesc, descLimit)}&nbsp;
          {Notedesc.length > descLimit && (
            <span
              className="hover:text-red-300 text-red-200 underline cursor-pointer"
              onClick={() => readMore(findex)}
            >
              Read More
            </span>
          )}
        </p>
      </div>
      <div className="h-[14%] rounded-b-3xl flex justify-end items-center pr-8 pt-1">
        <RiDeleteBin7Line
          color="white"
          className="cursor-pointer"
          onClick={() => deleteNote(Nid)}
        />
      </div>
    </div>
  );
}

export default Note;
