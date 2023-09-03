import Button from "./Button";
import DishCard from "./DishCard";
import "../css/Dishes.css";

function Dishes() {
  return (
    <section className="container mt">
      <div className="row">
        <div className="offset-xl-2 col-xl-10">
          <div className="row">
            <div className="col-6 col-xl-6">
              <h1>This Weeks specials!</h1>
            </div>
            <div className="col-6 col-xl-3 align-self-center text-align-end">
              <Button styling="online-menu" aria-label="On Click">
                Online Menu
              </Button>
            </div>
            <div className="col-xl-3"></div>
          </div>
          <div className="row">
            <div className="col-xl-9 mt1">
              <DishCard
                card={{
                  image:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692843440/greek_salad_2_ohvzo7.jpg",
                  title: "Greek salad",
                  price: "$12.99",
                  description:
                    "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                }}
              />
              <DishCard
                card={{
                  image:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692843494/Bruchetta_1_htbrnx.png",
                  title: "Bruchetta",
                  price: "$ 5.99",
                  description:
                    "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
                  css: "Yes"
                }}
              />
              <DishCard
                card={{
                  image:
                    "https://res.cloudinary.com/dvjmrlfwa/image/upload/v1692843548/lemon_dessert_2_crwe1d.jpg",
                  title: "Lemon Dessert",
                  price: "$ 5.00",
                  description:
                    "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                }}
              />
            </div>
            <div className="col-xl-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dishes;
