import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./portfolio.scss";
import {
  reactPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  content2Portfolio,
} from "../../data";
import { Height } from "@material-ui/icons";

export default function Potfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Projet React" },
    { id: "web", title: "Web design" },
    { id: "mobile", title: "MERN App" },
    { id: "design", title: "HTML-CSS-JS" },
    { id: "content", title: "HTML-CSS " },
    { id: "content2", title: "WordPress" },
  ];

  useEffect(() => {
    switch (selected) {
      case "feautured":
        setData(reactPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      case "content2":
        setData(content2Portfolio);
        break;
      default:
        setData(reactPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />

            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
