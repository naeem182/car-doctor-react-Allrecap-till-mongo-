import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';
import Authprovider from './Provider/Authprovider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-7xl mx-auto'>
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </React.StrictMode>,
  </div>
)
