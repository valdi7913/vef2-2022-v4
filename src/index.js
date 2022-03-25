import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login/Login.jsx";
import { Event } from "./pages/Event/Event.jsx";
import { Events } from "./pages/Events/Events.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import AuthContext from "./components/AuthContext/AuthContext.jsx";

const root = document.getElementById("root");

ReactDOM.render(
  <AuthContext>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </App>
  </AuthContext>,
  root
);

reportWebVitals();
