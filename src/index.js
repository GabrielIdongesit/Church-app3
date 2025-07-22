import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, dropbox, send, shield, star} from "../assets";

// export const socialMedia = [

//   {
//     id: "social-media-1",
//     logo: instagram,
//     link: "https://www.instagram.com",
//   },
//   {
//     id: "social-media-2",
//     logo: facebook,
//     link: "https://www.facebook.com",
//   },
//   {
//     id: "social-media-3",
//     logo: twitter,
//     link: "https://www.twitter.com",
//   },
//   {
//     id: "social-media-4",
//     logo: linkedin,
//     link: "https://www.linkedin.com",
//   },
// ];

// export const client = [
//   {
//     id: "client-1",
//     logo: airbnb,
//   },
//   {
//     id: "client-2",
//     logo: binance,
//   },
//   {
//     id: "client-3",
//     logo: coinbase,
//   },
//   {
//     id: "client-4",
//     logo: dropbox,
//   },
// ];