import { useEffect, useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

function Navmenu(props) {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(props.item);
  }, [props.item]);

  return (
    <Nav className="me-auto align-items-center" navbar>
      <NavItem className={`${active === "home" ? " activepage" : ""}`}>
        <Link to="/home" className="link">
          Home
        </Link>
      </NavItem>
      <NavItem className={`${active === "about" ? " activepage" : ""}`}>
        <Link to="/about" className="link">
          About
        </Link>
      </NavItem>
      <NavItem className={`${active === "menu" ? " activepage" : ""}`}>
        <Link to="/menu" className="link">
          Menu
        </Link>
      </NavItem>
      <NavItem className={`${active === "reservations" ? " activepage" : ""}`}>
        <Link to="/reservations" className="link">
          Reservations
        </Link>
      </NavItem>
      <NavItem className={`${active === "orderonline" ? " activepage" : ""}`}>
        <Link to="/orderonline" className="link">
          Order Online
        </Link>
      </NavItem>
      <NavItem className={`${active === "login" ? " activepage" : ""}`}>
        <Link to="/login" className="link">
          Login
        </Link>
      </NavItem>
    </Nav>
  );
}

export default Navmenu;
