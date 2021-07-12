import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);

  const setWindowSize = () => {
    setSize(window.innerWidth);
  }
  
  useEffect(()=> {
    window.addEventListener("resize", setWindowSize);
    return () => window.removeEventListener("resize", setWindowSize);
  });

  return(
    <>
      <h2>useEffect cleanup</h2>
      <h2>Window Size:</h2> 
      <h1>{size} PX</h1> 
    </>
    );

};

export default UseEffectCleanup;
