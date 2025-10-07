import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Pages/Root.jsx'
import ErrorPage from './component/ErrorPage.jsx'
import Home from './Pages/Home.jsx'
import Applications from './Pages/Applications.jsx'
import AppDetails from './Pages/AppDetails.jsx'



const router = createBrowserRouter([
   {
    path:"/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        loader:()=> fetch('/data.json'),
        path:'/',
        Component:Home,
      },
      {
        path:"/apps",
        loader:()=>fetch('/app.json'),
        Component:Applications,
      },
      {
        path:"/appsDetails/:id",
        loader:()=>fetch('/app.json'),
        Component:AppDetails,
      }
     
    ]
   }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
