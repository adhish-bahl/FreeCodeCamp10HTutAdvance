import React, { useState } from 'react';

const UseStateObject = () => {

  const [details, setDetails] = useState({ name: "Peter", age: 25, message: "Random Message"})

  const changeMessage = () => {
    // setDetails("Hello Guys!");    // Do not work
    // setDetails({message: "Hello Guys!"});    // Replaces message and delete name and age
    setDetails({... details, message: "Hello Friend"});    // spread operator    // Works perfectly
  }

  return (
    <>
      <h2>useState object example</h2>
      <h3>{details.name}</h3>
      <h3>{details.age}</h3>
      <h4>{details.message}</h4>
      <button className="btn" onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
