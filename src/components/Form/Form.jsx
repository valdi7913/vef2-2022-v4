import React from "react";

export function Form({ handleChange, children }) {
  return (
    <form styles={{ padding: "1rem" }} onChange={handleChange} className="Form">
      {children}
    </form>
  );
}
