import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 4px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile({ height: "30vh", width: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0
  hight: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  margin-top: 150px;
  ${mobile({ marginBottom: "10px", marginTop: "70px" })}
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItems = ({ item }) => {
  //   console.log(item.title);
  return (
    <Container>
      <Image src={item.img} alt="" />
      <Info>
        <Title> {item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
