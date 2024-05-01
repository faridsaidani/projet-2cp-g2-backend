import React from "react";

import MyComponent from "./overview/Mycomponent";
import Asidebar from "./overview/Aside";
import Therapistist from "./overview/Cards";

const Overview = () => {
  return (
    <div>
    
      <MyComponent />

      <Asidebar />

      <Therapistist />
    </div>
  );
};

export default Overview;
