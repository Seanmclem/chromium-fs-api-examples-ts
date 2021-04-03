import React, { useEffect } from "react";
import "./App.css";

import { ToastProvider } from "react-toast-notifications";
import styled, { createGlobalStyle } from "styled-components";

import { ShowDirectoryPicker } from "./pages/ShowDirectoryPicker";
import { FileExplorer } from "./projects/FileExplorer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AstTools } from "./pages/AstTools";
import { FormCreator } from "./pages/FormCreator";

const GlobalStyles = createGlobalStyle`
  html {
    --top-menu-height: 30px;

    --color-panels: white;
    --shadow-panel: 0px 0px 5px 5px #00000021;
    --margins-panel: 10px;
    --radius-panel: 10px;

    --color-backdrop: aliceblue; //aliceblue
  }
`;

const AppContainer = styled.div`
  background-color: var(--color-backdrop);
`;

const App = () => {
  useEffect(() => {
    if ("showOpenFilePicker" in window === false) {
      alert(`Unsupported Browser:
Most tools on this site will require the new "File System Access API".
This API curently has only limited support in Chromium browsers.
It should work in the latest non-mobile versions of Chrome, Edge, and Opera, but nothing else. Other browsers will not work.
More info: https://caniuse.com/native-filesystem-api `);
    }
  }, []);
  return (
    <AppContainer className="app">
      <GlobalStyles />
      <ToastProvider
        autoDismiss
        autoDismissTimeout={2750}
        placement="top-right"
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/form-creator" component={FormCreator} />
            <Route exact path="/ast-tools" component={AstTools} />
            <Route exact path="/some-demo" component={ShowDirectoryPicker} />
            <Route exact path="/" component={FileExplorer} />
          </Switch>
        </BrowserRouter>
      </ToastProvider>
    </AppContainer>
  );
};

export default App;
