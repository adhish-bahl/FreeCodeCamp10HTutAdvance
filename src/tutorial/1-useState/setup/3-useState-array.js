import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [details, setDeatils] = useState(data);

  const removeUser = (id) => {
    const newUser = details.filter((person) => person.id !== id);
    setDeatils(newUser);
  }

  return (
    <>
      <h2 style={{marginTop:"60px"}}>useState array example</h2>
      {details.map((detail)=> {
        const {id, name} = detail;
        return (
          <>
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={()=> removeUser(id)}>remove</button>
            </div>
          </>
        );
      })}
      <button style={{marginBottom:"30px"}} className="btn" onClick={()=>setDeatils([])}>Clear All</button>
    </>
  );
};

export default UseStateArray;
