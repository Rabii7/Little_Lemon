import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";
import App from "../../../App";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
test("Initialize/Update Times", () => {
  render(<App />);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = [];
  // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
});
test("Form Validation", () => {
  render(<BookingForm />);
  const res_date = screen.getByTestId("res-date");
  const res_time = screen.getByTestId("res-time");
  const guests = screen.getByTestId("guests");
  const occasion = screen.getByTestId("occasion");
  expect(res_date).toHaveAttribute("required", "");
  expect(res_time).toHaveAttribute("required", "");
  expect(guests).toHaveAttribute("required", "");
  expect(occasion).toHaveAttribute("required", "");
  fireEvent.click(reserveButton);

  const testTime = [];
  // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
});
