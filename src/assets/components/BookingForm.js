import { useState, useEffect, useRef } from "react";
function BookingForm(props) {
  const [daTe, setDaTe] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [occasion, setOccasion] = useState("");
  const RefButton = useRef();

  useEffect(() => {
    if (daTe === "" || time === "" || number === "" || occasion === "") {
      console.log(daTe, time, number, occasion);
      RefButton.current.setAttribute("disabled", "");
    } else if (daTe !== "" && time !== "" && (number !== occasion) !== "") {
      console.log(daTe, time, number, occasion);
      RefButton.current.removeAttribute("disabled");
    }
  }, [daTe, time, number, occasion]);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm();
  };
  const handleDateTime = (date) => {
    setDaTe(date);
    props.dispatch(date);
  };

  return (
    <section className="container mtdescription">
      <div className="row">
        <div className="offset-xl-2 col-xl-10">
          <div className="row">
            <div className="col-xl-9">
              <div className="row">
                <div className="col-xl-6">
                  <form
                    style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="res-date">Choose date *</label>
                    <input
                      type="date"
                      id="res-date"
                      value={daTe}
                      onChange={(e) => handleDateTime(e.target.value)}
                      required
                    />
                    <label htmlFor="res-time">Choose time *</label>
                    <select
                      id="res-time "
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="">Select Time</option>
                      {props.availableTimes.map((item) => {
                        return <option key={item}> {item} </option>;
                      })}
                    </select>
                    <label htmlFor="guests">Number of guests *</label>
                    <input
                      type="number"
                      placeholder="1"
                      min="1"
                      max="10"
                      id="guests"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                    <label htmlFor="occasion">Occasion *</label>
                    <select
                      id="occasion"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                    </select>
                    <input
                      type="submit"
                      value="Make Your reservation"
                      ref={RefButton}
                      aria-label="On Click"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
