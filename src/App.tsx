import React from 'react';
import './App.css';

import {useRoutes} from 'hookrouter';
import { ShowSaveFilePicker } from './pages/ShowSaveFilePicker';
import { ShowOpenFilePicker } from './pages/ShowOpenFilePicker';
import { FourOhFour } from './pages/FourOhFour';
import { HomePage } from './pages/HomePage';
import { ShowDirectoryPicker } from './pages/ShowDirectoryPicker';
import { Layout } from './pages/Layout';
import { FileExplorer } from './projects/FileExplorer';

const routes = {
    '/test': () => <ShowDirectoryPicker />,
    '/': () => <FileExplorer />
};
	
const App = () => {
    const routeResult = useRoutes(routes);
    
    return <Layout>{routeResult}</Layout> || <FourOhFour />;
}

export default App;
