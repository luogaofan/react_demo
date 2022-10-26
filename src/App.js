import React, { memo, Suspense } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import routes from "./router";
import store from "./store";
import {
  AppWrapper,
} from './style';

import { HashRouter } from "react-router-dom";
import AppHeader from "@/components/app-header";
import AppMenu from "@/components/app-menu";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <AppWrapper>
          <AppMenu />
          <Suspense fallback={<div></div>}>
            {renderRoutes(routes)}
          </Suspense>
        </AppWrapper>
      </HashRouter>
    </Provider>
  );
});
