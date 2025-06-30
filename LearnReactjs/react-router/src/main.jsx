import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <div>Login page</div>
  },
  {
    path: "/register",
    element: <div>Register page</div>
  },
  {
    path: "/users",
    element: <div>User page</div>
  },
  {
    path: "/products",
    element: <div>Product page</div>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </StrictMode>,

)
