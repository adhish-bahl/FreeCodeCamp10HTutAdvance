import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [details, setDeatils] = useState(data);

  return (
    <>
      <h2 style={{marginTop:"60px"}}>useState array example</h2>
      {details.map((detail)=> {
        const {id, name} = detail;
        return (
          <>
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button>remove</button>
            </div>
          </>
        );
      })}
      <button className="btn">Clear All</button>
    </>
  );
};

export default UseStateArray;
