import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/dialogs/:id" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
