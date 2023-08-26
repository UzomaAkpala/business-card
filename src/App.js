import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import Photo from "./Uzoma.jpeg";

function App() {
  return (
    <div className="card">
      <Avatar
        img={Photo}
        name="Uzoma Akpala"
        linkedin={"www.linkedin.com/in/uzoma-akpala-a9b353205/ "}
        gitHub={"github.com/UzomaAkpala"}
        phone={"+2347065909727"}
      />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
