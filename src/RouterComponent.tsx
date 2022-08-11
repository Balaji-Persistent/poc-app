import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BreadcrumbsText from "./Navigation/BreadcrumbsText";
import { routesPath } from "./constants"

interface Props  {
  routes: routesPath[];
};
const RouterComponent = ({routes} : Props) => (
  <BrowserRouter>
    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={<BreadcrumbsText route={route} />} />
      ))}
      </Routes>
  </BrowserRouter>
);

export default RouterComponent;