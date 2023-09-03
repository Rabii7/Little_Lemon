import { useState, useEffect, useRef } from "react";
import {
  Nav,
  NavItem,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from "reactstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(props.item);
  }, [props.item]);

  const toggle = () => setIsOpen(!isOpen);
  const [width, setWidth] = useState(window.innerWidth);
  const containertype = useRef();
  const row = useRef();
  const column = useRef();

  useEffect(() => {
    Resizing();
    width < 992
      ? (containertype.current.className = "container-fluid")
      : (containertype.current.className = "container");
  }, [width]);
  function Resizing() {
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });
  }

  return (
    <>
      <div className="container" ref={containertype}>
        <div className="row" ref={row}>
          <div
            className="col-12 col-lg-11 offset-lg-1 offset-xl-2 col-xl-9"
            ref={column}
          >
            <header>
              <Navbar expand="lg">
                <NavbarBrand href="home">
                  <img
                    src="https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692540420/Logo_r5vvxk.svg"
                    alt="Little Lemon Logo"
                    style={{ width: "175px", height: "auto" }}
                  />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="me-auto align-items" navbar>
                    <NavItem
                      className={`${active === "home" ? " activepage" : ""}`}
                    >
                      <Link to="/home" className="link">
                        Home
                      </Link>
                    </NavItem>
                    <NavItem
                      className={`${active === "about" ? " activepage" : ""}`}
                    >
                      <Link to="/about" className="link">
                        About
                      </Link>
                    </NavItem>
                    <NavItem
                      className={`${active === "menu" ? " activepage" : ""}`}
                    >
                      <Link to="/menu" className="link">
                        Menu
                      </Link>
                    </NavItem>
                    <NavItem
                      className={`${
                        active === "reservations" ? " activepage" : ""
                      }`}
                    >
                      <Link to="/reservations" className="link">
                        Reservations
                      </Link>
                    </NavItem>
                    <NavItem
                      className={`${
                        active === "orderonline" ? " activepage" : ""
                      }`}
                    >
                      <Link to="/orderonline" className="link">
                        Order Online
                      </Link>
                    </NavItem>
                    <NavItem
                      className={`${active === "login" ? " activepage" : ""}`}
                    >
                      <Link to="/login" className="link">
                        Login
                      </Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
