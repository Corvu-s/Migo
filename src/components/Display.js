import React from "react";

function Display(props) {
  if (props.website) {
    return (
      <div>
        <p>{props.temp3}</p>
        <p>{props.temp1}</p>
      </div>
    );
  } else if (props.app) {
    return (
      <div>
        <p>{props.temp4}</p>
        <p>{props.temp2}</p>
      </div>
    );
  } else {
    return <p>Please choose your options</p>;
  }
}

export default Display;
