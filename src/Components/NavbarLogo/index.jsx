import React, { useEffect } from "react";
import { Button, Button2, Container, H1 } from "./style";
import testimg from "../../assets/logo.svg";

const Navbar = () => {
  useEffect(
    () => {
      //Mount (componrnt ishga tushganda ishlaydi)
      return () => {
        //Unmount (componentdan chiqilganda ishlaydi)
      };
    },
    [] /* (faqat bir marta ishlaydi) */
  );

  return (
    <Container>
      <Container>
        <H1 color="blue">logo</H1>
        <H1 color="green">about</H1>
        <H1>contact</H1>
        <H1>test</H1>
        <H1>FAQ</H1>
        <Button>SignIn</Button>
        <Button2>SignIn</Button2>
      </Container>
      <Container>
        <Container.Img src={testimg} />
      </Container>
    </Container>
  );
};

export default Navbar;
