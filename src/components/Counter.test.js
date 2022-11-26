import {fireEvent, render, screen} from '@testing-library/react';
import Counter from "./Counter";

test('renders learn react link', () => {
  render(<Counter />);

  const increaseButton = screen.getByTestId('increase-button');
  const counter = screen.getByTestId('counter');

  expect(counter.textContent).toContain("0");
  fireEvent.click(increaseButton);
  expect(counter.textContent).toContain("1");
});
