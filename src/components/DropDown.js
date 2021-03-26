import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  width: 400px;
  padding: 10px;
  box-shadow: 0 10px 30px 0 rgb(15 10 77 / 15%);
  position: absolute;
  top: 80px;
  right: 0;

  /* visibility: hidden; */
`;
const DropDownLink = styled.a`
  display: flex;
  background-color: #fff;
  padding: 16px;
  text-align: left;
  &:hover {
    background-color: #f5f8fa;
  }
`;
const MenuIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(23, 92, 255, 0.1);
  height: 40px;
  width: 40px;

  img {
    width: 24px;
    height: 24px;
  }
`;
const MenuTitle = styled.div`
  font-weight: 600;
`;
const MenuSubtext = styled.div`
  color: #b6b5c9;
  font-size: 14px;
  line-height: 20px;
`;

export default function DropDown() {
  return (
    <Wrapper>
      <DropDownLink>
        <MenuIcon>
          <img
            src="https://assets.website-files.com/5ff3163b7f93f706b2b6cea9/5ff354ed713500839f48f4ba_file.svg"
            loading="eager"
            alt=""
            class="menu-icon-img"
          ></img>
        </MenuIcon>
        <div>
          <MenuTitle>Landing Page 1</MenuTitle>
          <MenuSubtext>This is some text inside of a div block</MenuSubtext>
        </div>
      </DropDownLink>
      <DropDownLink>
        <MenuIcon>
          <img
            src="https://assets.website-files.com/5ff3163b7f93f706b2b6cea9/5ff354ed713500839f48f4ba_file.svg"
            loading="eager"
            alt=""
            class="menu-icon-img"
          ></img>
        </MenuIcon>
        <div>
          <MenuTitle>Landing Page 2</MenuTitle>
          <MenuSubtext>This is some text inside of a div block</MenuSubtext>
        </div>
      </DropDownLink>
      <DropDownLink>
        <MenuIcon>
          <img
            src="https://assets.website-files.com/5ff3163b7f93f706b2b6cea9/5ff354ed713500839f48f4ba_file.svg"
            loading="eager"
            alt=""
            class="menu-icon-img"
          ></img>
        </MenuIcon>
        <div>
          <MenuTitle>Landing Page 3</MenuTitle>
          <MenuSubtext>This is some text inside of a div block</MenuSubtext>
        </div>
      </DropDownLink>
      <DropDownLink>
        <MenuIcon>
          <img
            src="https://assets.website-files.com/5ff3163b7f93f706b2b6cea9/5ff354ed713500839f48f4ba_file.svg"
            loading="eager"
            alt=""
            class="menu-icon-img"
          ></img>
        </MenuIcon>
        <div>
          <MenuTitle>Landing Page 4</MenuTitle>
          <MenuSubtext>This is some text inside of a div block</MenuSubtext>
        </div>
      </DropDownLink>
      <DropDownLink>
        <MenuIcon>
          <img
            src="https://assets.website-files.com/5ff3163b7f93f706b2b6cea9/5ff354ed713500839f48f4ba_file.svg"
            loading="eager"
            alt=""
            class="menu-icon-img"
          ></img>
        </MenuIcon>
        <div>
          <MenuTitle>Landing Page 5</MenuTitle>
          <MenuSubtext>This is some text inside of a div block</MenuSubtext>
        </div>
      </DropDownLink>
    </Wrapper>
  );
}
