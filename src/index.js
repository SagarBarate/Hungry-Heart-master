import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const Header =() => {
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' alt="logo"src="data:image/png;base64,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"></img>
      </div>
      <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>

      </div>
    </div>
  )
}

const styleCard ={
  backgroundColor :"#f0f0f0",
}
const RestaurantCard =() =>
{
  return(
    <div className='res-card' style={styleCard}>
      <img 
      className="res-logo" 
      alt='res-logo'
      src="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani-750x750.jpg"/>

      <h3>Meghna foods</h3>
      <h4> Biryani, North Indian, Asian</h4>
      <h4> 4.8 stars</h4>
      <h4>38 mintues</h4>
    </div>
  );
}


const Body =() =>
{
  return(
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard />
        <RestaurantCard />
        
      </div>
    </div>
  );
}

const AppLayout =()=>{
  return <div className='app'>
    <Header/>
    <Body />
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
