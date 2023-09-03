import "../css/Description.css";
function Description() {
  return (
    <section className="container mtdescription">
      <div className="row">
        <div className="offset-xl-2 col-xl-10">
          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                <div className="col-lg-6 col-xl-6">
                  <h1 className="titledescrption">Little Lemon</h1>
                  <h3 className="subtitledescription">Chicago</h3>
                  <p className="lldescription">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
                <div className="col-lg-6 col-xl-6">
                  <div className="positio-relative">
                    <div className="position-absolute">
                      <img
                        src="https://res.cloudinary.com/dvjmrlfwa/image/upload/v1693014365/restaurant_zhgl62.jpg"
                        alt="little_lemon"
                        className="img"
                      />
                    </div>
                    <div className="pos-absolute">
                      <img
                        src="https://res.cloudinary.com/dvjmrlfwa/image/upload/v1693004815/Mario_and_Adrian_b_hmvfkp.jpg"
                        alt="mario_adrian"
                        className="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
