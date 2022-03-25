import { EventForm } from "../components/EventForm/EventForm.jsx";
import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { AuthenticationContext } from "../components/AuthContext/AuthContext.jsx";

function renderWithContext(event, isLoggedIn = false) {
  const registered = [1];
  const addToRegistrations = (id) => registered.push(id);
  render(
    <AuthenticationContext.Provider
      value={{ registered, isLoggedIn, addToRegistrations }}
    >
      {event}
    </AuthenticationContext.Provider>
  );
}

describe("EventForm display tests", () => {
  test("Not logged in, not registered", async () => {
    renderWithContext(<EventForm id={2} />, false);
    expect(
      await screen.findByText("Skráðu þig inn til að skrá þig á viðburð")
    ).toBeInTheDocument();
  });

  test("Logged in, not registered", async () => {
    renderWithContext(<EventForm id={2} />, true);
    expect(await screen.findByText("Skrá mig")).toBeInTheDocument();
    expect(await screen.findByText("Athugasemd")).toBeInTheDocument();
  });

  test("Logged in, registered", async () => {
    renderWithContext(<EventForm id={1} />, true);
    expect(
      await screen.findByText("þú hefur verið skráð/ur á viðburðinn!")
    ).toBeInTheDocument();
    expect(await screen.findByText("Afskrá mig")).toBeInTheDocument();
  });
});
