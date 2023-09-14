import {render, screen} from '@testing-library/react';
import {it, expect} from 'vitest';
import App from '../App';


it("Should render a form", () => {
  render(<App />);

  const form: HTMLFormElement = screen.getByTitle("form");
  expect(form).toBeInTheDocument();
})


