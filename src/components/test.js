import React from "react";
const data = [
  {
    default: [],
    portfolio: ["React", "angular", "Vue"],
    ecommerce: ["something ", "shit"],
    webMedia: ["web ", "media"],
    blogs: ["some ", "blog"]
  }
];
function Test(props) {
  if (props.indicator) {
    if (props.tag === "portfolio") {
      return (
        <div>
          {data[0].portfolio.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "ecommerce") {
      return (
        <div>
          {data[0].ecommerce.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "webMedia") {
      return (
        <div>
          {data[0].webMedia.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else if (props.tag === "blogs") {
      return (
        <div>
          {data[0].blogs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {data[0].default.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      );
    }
  } else {
    return <p>Enter Some Values</p>;
  }
}

export default Test;
