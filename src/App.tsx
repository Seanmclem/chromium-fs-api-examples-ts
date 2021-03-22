import React, { useEffect } from 'react';
import './App.css';

import { ToastProvider } from 'react-toast-notifications';

// import { ShowSaveFilePicker } from './pages/ShowSaveFilePicker';
// import { ShowOpenFilePicker } from './pages/ShowOpenFilePicker';
// import { FourOhFour } from './pages/FourOhFour';

import { ShowDirectoryPicker } from './pages/ShowDirectoryPicker';
import { FileExplorer } from './projects/FileExplorer';

import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import { AstTools } from './pages/AstTools';
import { FormCreator } from './pages/FormCreator';

const App = () => {
    useEffect(() => {
        if('showOpenFilePicker' in window === false) {
            alert(`Unsupported Browser:
Most tools on this site will require the new "File System Access API".
This API curently has only limited support in Chromium browsers.
It should work in the latest non-mobile versions of Chrome, Edge, and Opera, but nothing else. Other browsers will not work.
More info: https://caniuse.com/native-filesystem-api `)
        }
    }, [])
    return (
        <div className="app">
                <ToastProvider
                    autoDismiss
                    autoDismissTimeout={2750}
                    placement="top-right"
                >
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/form-creator" component={FormCreator}/>
                        <Route exact path="/ast-tools" component={AstTools}/>
                        <Route exact path="/some-demo" component={ShowDirectoryPicker}/>
                        <Route exact path="/" component={FileExplorer}/>
                    </Switch>
                </BrowserRouter>
            </ToastProvider>
        </div>
    )
}

export default App;