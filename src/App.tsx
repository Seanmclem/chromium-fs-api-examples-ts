import React from 'react';
import './App.css';

import { ShowSaveFilePicker } from './pages/ShowSaveFilePicker';
import { ShowOpenFilePicker } from './pages/ShowOpenFilePicker';
import { FourOhFour } from './pages/FourOhFour';

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
            <BrowserRouter>
                <Switch>
                    <Route exact path="/ast-tools" component={AstTools}/>
                    <Route exact path="/some-demo" component={ShowDirectoryPicker}/>
                    <Route exact path="/" component={FileExplorer}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;