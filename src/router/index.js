import React from 'react';
import { Redirect } from "react-router-dom";


const Menu11 = React.lazy(_ => import("../pages/menu11"));
const Menu12 = React.lazy(_ => import("../pages/menu12"));
const Menu21 = React.lazy(_ => import("../pages/menu21"));
const Menu22 = React.lazy(_ => import("../pages/menu22"));



const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/menu11"/>
    )
  },
  
  {
    path: "/menu11",
    component: Menu11
  },
  {
    path: "/menu12",
    component: Menu12
  },
  {
    path: "/menu21",
    component: Menu21
  },
  {
    path: "/menu22",
    component: Menu22
  },
];

export default routes;
