import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/theme.scss';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/error';
import Home from './pages/home';
import CodeOfConduct from './pages/code-of-conduct';
import { Urls } from './helper';
import PrivacyPolicy from './pages/privacy';

//Create router
const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      //Index means this is the default route and so don't need a path
      index: true,
      element: <Home />,
    },
    {
      path: Urls.Code,
      element: <CodeOfConduct />
    },
    {
      path: Urls.Privacy,
      element: <PrivacyPolicy />
    }
  ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
