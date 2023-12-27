import styled from "styled-components";
function getSize(size) {
  switch (size) {
    case "small":
      return {
        color: "red",
        fontSize: "18px",
      };
    case "middle":
      return {
        color: "blue",
        fontSize: "22px",
      };
    case "large":
      return {
        color: "green",
        fontSize: "25px",
      };
    default:
      return "20px";
  }
}

export const Button = styled.button`
  ${({ size }) => getSize(size)}
  /* font-size: ${({ size }) => getSize(size)}; */
`;
