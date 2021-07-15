import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <h2>useRef</h2>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" ref={refContainer} />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
