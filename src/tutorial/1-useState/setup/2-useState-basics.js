import React from 'react';

const ErrorExample = () => {

    let title = "Random Title";
    const [titleText, setTitleText] = React.useState(title);

    const changeTitle = () => {
        // title = "Hello Friend!";
        if(titleText === "Random Title")
            setTitleText("Hello Friends!");
        else if(titleText === "Hello Friends!")
            setTitleText("Random Title");
    }

  return(
      <>
        <h2 style={{marginTop:"60px"}}>useState error example</h2>
        {/* <h2>{title}</h2> */}
        <h2>{titleText}</h2>
        <button className="btn" onClick={changeTitle}>Change Title</button>
      </>
  );
};

export default ErrorExample;
