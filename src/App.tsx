import React from 'react';
import './App.css';

import {useRoutes} from 'hookrouter';
import { ShowSaveFilePicker } from './pages/ShowSaveFilePicker';
import { ShowOpenFilePicker } from './pages/ShowOpenFilePicker';
import { FourOhFour } from './pages/FourOhFour';
import { HomePage } from './pages/HomePage';

const routes = {
    '/': () => <HomePage />,
    '/showOpenfilepicker': () => <ShowOpenFilePicker />,
    '/showsavefilepicker': () => <ShowSaveFilePicker />,
    // '/products/:id': ({id}) => <ProductDetails id={id} />
};
	
const App = () => {
    const routeResult = useRoutes(routes);
    
    return routeResult || <FourOhFour />;
}

export default App;
