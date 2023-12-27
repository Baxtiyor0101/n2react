import React from "react";
import { Button } from "./style";
const Test = () => {
  let style1 = {
    color: "yellow",
  };
  let style2 = {
    margin: "10px",
  };
  return (
    <div>
      <Button style={{ ...style1, ...style2 }} size="small">
        login 11
      </Button>
      <Button size="middle">login</Button>
      <Button size="large">login</Button>
    </div>
  );
};
export default Test;
