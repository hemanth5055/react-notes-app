import React, { useEffect, useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { v4 as uuid } from "uuid";

import Note from "./Note";
import Readmorecont from "./Readmorecont";
import UseLocalstorage from "./useLocalstorage";

function Foreground() {
  const [inpName, setinpName] = useState("");
  const [inpDesc, setinpDesc] = useState("");
  const [Notes, setNotes] = useState([]);
  const [showaddpopup, setshowaddpopup] = useState(false);
  const [showcontpopup, setshowcontpopup] = useState(false);
  const [contIdx, setcontIdx] = useState();
  const a = UseLocalstorage("localnotes", Notes, setNotes);
  const handleaddNotes = () => {
    if (inpName.length > 0 && inpDesc.length > 0) {
      const temp = {
        name: inpName,
        desc: inpDesc,
        id: uuid(),
        heart: false,
        date: String(
          new Date().getDate() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getFullYear()
        ),
      };
      setNotes([...Notes, temp]);
      setinpName("");
      setinpDesc("");
    }
  };
  const inp = useRef();
  const handledeleteNotes = (id) => {
    const temp = Notes.filter((item, index) => {
      return item.id != id;
    });
    setNotes(temp);
  };

  const handlefavourite = (index) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, i) =>
        i === index ? { ...note, heart: !note.heart } : note
      )
    );
  };

  const handlereadmore = (idx) => {
    setshowcontpopup(true);
    setcontIdx(idx);
  };
  useEffect(() => {
    if (showaddpopup) {
      inp.current.focus();
    }
  }, [showaddpopup]);

  return (
    <div className="wholebg absolute z-10 w-full min-h-screen bg-white">
      {showaddpopup ? (
        <div className="absolute w-[50%] rounded-r-[50px] h-screen z-10 bg-[#eeeef5] fixed  flex flex-col p-5 pl-12  gap-5 max-sm:w-[100%] max-sm:rounded-none max-sm:p-4">
          <div className="top w-full flex items-center justify-end px-[5%] ">
            <IoCloseCircleOutline
              size={50}
              className="text-black cursor-pointer"
              onClick={() => setshowaddpopup(false)}
            />
          </div>

          <input
            ref={inp}
            type="text"
            id="name"
            value={inpName}
            onChange={(e) => setinpName(e.target.value)}
            placeholder="Name "
            className="bg-white h-[70px] w-[50%] outline-none px-3 rounded-lg font-mono text-xl
            max-sm:w-[100%] max-sm:text-lg text-gray-800 font-monts  font-medium"
          />
          <textarea
            name="content"
            id="content"
            value={inpDesc}
            onChange={(e) => setinpDesc(e.target.value)}
            className="bg-white h-[65%]  font-monts font-medium outline-none w-[75%] p-3 resize-none rounded-lg font-mono text-xl max-sm:w-[100%] max-sm:text-lg"
            placeholder="Your Note Here..."
          ></textarea>
          <div
            className="submit bg-white font-monts font-medium h-[50px] w-[150px] rounded-lg font-mono text-xl flex justify-center items-center cursor-pointer select-none max-sm:w-[100%]"
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
          Ndate={Notes[contIdx].date}
        ></Readmorecont>
      ) : (
        ""
      )}
      <div className="relative  left-[50%] translate-x-[-50%] flex gap-5 flex-wrap p-5 max-sm:justify-center justify-center bg-white">
        {Notes.map((item, index) => (
          <Note
            key={index}
            findex={index}
            Nid={item.id}
            Notename={item.name}
            Notedesc={item.desc}
            deleteNote={handledeleteNotes}
            readMore={handlereadmore}
            heart={item.heart}
            fav={handlefavourite}
          ></Note>
        ))}

        <div
          className="h-[330px] w-[330px] bg-[#ebecf3] max-sm:h-[265px] max-sm:w-[235px]  rounded-2xl flex justify-center items-center cursor-pointer "
          onClick={() => setshowaddpopup(true)}
        >
          <IoAddCircle size={80} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Foreground;
