import React, { useState } from "react";
import "./header.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import logo from "";
import Hamburger from "hamburger-react";
import Slider from "../../components/Slider/Slider";
import DropDown from "../../components/DropDown";
const Wrapper = styled.div`
  position: relative;
  /* padding-top: 32px;
  padding-bottom: 32px; */
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  box-shadow: 0 2px 4px rgb(3 27 78 / 10%);
`;
const HeaderWrapper = styled.header`
  display: flex;
  max-width: 1268px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const BrandLink = styled(Link)`
  position: relative;
  float: left;
  line-height: 1;
`;
const LogoImg = styled.img`
  display: inline-block;
  width: auto;
  height: 20px;
`;

const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Nav = styled.nav`
  position: relative;
  float: right;
  height: 100%;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  height: 100%;
`;
const List = styled.li`
  /* margin-right: 32px; */
  margin-bottom: 0;
  /* padding: 8px 16px; */
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 40px 8px 16px;
  a {
    text-decoration: none;
    color: #000;
    font-size: 15px;
    font-weight: 530;
  }
  & a:hover {
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

  &:hover {
    box-shadow: 0 10px 30px 0 rgb(15 10 77 / 7%);
  }
  /********************************
  Hidden for screen with > 991px
  **********************************/
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const SliderWrapper = styled.div`
  height: 0px;
  width: 100%;
  top: 0;
  left: auto;
  position: relative;
  z-index: 1;
`;

const Space = styled.div`
  width: 28px;
`;

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <HeaderWrapper>
        <BrandLink to="/">
          <LogoImg
            src={
              "https://s3.amazonaws.com/www.sortcoder.tech/assests/Sortcoder.svg"
            }
          ></LogoImg>
        </BrandLink>
        <WrapperRight>
          <Nav>
            <NavList>
              <List>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </List>
              <List>
                <Link to="/about">About</Link>
              </List>
              <List>
                <Link to="/diaporama">Diaporama</Link>
              </List>
              <List className="DropDown_btn">
                <Link>Example</Link>
                <div className="DropDown_content">
                  <DropDown />
                </div>
              </List>
            </NavList>
          </Nav>
          <ButtonWrapper>
            <Button className="primary">Log in</Button>
          </ButtonWrapper>
          <Space></Space>

          <div className="HamburgerWrapper">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </WrapperRight>
      </HeaderWrapper>
      <SliderWrapper open={isOpen}>
        <Slider open={isOpen} />
      </SliderWrapper>
    </Wrapper>
  );
}
