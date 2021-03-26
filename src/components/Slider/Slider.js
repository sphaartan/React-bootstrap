import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  height: 400px;
  display: block;
  position: fixed;
  background-color: #fff;
  width: auto;
  left: 0;
  right: 0;
  padding-top: 30px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  /* transition: transform 0.3 ease-in-out; */
  transition: transform 600ms cubic-bezier(0.53, 1, 0.55, 1.01) 0s;
  @media screen and (max-width: 991px) {
    width: 100vw;
    padding-top: 20px;
    padding-right: 24px;
    padding-left: 24px;
  }
`;
const SliderWrapper = styled.nav``;
const SliderList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SliderLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  @media screen and (max-width: 991px) {
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: white;
    text-align: left;
  }
  &:hover {
    color: #4e67eb;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.a.attrs((props) => {})`
  padding: 12px 30px;
  font-size: 16px;
  line-height: 18px;

  &.primary {
    border-radius: 2px;
    background-color: rgba(23, 92, 255, 0.1);
    -webkit-transition: background-color 350ms ease,
      -webkit-transform 350ms ease;
    transition: background-color 350ms ease, -webkit-transform 350ms ease;
    transition: transform 350ms ease, background-color 350ms ease;
    transition: transform 350ms ease, background-color 350ms ease,
      -webkit-transform 350ms ease;
    color: #4e67eb;
    line-height: 20px;
    font-weight: 700;
    text-align: center;
  }
  &.secondry {
    border-radius: 2px;
    background-color: #175cff;
    -webkit-transition: background-color 350ms ease,
      -webkit-transform 350ms ease;
    transition: background-color 350ms ease, -webkit-transform 350ms ease;
    transition: transform 350ms ease, background-color 350ms ease;
    transition: transform 350ms ease, background-color 350ms ease,
      -webkit-transform 350ms ease;
    color: #fff;
    line-height: 20px;
    font-weight: 700;
    text-align: center;
  }
`;
const Space = styled.div`
  width: 28px;
`;
export default function Slider(props) {
  return (
    <Wrapper open={props.open}>
      <SliderWrapper>
        <SliderList>
          Slider.js
          <SliderLink to="/">Home</SliderLink>
          <SliderLink to="/about">About</SliderLink>
          <SliderLink to="/diaporama">Diaporama</SliderLink>
        </SliderList>
        <ButtonWrapper>
          <Button className="primary">Log in</Button>
          <Space></Space>
          <Button className="secondry">Sign Up</Button>
        </ButtonWrapper>
      </SliderWrapper>
    </Wrapper>
  );
}
