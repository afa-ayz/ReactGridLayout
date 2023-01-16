import React from 'react';
import ReactDOM from 'react-dom/client';
import StaticLayout from './StaticLayout';
import DynamicLayout from './DynamicLayout';

import './inde.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StaticLayout />
        {/* <DynamicLayout /> */}
    </React.StrictMode>
);
