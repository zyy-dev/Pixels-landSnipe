import styles from "./Land.module.css";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

export default function Land(prop) {

  return (
    <div className={styles.mainDiv}>
      <div className={styles.parent}>
        <iframe src={`https://play.pixels.xyz/pixels/share/${prop.number}`} className={styles.iframe}></iframe>
        <RxCross2 className={styles.xIcon} color="red" size="45px" onClick={prop.delete}/>
      </div>
      <div className={styles.sectionHolder}>
        <span className={styles.name}>{`Land Number: ${prop.number}`}</span>
        <div className={styles.buttonHolder}>
            <button className={styles.previous} onClick={prop.previous}>Previous</button>
            <button className={styles.next }onClick={prop.next}>Next</button>
        </div>
      </div>
    </div>
  );
}