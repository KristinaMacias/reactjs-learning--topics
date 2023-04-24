import React, { useContext } from "react";
import { UserContext } from "../App";
import Child from "../components/Child";

export default function User() {

  const value = useContext(UserContext); // This is the consumer 

  return (
    <div>
      <h1>{`Showing from User component: ${value}`}</h1>
      <Child />
    </div>
  );
}
