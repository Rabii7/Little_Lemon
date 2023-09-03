import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
function Reservations(props) {
  const navigate = useNavigate();
  function submitForm() {
    if (props.submitForm()) {
      navigate("/confirmedbooking");
    }
  }
  return (
    <>
      <Header item="reservations" />
      <main>
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={submitForm}
        />
      </main>
      <div className="mtfooter">
        <Footer />
      </div>
    </>
  );
}

export default Reservations;
