import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import ProductPage from './pages/product.jsx';
import ViteApp from './components/layout/viteapp.jsx';
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ViteApp />
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/products",
        element: <ProductPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </StrictMode>,

)
