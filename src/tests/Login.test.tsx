import { fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {it, expect} from 'vitest';
import Login from '../pages/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import UserDetails from '../pages/UserDetails/UserDetails';


beforeEach(() => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
})

const getEmailandPasswordFields = () => {
  const emailInput: HTMLInputElement = screen.getByRole("textbox");
  const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Password");
  const showPasswordButton: HTMLSpanElement = screen.getByText("SHOW");
  const loginButton: HTMLButtonElement = screen.getByRole("button");

  return {
    emailInput,
    passwordInput,
    showPasswordButton,
    loginButton
  }
}



// Testing that the form fields are empty
it("Input should be initially empty", () => {

  const {emailInput, passwordInput} = getEmailandPasswordFields();

  expect(emailInput).toHaveValue("");
  expect(passwordInput).toHaveValue("");  
})

// Testing the show password button
it("should toggle password", async() => {
  const {passwordInput, showPasswordButton} = getEmailandPasswordFields();
  
  await userEvent.type(passwordInput, "Cripple");
  await userEvent.click(showPasswordButton);

  expect(passwordInput.type).toBe("text");  
})

// Testing the Login Button
it("Login renders the Dashboard ",  () => {
  const {loginButton} = getEmailandPasswordFields();

  const { asFragment } = render(<UserDetails/>) 

  fireEvent.click(loginButton);

  expect (asFragment()).toMatchSnapshot();
});

