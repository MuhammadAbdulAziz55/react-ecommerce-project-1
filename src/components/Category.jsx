import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;
