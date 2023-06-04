import React from "react";

import styles from "./styles.module.css";

const Boxc = ({
  name,
  link,
  imgs,
  Project = false,
  Desc = false,
  Dat = false,
  homep = false,
}) => {
  return (
    <div className={styles.bcontainer}>
      <img src={imgs} alt=""></img>
      <h4>Name: {name}</h4>
      <h4>Link: {link}</h4>
      {Project && <h4>Project: {Project}</h4>}
      {Desc && <h4>Description: {Desc}</h4>}
      {Dat && <h4>Updated at: {Dat}</h4>}
      {homep && (
        <h4>
          Homepage: <a href={homep}>{homep}</a>
        </h4>
      )}
    </div>
  );
};

export default Boxc;
