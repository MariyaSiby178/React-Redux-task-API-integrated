import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import RegisteredDetails from "./Components/RegisteredDetails/RegisteredDetails";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/form" element={<RegistrationForm />} />
        <Route path="/form/:id" element={<RegistrationForm />} />
        <Route path="/table" element={<RegisteredDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
