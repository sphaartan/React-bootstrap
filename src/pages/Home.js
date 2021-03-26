import { React } from "react";
import SidebarAccordian from "../components/SideBar/SidebarAccordion";
import styled from "styled-components";
import ArticleNav from "../components/ArticleNav/Next_Prev/ArticlenNav_NP";
import { dataHome } from "./SidebarData";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 10px;
  background: #f9fafc;
`;
const MainContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 12px;
  text-align: left;
  @media screen and (max-width: 991px) {
    margin-left: 10px;
    grid-column-start: 1;
  }
  @media screen and (max-width: 767px) {
    grid-column-start: 1;
    padding: 7px;
  }
  /* background-color: lightblue; */
`;
const ArticleSection = styled.div`
  hr {
    border: 0;
    border-bottom: 1px solid #d3dce6;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
const ArticleHeading = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  line-height: 54px;
  /* color: #000; */
`;
const ArticleShortDesciption = styled.p`
  color: rgba(37, 38, 94, 0.7);
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 16px;
  color: #444;
`;
const SideBarWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  margin-left: 20px;

  @media screen and (max-width: 991px) {
    display: none;
    margin-left: 0;
    position: absolute;
    height: fit-content;
    background: blue;
    top: 80px;
  }
  @media screen and (max-width: 767px) {
    display: none;
    margin-left: 0;
    position: absolute;
    height: fit-content;
    background: blue;
  }
`;
const AddWrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  background: blue;
`;
const ArticleAbout = styled.div`
  color: #333;
  h3 {
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
  }
  p {
    color: rgba(37, 38, 94, 0.7);
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 16px;
    color: #444;
  }
  code {
    border: 1px solid #d3dce6;
    background-color: #f5f5f5;
    padding: 0 8px;
    border-radius: 4px;
    font-style: normal;
    font-family: "Droid Sans Mono", "Inconsolata", "Menlo", "Consolas",
      "Bitstream Vera Sans Mono", "Courier", monospace;
    display: inline-block;
    line-height: 24px;
    font-size: 14px;
    line-height: 20px;
  }
`;
const ArticleDetail = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <SideBarWrapper>
          <SidebarAccordian sidedataPost={dataHome} />
        </SideBarWrapper>
        <MainContent>
          <ArticleSection>
            <ArticleDetail>
              <ArticleHeading>Home page</ArticleHeading>
              <ArticleShortDesciption>
                Loops are used in programming to repeat a specific block of
                code. In this article, you will learn to create a while loop in
                Python.
              </ArticleShortDesciption>
            </ArticleDetail>
            <hr></hr>
            <ArticleAbout>
              <h2>What is the use of break and continue in Python?</h2>
              <p>
                In Python, <code>break</code> and <code>continue</code>
                statements can alter the flow of a normal loop.
              </p>

              <p>
                Loops iterate over a block of code until the test expression is
                false, but sometimes we wish to terminate the current iteration
                or even the whole loop without checking test expression.
              </p>

              <p>
                The&nbsp;<code>break</code> and <code>continue</code> statements
                are used in these cases.
              </p>

              <hr></hr>
              <h2>Python break statement</h2>

              <p>
                The <code>break</code> statement terminates the loop containing
                it. Control of the program flows to the statement immediately
                after the body of the loop.
              </p>

              <p>
                If the <code>break</code> statement is inside a nested loop
                (loop inside another loop), the <code>break</code> statement
                will terminate the innermost loop.
              </p>
              <hr></hr>
              <h3>Syntax of break</h3>

              <pre>break</pre>
              <hr></hr>
              <h3>Flowchart of break</h3>
            </ArticleAbout>
          </ArticleSection>
          <hr></hr>
          <ArticleNav />
        </MainContent>
        <AddWrapper>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <ins
            class="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4548722974359094"
            data-ad-slot="3183761417"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </AddWrapper>
      </Wrapper>
    </>
  );
}
