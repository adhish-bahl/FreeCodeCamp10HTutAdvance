import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <h2>show/hide</h2>
      <button className="btn" onClick={()=> setShow(!show)}>show/hide</button>
      {show && <WindowSize />}
    </>
  );
};

const WindowSize = () => {

  const [size, setSize] = useState(window.innerWidth);

  useEffect(()=>{
    window.addEventListener("resize", ()=> setSize(window.innerWidth))
    // setSize(window.innerWidth);
    return(
      window.removeEventListener("resize", ()=> setSize(window.innerWidth))
    )


  },[])

  return(
    <>
      <h1>Window Size:</h1>
      <h2>{size} PX</h2>
    </>
  )

}

export default ShowHide;
