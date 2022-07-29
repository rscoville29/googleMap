import React from 'react';
import {Provider} from 'react-redux';
import store from '../client/store';
import '../public/styles.css'
import MapHome from '../client/components/mapPage';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
  <Provider store={store}>
    <MapHome />
     </Provider>
);