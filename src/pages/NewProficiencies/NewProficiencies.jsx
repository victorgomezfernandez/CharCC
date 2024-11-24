import React from "react";
import "./NewProficiencies.css";
import NewGoTo from "../../components/new_go_to/NewGoTo";
import MenuBar from "../../components/menu_bar/MenuBar";
import { NEXT, PREVIOUS } from "../../helpers/utility_icons";
import Checkbox from "antd/es/checkbox/Checkbox";
import skill_proficiencies from "../../helpers/skill_proficiencies";

function NewProficiencies() {
  return (
    <>
      <div className="new_proficiencies_container">
        <div className="new_proficiencies_title">
          <span>PROFICIENCIES</span>
        </div>
        <div className="new_proficiencies_checkboxes">
          {skill_proficiencies.map((s) => (
            <Checkbox style={{ transform: "scale(1.8)" }}><span className="checkbox_span"><img className="checkbox_img" src={s.icon} alt="" />{s.name}</span></Checkbox>
          ))}
        </div>
        <a href="/new_2" className="previous_new">
          <img src={PREVIOUS} alt="" />
        </a>
        <a href="/new_4" className="next_new">
          <img src={NEXT} alt="" />
        </a>
        <NewGoTo />
        <MenuBar selectedButton={"NEW"} />
      </div>
    </>
  );
}

export default NewProficiencies;
