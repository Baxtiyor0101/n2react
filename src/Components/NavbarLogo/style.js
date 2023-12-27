import styled, { css } from "styled-components";

const Common = css`
  color: gray;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

Container.Img = styled.img`
  width: 400px;
`;

const Button = styled.button`
  ${Common}
  width: 100px;
  height: 60px;
  background-color: lightblue;
  border-radius: 5px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
  cursor: pointer;
`;
const Button2 = styled(Button)`
  width: 200px;
`;
const H1 = styled.h1`
  color: ${({ color }) => (color ? color : "red")};
  font-size: 25px;
`;

export { Container, Button, Button2, H1 };
