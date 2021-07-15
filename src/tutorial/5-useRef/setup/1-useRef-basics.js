import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  return (
    <>
      <h2>useRef</h2>
      <form className='form'>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
