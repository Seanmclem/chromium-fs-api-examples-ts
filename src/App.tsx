import React from 'react';
import './App.css';

import { ShowSaveFilePicker } from './pages/ShowSaveFilePicker';
import { ShowOpenFilePicker } from './pages/ShowOpenFilePicker';
import { FourOhFour } from './pages/FourOhFour';

import { ShowDirectoryPicker } from './pages/ShowDirectoryPicker';
import { FileExplorer } from './projects/FileExplorer';

import {
    HashRouter,
    Switch,
    Route,
  } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={ShowDirectoryPicker}/>
                    <Route exact path="/file-browser" component={FileExplorer}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App;