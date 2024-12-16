import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root element
root.render(<App />); // Render the app into the root



serviceWorker.unregister();
