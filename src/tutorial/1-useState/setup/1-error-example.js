import React from 'react';

const ErrorExample = () => {

    let title = "Random Title";

    const changeTitle = () => {
        // title = "Hello Friend!";
    };

  return(
      <>
        <h2 style={{marginTop:"60px"}}>useState error example</h2>
        <h2>{title}</h2>
        <button className="btn" onClick={changeTitle}>Change Title</button>
      </>
  );
};

export default ErrorExample;
