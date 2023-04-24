import React, { useContext } from "react";
import { UserContext } from "../App";

export default function AnotherChild() {
  const value = useContext(UserContext); // This is the consumer

  return (
    <div>
      <h2>{`Showing from another child component (3rd layer): ${value}`}</h2>
    </div>
  );
}
