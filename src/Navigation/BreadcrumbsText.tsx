import React from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";
import { routesPath } from "../constants"
import { lazy, Suspense } from 'react';



interface Props  {
  route: routesPath;
};

function Breadcrumbs ({ route }: Props) {
  const MyComponent = lazy(() => import(`../${route.component}`));
  return (
    <>
      <nav className="breadcrumbs">
        {pathTo(route).map((crumb, index, breadcrumbs) => (
          <div key={index} className="item">
            {index < breadcrumbs.length - 1 && (
              <NavLink to={crumb.path}>{crumb.label}</NavLink>
            )}
            {index === breadcrumbs.length - 1 && crumb.label !="Home" && crumb.label}
          </div>
        ))}
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </>
  )
};

export default Breadcrumbs;