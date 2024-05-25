import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import "./css/Land.css"

export default function Land(prop) {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    return null; // Render nothing if clicked
  }

  return (
    <div className="mainDiv">
      <div className="parent">
        <iframe src={`https://play.pixels.xyz/pixels/share/${prop.number}`} className="iframe"></iframe>
        <RxCross2 className="xIcon" color="red" size="45px" onClick={() => setClicked(true)} />
      </div>
      <div className="sectionHolder">
        <span className="name">{`Land Number: ${prop.number}`}</span>
        <div className="buttonHolder">

        </div>
      </div>
    </div>
  );
}