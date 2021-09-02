import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, refillCake } from "../redux";

function NewCakeContainer() {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
      <br />
      <button onClick={() => dispatch(refillCake())}> Refill 10 Cake</button>
    </div>
  );
}

export default NewCakeContainer;
