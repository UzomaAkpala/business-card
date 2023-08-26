import React from "react";

const Avatar = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.alt} className="avatar" />
      <div className="data">
        <h1>{props.name}</h1>
        <h5>{props.linkedin}</h5>
        <h5>{props.gitHub}</h5>
        <h5>{props.phone}</h5>
      </div>
    </div>
  );
};
export default Avatar;
