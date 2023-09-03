import Thinking from "./Thinking";
import "../css/Testimonials.css";

function Testimonials() {
  return (
    <section className="container mttestimonials">
      <div className="row justify-content-center">
        <div className="col-auto testimonials ">
          <h1>Testimonials</h1>
        </div>
      </div>
      <div className="row mrginnertop">
        <div className="offset-xl-2 col-xl-10">
          <div className="row">
            <div className="col-xl-9 mrgbottom">
              <Thinking
                user={{
                  item1:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692910406/426-4268703_star-rating-transparent-background-5-star-rating-transparent_to7sqt.png",
                  item2:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692911670/profile2.9b517ae64c4b6bab8ee8_qxnek9.jpg",
                  item3: "Maria",
                  item4: "Good",
                  marginright: "Yes"
                }}
              />
              <Thinking
                user={{
                  item1:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692910406/426-4268703_star-rating-transparent-background-5-star-rating-transparent_to7sqt.png",
                  item2:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692937012/profile3.368a476e22b04c93c00f_fdko51.jpg",
                  item3: "Ronaldo",
                  item4: "Delicious greek salad",
                  marginright: "Yes"
                }}
              />
              <Thinking
                user={{
                  item1:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692910406/426-4268703_star-rating-transparent-background-5-star-rating-transparent_to7sqt.png",
                  item2:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692936893/profile1.412d62619d46ab20d554_sawotw.jpg",
                  item3: "Dahria",
                  item4: "Awesome place",
                  marginright: "Yes"
                }}
              />
              <Thinking
                user={{
                  item1:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692910406/426-4268703_star-rating-transparent-background-5-star-rating-transparent_to7sqt.png",
                  item2:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692937082/profile2-copy-0.6055557532ec417e5819_i1n55d.jpg",
                  item3: "Christain",
                  item4: "Great service!"
                }}
              />
            </div>
            <div className="col-xl-3"></div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Testimonials;
