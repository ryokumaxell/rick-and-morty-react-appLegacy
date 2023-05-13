import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../view/Home/Home";
import Characters from "../view/Characters/Characters";
import About from "../view/About/About";
import AuthForm from "../view/AuthForm/AuthForm";
import Detail from "../view/Detail/Detail";
import Error404 from "../view/Error404/Error404";
import Layout from "../components/Layout/Layout";
import User from "../components/User/User";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/User" element={<User/>}/>
        </Route>
      </Routes>
    </>
  );
}
