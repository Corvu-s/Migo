import React from "react";
const data = [
  {
    default: [],
    portfolio: ["React", "angular", "Vue"],
    ecommerce: ["something ", "shit"],
    webMedia: ["web ", "media"],
    blogs: ["some ", "blog"],
    //
    game: ["a", "game"],
    hardware: ["some", "hardware"],
    appData: ["some", "app data"],
    comms: ["some", "comms"]
  }
];
function Test(props) {
  if (props.pass === "website") {
    if (props.tag === "portfolio") {
      return (
        <div>
          <p>To build a portfolio website try look these rsources</p>
          {data[0].portfolio.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "ecommerce") {
      return (
        <div>
          <p>To build a e-commerce website try look these rsources</p>

          {data[0].ecommerce.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "webMedia") {
      return (
        <div>
          <p>To build a social media website try look these rsources</p>

          {data[0].webMedia.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "blogs") {
      return (
        <div>
          <p>To build a blogging website try look these rsources</p>

          {data[0].blogs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } /////////////////
  } else if (props.pass === "app") {
    if (props.tag === "game") {
      return (
        <div>
          <p>To build a game try look these rsources</p>

          {data[0].game.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "hardware") {
      return (
        <div>
          <p>To build a hardware interaction app try look these rsources</p>

          {data[0].hardware.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "appData") {
      return (
        <div>
          <p>To build a data driven app try look these rsources</p>

          {data[0].appData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "comms") {
      return (
        <div>
          <p>To build a communication app try look these rsources</p>

          {data[0].comms.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    }
  } else {
    return <p className=".weather__error">Give it some values</p>;
  }
}

export default Test;
