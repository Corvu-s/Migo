import React from "react";

function Display(props) {
  if (props.website) {
    return (
      <div>
        <p>{props.temp2}</p>
        <p>{props.temp1}</p>
        <p>{props.temp3}</p>
      </div>
    );
  } else {
    return <p>Please choose your options</p>;
  }
}

export default Display;
