import React from 'react';
import RouterComponent from "./RouterComponent";
import { routes } from "./routes";
import { generateAppRoutes } from "./Navigation/utils";

const appRoutes = generateAppRoutes(routes);

function App() {
  return (
    <div className="App">
    <RouterComponent  routes={appRoutes} />
    </div>
  )

}

export default App;
