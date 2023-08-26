import React from "react";

const SkillList = () => {
  return (
    <div className="skill-list ">
      <div className="skill front-end">
        <br />
        <br />

        <h3>Front-end:</h3>
        <p>HTML5, CSS3, JavaScript (ES6+), React, Redux</p>
      </div>

      <br />
      <div className="skill back-end">
        <h3>Back-end:</h3>
        <p> Node.js, Express.js, MongoDB, Mongoose </p>
      </div>

      <br />
      <div className="skill tools">
        <h3>Tools:</h3>
        <p>
          {" "}
          Git, GitHub, Visual Studio Code Data Analysis: R (Basic proficiency)
        </p>
      </div>
    </div>
  );
};
export default SkillList;
