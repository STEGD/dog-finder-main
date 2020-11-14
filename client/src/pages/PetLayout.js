import React from "react";
import "../PetLayout.css";

export default function PetLayout() {
  return (
    <div className="wrapper-petlayout">
      <div className="grid-contents">
        <div>Image Section</div>
        <div className="pet-info-section">
          <div className="type">Type-Name</div>
          <div className="cost">Cost</div>
          <div className="activity">Activity</div>
          <div className="size">size</div>
          <div className="energy">Energy</div>
        </div>
        <div className="cost-section">
          <div>ann</div>
          <div>fist year</div>
        </div>
        <div className="exp-time-section">
          <div>Owner experience - kids</div>
          <div>time needed - URL info.</div>
        </div>
      </div>
    </div>
  );
}
