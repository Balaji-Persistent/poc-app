import React, { useEffect } from 'react';
import Header from './Header';
import SideNavBar from './SideNavBar';


// header component
let name = "Pasupula Karunakar";
let shortName = name.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')

function HomePage() {
  
  return (
    <div className="App">
     <Header name={name} sname={shortName} />
     <SideNavBar />
    </div>
  );
}
  
export default HomePage;