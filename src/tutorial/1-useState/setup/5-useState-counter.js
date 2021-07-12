import React, { useState } from 'react';

const UseStateCounter = () => {
  return (
    <>
      <h2>useState counter example</h2>
      <h2 style={{marginTop:"60px"}}>Regular Counter</h2>
      <h1>0</h1>
      <button className="btn">Decrease</button>
      <button className="btn">Reset</button>
      <button className="btn">Increase</button>
      <h2 style={{marginTop:"60px"}}>Regular Counter</h2>
      <h1>0</h1>
      <button className="btn" style={{marginBottom:"60px"}}>Increase Later</button>
    </>
    );
};

export default UseStateCounter;
