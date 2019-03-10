import React from "react";
const data = [
  {
    default: [],
    portfolio: ["React", "angular", "Vue"],
    portfolioLink: [
      "https://reactjs.org/docs/hello-world.html",
      "https://angular.io/",
      "https://vuejs.org/"
    ],
    ecommerce: [
      "Google marketing platform ",
      "Drupal Commerce",
      "or Spree Commerce"
    ],
    ecommerceLink: [
      "https://support.google.com/analytics/answer/9031231?hl=en",
      "https://drupalcommerce.org/",
      "https://spreecommerce.org/"
    ],
    webMedia: ["Logic Monitor ", "Datadog", "ConnectWise"],
    webMediaLinks: [
      "https://www.logicmonitor.com/?utm_medium=paid-search&utm_source=google&utm_term=na&utm_content=na&utm_campaign=2019-Paid_Search_Google-AW_Brand_LogicMonitor&gclid=CjwKCAiAiJPkBRAuEiwAEDXZZW6QJXqRGOaoPqp1iLozPta5TFJlIJXFooPjWFGu0QYUDQ07fjbh4BoC4IYQAvD_BwE",
      "https://www.datadoghq.com/",
      "https://info.connectwise.com/manage/lmof/sem/demo?source=LND-PdSch-Google-Brand-NA-19Q1-Mng&utm_source=google&utm_medium=pdsch&utm_term=%2Bconnectwise&loc=na&sc_camp=D437B9D59BCD44B5865B893EC4918979&gclid=CjwKCAiAiJPkBRAuEiwAEDXZZbVVA_lOKE-yAtVwIO50gtToaCh3vX1_4FpSLuJpj3JxKuSO-lGKJxoC4lYQAvD_BwE"
    ],
    blogs: ["Blogger ", "WordPress"],
    blogLinks: [
      "https://www.blogger.com/about/?r=1-null_user",
      "https://wordpress.com/create/?currency=CAD&utm_source=adwords&utm_medium=cpc&keyword=%20wordpress&creative=327325302908&campaignid=647897994&adgroupid=52795498939&matchtype=b&device=c&network=g&&sgmt=gb&utm_source=adwords&utm_campaign=Google_WPcom_Search_Brand_Desktop_CA_en&utm_medium=cpc&keyword=%20wordpress&creative=327325302908&campaignid=647897994&adgroupid=52795498939&matchtype=b&device=c&network=g&targetid=kwd-18708123504&locationid=9060196&gclid=CjwKCAiAiJPkBRAuEiwAEDXZZecwQe596k6p-tHcsbIy88a2eq7QBGhLDApzbq_sitvtJZzwtEcmOhoCEZ4QAvD_BwE"
    ],
    //
    game: ["game maker studio", "construct", "unity"],
    gameLinks: [
      "https://www.yoyogames.com/gamemaker",
      "https://www.scirra.com/",
      "https://unity3d.com/"
    ],
    hardware: ["Python", "Matlab", "Java"],
    hardwareLinks: [
      "https://www.python.org/",
      "https://www.mathworks.com/products/matlab.html",
      "https://docs.oracle.com/javase/7/docs/api/"
    ],
    appData: ["Tray.io", "Ataccama"],
    appDataLinks: [
      "https://tray.io/lp/get/demo-multi?utm_campaign=API_Search_Beta&utm_source=Google&utm_medium=ppc&utm_term=%2Bapi%20%2Bapp&gclid=CjwKCAiAiJPkBRAuEiwAEDXZZSsRYUopJv1InYZtGMMZl-cKAoCvjU3zFPwcxpBAQSvYaBy_g3zB-RoCELMQAvD_BwE",
      "https://www.ataccama.com/product/big-data-processing-and-data-integration/?gclid=CjwKCAiAiJPkBRAuEiwAEDXZZZ1REIASoTwyWqiEH3QLp5Dh-62SXp7gkh4xMyk-pjDh8Akb14_4nBoCETcQAvD_BwE"
    ],
    comms: ["android studio", "Swift"]
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
          {data[0].portfolioLink.map((item, index) => (
            <a href={item}>Reseource {index + 1}</a>
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
          {data[0].ecommerceLink.map((item, index) => (
            <a href={item}>Reseource {index + 1}</a>
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
          {data[0].webMediaLinks.map((item, index) => (
            <a href={item}>Reseource {index + 1}</a>
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
          {data[0].blogLinks.map((item, index) => (
            <a href={item}>Reseource {index + 1}</a>
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
          {data[0].gameLinks.map((item, index) => (
            <a href={item}>Reseource {index + 1}</a>
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
          {data[0].hardwareLinks.map((item, index) => (
            <a href={item}>Reseource {index + 1}</a>
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
          {data[0].appDataLinks.map((item, index) => (
            <a href={item}>Reseource {index + 1}</a>
          ))}
        </div>
      );
    } else if (props.tag === "comms") {
      return (
        <div>
          <p>To build a general purpose app try look these rsources</p>

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
