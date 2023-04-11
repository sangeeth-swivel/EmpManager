import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavButton from "../components/atoms/Button/TextButton/NavButton"

describe("Nav button", () => {
  //test with passing props
  test("Nav button should be renderd with the given props", () => {
    const { getByText } = render(<NavButton text="Add Employee" />);
    expect(getByText("Add Employee")).toBeInTheDocument();
  });

  //test with passing function
  test("Nav button shoul call the function once clicked", () => {
    const func = jest.fn();
    const { getByText } = render(
      <NavButton text="List View" onClick={func} />
    );
    const btn = getByText("List View");
    fireEvent.click(btn);
    expect(func).toBeCalled();
  });
});
