import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {

  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((people) => people.id !== id)
    setPeople(newPeople);
  }

  return (
    <>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = () => {

}

export default PropDrilling;
