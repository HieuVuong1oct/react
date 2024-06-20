import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Test from './test-event';
import Testform from './test-form';
import TestRender from './test-render';
import ListComponent from './test-list';
import TestStateup from './test-stateup';
import ContextComponent from './test-context';
import TestUseState from './test-useState';
import TestuseStateAPI from './test-useStateAPI';
import TestUseEffect from './test-useEffect';
import TestUseContext from './test-useContext';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <hr/>
    <Test />
    <hr/>
    <Testform />
    <hr/>
    <TestRender/>
    <hr/>
    <ListComponent/>
    <hr/>
    <TestStateup/>
    <hr/>
    <ContextComponent/>
    <hr/>
    <TestUseState/>
    <hr/>
    <TestuseStateAPI/>
    <hr/>
    <TestUseEffect/>
    <hr/>
    <TestUseContext/>
  </React.StrictMode>
);