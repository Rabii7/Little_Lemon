import { Link } from "react-router-dom";
import Button from "./Button";
import "../css/Button.css";
import "../css/Introduction.css";
function Introduction() {
  return (
    <div className="container">
      <div className="row p-introdution">
        <div className="offset-xl-2 col-xl-10">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-3">
              <h1 className="title">Little Lemon </h1>
              <h3 className="sub-title">Chicago</h3>
              <p className="description">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <Button styling="reserve-button" aria-label="On Click">
                <Link to="/reservations" className="link1">
                  Reserve a Table
                </Link>
              </Button>
            </div>
            <div className="col-12 col-lg-8 col-xl-6">
              <div className="p-relative">
                <div className="p-absolute">
                  <img
                    src="https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692823730/restauranfood_ojq2el.jpg"
                    alt="restaurantfood"
                    className="img-restaurant-food"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
