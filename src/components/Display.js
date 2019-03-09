import React from "react";

function Display(props) {
  if (props.website) {
    return <p>website</p>;
  } else if (props.app) {
    return <p>mobile</p>;
  } else {
    return <p>Please choose your options</p>;
  }
}

export default Display;
