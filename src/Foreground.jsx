import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { v4 as uuid } from "uuid";

import Note from "./Note";
import Readmorecont from "./Readmorecont";

function Foreground() {
  const [inpName, setinpName] = useState("");
  const [inpDesc, setinpDesc] = useState("");
  const [Notes, setNotes] = useState([]);
  const [showaddpopup, setshowaddpopup] = useState(false);
  const [showcontpopup, setshowcontpopup] = useState(false);
  const [contIdx, setcontIdx] = useState();

  const handleaddNotes = () => {
    if (inpName.length > 0 && inpDesc.length > 0) {
      const temp = { name: inpName, desc: inpDesc, id: uuid() };
      setNotes([...Notes, temp]);
      setinpName("");
      setinpDesc("");
    }
  };

  const handledeleteNotes = (id) => {
    const temp = Notes.filter((item, index) => {
      return item.id != id;
    });
    setNotes(temp);
  };

  const handlereadmore = (idx) => {
    setshowcontpopup(true);
    setcontIdx(idx);
  };

  return (
    <div className="wholebg absolute z-10 w-full h-screen">
      {showaddpopup ? (
        <div className="absolute w-[95%] h-[90vh] rounded-3xl left-[50%] translate-x-[-50%] z-10 bg-slate-800 top-[5%] flex flex-col p-5 pl-12  gap-5 ">
          <div className="top w-full flex items-center justify-end px-[5%]">
            <IoCloseCircleOutline
              size={50}
              className="text-gray-300 cursor-pointer"
              onClick={() => setshowaddpopup(false)}
            />
          </div>

          <input
            type="text"
            id="name"
            value={inpName}
            onChange={(e) => setinpName(e.target.value)}
            placeholder="Name "
            className="bg-gray-300 h-[50px] w-[40%] outline-none px-2 rounded-lg font-mono text-xl
            max-sm:w-[80%] max-sm:text-lg"
          />
          <textarea
            name="content"
            id="content"
            value={inpDesc}
            onChange={(e) => setinpDesc(e.target.value)}
            className="bg-gray-300 h-[65%] outline-none w-[75%] p-2 resize-none rounded-lg font-mono text-xl max-sm:w-[80%] max-sm:text-lg"
            placeholder="Your Note Here..."
          ></textarea>
          <div
            className="submit bg-gray-300 h-[50px] w-[150px] rounded-lg font-mono text-xl flex justify-center items-center cursor-pointer select-none"
            onClick={handleaddNotes}
          >
            Add Notes
          </div>
        </div>
      ) : (
        ""
      )}
      {showcontpopup ? (
        <Readmorecont
          close={setshowcontpopup}
          Nname={Notes[contIdx].name}
          Ndesc={Notes[contIdx].desc}
        ></Readmorecont>
      ) : (
        ""
      )}
      <div className="relative left-[50%] translate-x-[-50%] flex gap-5 flex-wrap p-5 max-sm:justify-center">
        {Notes.map((item, index) => (
          <Note
            key={index}
            findex={index}
            Nid={item.id}
            Notename={item.name}
            Notedesc={item.desc}
            deleteNote={handledeleteNotes}
            readMore={handlereadmore}
          ></Note>
        ))}

        <div
          className="h-[330px] w-[310px] bg-gray-800 max-sm:h-[250px] max-sm:w-[200px] rounded-3xl flex justify-center items-center cursor-pointer "
          onClick={() => setshowaddpopup(true)}
        >
          <IoAddCircle size={80} className="text-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default Foreground;
