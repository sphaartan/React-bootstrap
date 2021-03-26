import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background-color: black;
`;
const FooterWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-column-gap: 24px;
  grid-template-rows: auto;
  grid-row-gap: 16px;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;
const LogoWrapper = styled.div`
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
const Logo = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
`;
const LogoCopyright = styled.div`
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #b6b5c9;
`;
const LogoImg = styled.img`
  display: inline-block;
  width: auto;
  height: 20px;
  margin-right: 12px;
`;

const SocialIconWrapper = styled.div``;
const SocialIcon = styled.a`
  margin-right: 20px;
  opacity: 0.45;

  &:hover {
    opacity: 1;
  }
`;
const SocialIconImg = styled.img`
  width: 24px;
  height: 24px;
`;
const LinksWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  /* align-items: center; */
  text-align: left;
  justify-content: start;

  &.Footer__link__first {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-end: 2;
    grid-row-start: 1;
  }
  &.Footer__link__second {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-end: 2;
    grid-row-start: 1;
  }
  @media screen and (max-width: 767px) {
    align-items: center;
    justify-content: start;
    &.Footer__link__first {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    }
    &.Footer__link__second {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
    }
    &.Footer__link__third {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
`;
const FooterTitle = styled.div`
  margin-bottom: 10px;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
`;
const FooterLink = styled.a`
  /* color: #fff; */

  font-weight: 400;
  margin-bottom: 4px;
  color: #696969;
  line-height: 1.67;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #b6b5c9;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e0e0e;
  height: 40px;
  grid-column-start: 1;
  grid-column-end: 5;
  width: 100%;
  color: #888;
  font-size: 13px;
  transition: color 0.2s ease;
  &:hover {
    color: white;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <FooterWrapper>
        <LogoWrapper>
          <Logo>
            <LogoImg
              className="LogoImage__color"
              src={
                "https://s3.amazonaws.com/www.sortcoder.tech/assests/Sortcoder-white.svg"
              }
            ></LogoImg>
            <LogoCopyright>© StartHub</LogoCopyright>
          </Logo>
          <SocialIconWrapper>
            <SocialIcon
              href="https://www.youtube.com/channel/UClxpXUYmmvmTqpsRrYYa3AA"
              target="_blank"
            >
              <SocialIconImg
                src="https://assets-global.website-files.com/5e6abaf0cdbc583d71b220d6/5e6abaf0cdbc586d93b2212e_24-youtube.svg"
                alt="Webflow"
              ></SocialIconImg>
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/intent/tweet?button_hashtag=sortcoder&ref_src=twsrc%5Etfw"
              target="_blank"
            >
              <SocialIconImg
                src="https://assets-global.website-files.com/5e6abaf0cdbc583d71b220d6/5e6abaf0cdbc581c99b22126_24-twitter.svg"
                alt="Webflow"
              ></SocialIconImg>
            </SocialIcon>
            <SocialIcon
              href="https://webflow.com/discover/popular#recent"
              target="_blank"
            >
              <SocialIconImg
                src="https://assets-global.website-files.com/5e6abaf0cdbc583d71b220d6/5e6abaf0cdbc58e7dbb2213c_24-fb.svg"
                alt="Webflow"
              ></SocialIconImg>
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/sortcoder/?igshid=1jlepepnfd8ik"
              target="_blank"
            >
              <SocialIconImg
                src="https://assets-global.website-files.com/5e6abaf0cdbc583d71b220d6/5e6abaf0cdbc589019b2213d_24-insta.svg"
                alt="Webflow"
              ></SocialIconImg>
            </SocialIcon>
          </SocialIconWrapper>
        </LogoWrapper>
        <LinksWrapper className="Footer__link__first">
          <FooterTitle>Learn</FooterTitle>
          <FooterLink>Alogrithms</FooterLink>
          <FooterLink>Languages</FooterLink>
          <FooterLink>Data Structures</FooterLink>
          <FooterLink>Web Development</FooterLink>
        </LinksWrapper>
        <LinksWrapper className="Footer__link__second">
          <FooterTitle>Company</FooterTitle>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>Help Center</FooterLink>
        </LinksWrapper>
        <LinksWrapper className="Footer__link__third">
          <FooterTitle>Extras</FooterTitle>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Road Map</FooterLink>
          <FooterLink>Feed Back!</FooterLink>
        </LinksWrapper>
      </FooterWrapper>
      <FooterBottom>© 2020 Sortcoder, Inc. All rights reserved.</FooterBottom>
    </Wrapper>
  );
}
