import React from 'react';
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

const App = () => {
    return (
        <div className="app">
              <ToastProvider
                autoDismiss
                autoDismissTimeout={2750}
                placement="top-right"
            >
                <BrowserRouter>
                    <Switch>
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