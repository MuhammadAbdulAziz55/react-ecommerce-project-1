import {
  Facebook,
  Instagram,
  LocationOn,
  MailOutline,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  //   padding-top: 20px;      padding top and bottom work same as margin 20px 0;
  //   padding-bottom: 20px;

  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  // flex-direction: space-between;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Abdul Aziz.</Logo>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, reiciendis!
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Woman Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ "margin-right": "10px" }} /> 29/A Sheker Tek,
          Mohammadpur, Dhaka
        </ContactItem>
        <ContactItem>
          <Phone style={{ "margin-right": "10px" }} /> +8801918935859
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ "margin-right": "10px" }} />{" "}
          abdulazizfrince5@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
      </Right>
    </Container>
  );
};

export default Footer;
