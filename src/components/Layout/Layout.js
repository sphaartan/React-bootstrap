import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Wrapper = styled.div`
  display: block;
  position: relative !important;
`;
const Main = styled.main`
  display: grid;
  /* margin-top: 100px; */
  /* position: static; */
  /* overflow: hidden; */
  /* z-index: -1; */
  padding-top: 20px;
  /* background-color: blueviolet; */
`;

/*function layout, call by route/PrimaryLayoutRoute
with component -> children */
export default function Layout({ children, ...rest }) {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
}
