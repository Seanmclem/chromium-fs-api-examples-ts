import React from 'react';
import './App.css';

import {useRoutes} from 'hookrouter';
import { ShowSaveFilePicker } from './pages/ShowSaveFilePicker';
import { ShowOpenFilePicker } from './pages/ShowOpenFilePicker';
import { FourOhFour } from './pages/FourOhFour';
import { HomePage } from './pages/HomePage';
import { ShowDirectoryPicker } from './pages/ShowDirectoryPicker';
import { FileSystemDirectoryHandle } from './pages/FileSystemDirectoryHandle'
import { Layout } from './pages/Layout';

const routes = {
    '/': () => <HomePage />,
    '/showOpenfilepicker': () => <ShowOpenFilePicker />,
    '/showsavefilepicker': () => <ShowSaveFilePicker />,
    '/showDirectoryPicker': () => <ShowDirectoryPicker />,
    '/fileSystemDirectoryHandle': () => <FileSystemDirectoryHandle />
};
	
const App = () => {
    const routeResult = useRoutes(routes);
    
    return <Layout>{routeResult}</Layout> || <FourOhFour />;
}

export default App;
