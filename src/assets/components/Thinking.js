import "../css/Thinking.css";
import { useEffect, useRef } from "react";
function Thinking(props) {
  const ArticleRef = useRef();
  useEffect(() => {
    if (props.user.marginright === "Yes") {
      ArticleRef.current.style.margin = "0 2.66666% 0 0";
    }
  }, []);
  return (
    <div className="thinking-container" ref={ArticleRef}>
      <img src={props.user.item1} alt="rating" className="stars" />
      <img src={props.user.item2} alt="maria" className="userimg" />
      <h6 className="username">{props.user.item3}</h6>
      <p className="userthinking">'{props.user.item4}'</p>
    </div>
  );
}
export default Thinking;
