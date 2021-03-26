import React, { Component } from "react";
import styled from "styled-components";
let data = [
  { name: "John" },
  { name: "Kitty" },
  { name: "Ji" },
  { name: "Mattis" }
];
const ArticleNav = styled.div`
  /* display: flex;
  justify-content: space-between; */
  padding: 0 32px;
`;
const ArticleNavPre = styled.div`
  min-width: 150px;
  padding: 16px 25px;
  border-radius: 5px;
  display: ${(props) => (props.visibile ? "block" : "none")};
  cursor: pointer;
  float: left;
  &:hover {
    background: black;
    color: white;
  }
  h3,
  h6 {
    margin: 0;
  }
`;
const ArticleNavNext = styled.div`
  min-width: 150px;
  padding: 16px 25px;
  border-radius: 5px;
  display: ${(props) => (props.visibile ? "block" : "none")};
  cursor: pointer;
  float: right;
  &:hover {
    background: black;
    color: white;
  }
  h3,
  h6 {
    margin: 0;
  }
`;
class ArticleNav_NP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      visibile_Next: true,
      visibile_Pre: true
    };
  }

  tooglePre(e) {
    let index = this.state.index - 1;
    console.log(`Pre: ${index}`);
    let visibile_Pre = true;
    let visibile_Next = true;
    if (index <= 0) {
      e.preventDefault();
      index = 0;
      visibile_Pre = false;
      visibile_Next = true;
    }
    this.setState({
      index: index,
      visibile_Pre: visibile_Pre,
      visibile_Next: visibile_Next
    });
  }

  toogleNext(e) {
    let index = this.state.index + 1;
    console.log(`Next: ${index}`);
    let visibile_Next = true;
    let visibile_Pre = true;
    if (index === data.length - 1) {
      e.preventDefault();
      index = data.length - 1;
      visibile_Next = false;
      visibile_Pre = true;
    }
    this.setState({
      index: index,
      visibile_Next: visibile_Next,
      visibile_Pre: visibile_Pre
    });
  }
  render() {
    return (
      <>
        <ArticleNav>
          <ArticleNavPre
            onClick={this.tooglePre.bind(this)}
            visibile={this.state.visibile_Pre}
          >
            <h6>Previous</h6>
            <h3>Previous</h3>
          </ArticleNavPre>
          <ArticleNavNext
            onClick={this.toogleNext.bind(this)}
            visibile={this.state.visibile_Next}
          >
            <h6>Next</h6>
            <h3>Next</h3>
          </ArticleNavNext>
        </ArticleNav>
      </>
    );
  }
}

export default ArticleNav_NP;
