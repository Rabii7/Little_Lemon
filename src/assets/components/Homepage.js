import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Dishes from "./Dishes";
import Testimonials from "./Testimonials";
import Description from "./Description";
import Footer from "./Footer";

function Home() {
  // const [width, setWidth] = useState(window.innerWidth);
  // const containertype = useRef();
  // const row = useRef();
  // const column = useRef();

  // useEffect(() => {
  //   Resizing();
  //   width < 992
  //     ? (containertype.current.className = "container-fluid")
  //     : (containertype.current.className = "container");
  // }, [width]);
  // function Resizing() {
  //   window.addEventListener("resize", function () {
  //     setWidth(window.innerWidth);
  //   });

  return (
    <>
      <Header item="home" />

      <div className="bg-introduction">
        <Introduction />
      </div>
      <main>
        <Dishes />
        <div className="bg-testimonials">
          <Testimonials />
        </div>
        <Description />
      </main>
      <div className="mtfooter">
        <Footer />
      </div>
    </>
  );
}

export default Home;
