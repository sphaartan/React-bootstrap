import React, { useState } from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const SidebarNav = styled.nav`
  /* padding: 16px 24px; */
  /* background: #15171c; */
  background: #fbfbfb;
  min-width: 300px;
  display: flex;
  justify-content: center;
  /* position: absolute; */
  top: 100px;
  left: ${({ sidebar }) => (true ? "50px" : "-100%")};
  transition: 350ms;
  /* z-index: 10; */
  border: 1px solid #d3dce6;
  border-radius: 6px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ sidedataPost }) => {
  const [sidebar, setSidebar] = useState(false);
  /*Set const SideData with attribut sidedataPost 
  by componnent call (SidebarData or Diaporama)*/
  const SideData = sidedataPost;

  return (
    <>
      <Wrapper>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SideData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </Wrapper>
    </>
  );
};

export default Sidebar;
