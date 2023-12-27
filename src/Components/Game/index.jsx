import React, { useState } from "react";
import { Container } from "./style";

const Game = () => {
  const state = useState(0);

  const [name, setName] = useState("name 1");
  const [bntName, setBtnName] = useState("edit");
  //   console.log(state);
  const onClick = () => {
    setBtnName((val) => (bntName === "edit" ? "save" : "edit"));
  };
  const onHendleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Container>
      <div
        style={{
          height: "100px",
          backgroundColor: "gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        {bntName === "edit" ? (
          <h1>{name}</h1>
        ) : (
          <input onChange={onHendleChange} type="text" value={name} />
        )}
        <button onClick={onClick}>{bntName} name</button>
      </div>
      <div></div>
    </Container>
  );
};

export default Game;
