import { React } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import joinus from "../assests/join-us.jpg";
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 20px;
  grid-column-gap: 26px;
`;

const Banner = styled.div`
  /* width: 100%; */
  grid-column-start: 1;
  grid-column-end: 6;
`;
const BannerImg = styled.img`
  width: 100%;
`;
const IntroSection = styled.div`
  text-align: center;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  grid-column-start: 1;
  grid-column-end: 6;
`;
const IntroContainer = styled.div`
  padding: 0 16px;
`;
const IntroTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 28px;
  font-size: 20px;
  line-height: 30px;
  color: #25265e;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    line-height: 44px;
  }
`;
const IntroSubTitle = styled.h3`
  color: rgba(37, 38, 94, 0.7);
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  margin-bottom: 28px;
  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
`;

export default function About() {
  return (
    <>
      <Wrapper>
        <Banner>
          <BannerImg
            src={
              "https://s3.amazonaws.com/www.sortcoder.tech/assests/cover-img.png"
            }
          ></BannerImg>
        </Banner>
        <IntroSection>
          <IntroContainer>
            <IntroTitle>
              Our mission is to help users learn programming more easily.
            </IntroTitle>
            <IntroSubTitle>
              We are a small team of passionate developers constantly working to
              create programming resources that's accurate and easier to
              understand.
            </IntroSubTitle>
          </IntroContainer>
        </IntroSection>
        {/* <JoinSection>
          Join The SortCoder Team
          <p>
            We're working hard to create the best educational experience ever,
            and we're always looking for great people to help us accomplish that
            vision.
          </p>
          
        </JoinSection> */}
      </Wrapper>
    </>
  );
}
