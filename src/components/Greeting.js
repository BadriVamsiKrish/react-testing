import React from 'react'
import { useState } from 'react';
const Greeting = () => {
  const[changetext,setChangetext]=useState(false);
  const changeTexthandler = () => {
    setChangetext(true);
  };
  return (
    <div>
      <h2>hello world!</h2>
      {!changetext && <p>it's good to see you</p>}
      {!changetext && <p>changed!</p>}
      <button onClick={changeTexthandler}>change text!</button>
      {console.log(changetext)}
    </div>
  );
};

export default Greeting