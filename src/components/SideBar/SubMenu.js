import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 13px 15px;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  border-bottom: 1px solid #f1f1f1;
  transition: all 180ms ease-in-out;
  &:hover {
    background: rgba(23, 92, 255, 0.1);
    border-left: 4px solid #175cff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 50px;
  padding-left: 3rem;
  display: flex;
  font-weight: 500;
  align-items: center;
  text-decoration: none;
  color: #3f3f3f;
  font-size: 18px;
  border-bottom: 1px solid #f1f1f1;
  /* transform: translate3d(31px, 23px, 0px); */
  transition: transform 400ms ease-in-out;

  &:hover {
    background: rgba(23, 92, 255, 0.9);
    cursor: pointer;
    color: white;
    border-radius: 10px;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
