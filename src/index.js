import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import './index.css';
import RestaurantMenu from './components/RestaurantMenu';


const AppLayout =()=>{
  return <div className='app'>
    <Header/>
    <Outlet />
  </div>
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/Home",
        element:<Body />,
      },
      {
        path:"/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path:"/contact",
        element: <Contact />,
    
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />,
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
