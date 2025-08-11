import React, { useEffect, useState } from 'react';
import SmoothFollower from '../SmoothFollower/SmoothFollower';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Shared/Footer';

const RootLayout = () => {

    const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();
  }, []);
    return (
        <div>
            <div className="bg-black">
      {!isTouchDevice && <SmoothFollower />}
      <div> <Navbar /></div>
     
      <Outlet />
      <div className='mt-20'>
         <Footer />
      </div>
     
    </div> 
        </div>
    );
};

export default RootLayout;