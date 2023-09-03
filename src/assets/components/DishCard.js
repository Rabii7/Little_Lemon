import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import "../css/DishCard.css";
function DishCard({ card }) {
  const ArticleRef = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    Resizing();
    if (width < 768) {
      ArticleRef.current.style.margin = "auto";
    } else if (width >= 768 && card.css === "Yes") {
      ArticleRef.current.style.margin = "0 5%";
    } else {
      ArticleRef.current.style.margin = "0";
    }
  }, [width]);
  function Resizing() {
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });
  }
  // useEffect(() => {
  //   if (card.css === "Yes") {
  //     ArticleRef.current.style.margin = "0 5%";
  //   }
  // }, []);
  return (
    <article className="article-width" ref={ArticleRef}>
      <img src={card.image} alt="greek_salad" className="img-card" />
      <div className="position-relative">
        <span className="dish-title">{card.title}</span>
        <span className="price-absolute">{card.price}</span>
        <p className="dish-description">{card.description}</p>
        <p className="dish-delivery">
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </p>
      </div>
    </article>
  );
}

export default DishCard;
