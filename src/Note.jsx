import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

function Note({ Nid, Notename, Notedesc, deleteNote, readMore, findex }) {
  return (
    <div className="bg-slate-800 h-[330px] w-[310px] rounded-3xl">
      <div className="h-[20%] rounded-t-3xl flex justify-start items-center pl-5">
        <div className="w-[3px] h-[25px] rounded-sm bg-white mr-[10px]"></div>
        <h3 className="font-mono text-xl text-blue-300">
          {Notename.length <= 15 ? Notename : `${Notename.slice(0, 15)}...`}
        </h3>
      </div>
      <div className="h-[66%] p-5 py-1 overflow-hidden">
        <p className="font-mono text-gray-300 text-md ">
          {Notedesc.slice(0, 230)}&nbsp;
          {Notedesc.length > 230 ? (
            <span
              className="hover:text-red-300  text-red-200 underline cursor-pointer"
              onClick={() => readMore(findex)}
            >
              Read More
            </span>
          ) : (
            ""
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
