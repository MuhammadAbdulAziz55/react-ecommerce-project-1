import { AddOutlined, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 70%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: opx 50px;
  margin-top: 5 0px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  &: hover {
    background-color: #7cd9b8;
  }
`;

const ProductShow = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/bWzQ228/Untitled-1.png" alt="" />
        </ImgContainer>
        <InfoContainer>
          <Title>T-Shirt</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, labore
            non possimus cumque repudiandae officiis? Cumque totam asperiores
            fuga nostrum maiores facere deleniti, velit omnis ullam harum vero
            saepe. Distinctio.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <AddOutlined />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductShow;
