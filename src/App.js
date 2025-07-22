import React from 'react';
import Activities from './Components/Activities';
// import Online from './Components/Online';
import Donate from './Components/Donate';
import Footer from './Components/Footer';
import Event from './Components/Event';
import Navbar from './Components/Navbar';
import TopBar from './Components/TopBar';
import Home from './Components/Home';
import Location from './Components/Location';
// import Calculator from './Components/Calculator';
// import Video from './Components/Video';

const App = () => {
  return (
    <div>
        <TopBar />
        <Navbar />
        <Home />
        <Activities />
        {/* <Online />  */}
        <Event />
        {/* <Video /> */}
        <Location />
        <Donate />
        {/* <Calculator /> */}
        <Footer />
    </div>
  )
}

export default App