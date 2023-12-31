import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./component/Home.jsx"
import About from "./component/About.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      
      },
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  

  </React.StrictMode>,
)
