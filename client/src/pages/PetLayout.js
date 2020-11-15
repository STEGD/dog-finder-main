import React from "react";
import {useLocation} from "react-router-dom";
import "../PetLayout.css";

export default function PetLayout(props) {
  let data = useLocation();

  // prints the data and props info
  // console.log(data)
  // console.log(props)

  return (

    <div className="wrapper-petlayout">
      <div className="grid-contents">
        <div><img src = {data.state.imgURL} alt = {data.state.name}/></div>
        <div className="pet-info-section">
          <div className="type">Type: {data.state.type} - Name: {data.state.name}</div>
          <div className="cost">Cost: {data.state.buyCost}</div>
          <div className="activity">Activity: {data.state.activityLevel}</div>
          <div className="size">Size: {data.state.size}</div>
  <div className="energy">Energy: {data.state.energyNeeded}</div>
        </div>
        <div className="cost-section">
  <div>Annual Cost: {data.state.annualCost}</div>
  <div>First Year Cost: {data.state.firstYearCost}</div>
        </div>
        <div className="exp-time-section">
  <div>Owner Experience: {data.state.ownerExp} - Young Kid Ok? {data.state.youngKidOk  === true ? "Yes" : "No"} - Old Kid Ok? {data.state.oldKidOk === true ? "Yes" : "No"}</div>
          <div>Time Needed: {data.state.timeNeeded} - URL info [maybe]</div>
        </div>
      </div>
    </div>
  );
}
