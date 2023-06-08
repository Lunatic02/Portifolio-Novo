import styled from "styled-components";

export const TabBarContainer = styled.header`
  display: flex;
  width: 100%;
  background-color: black;
  background-color: #1f2428;
  border-top: 1px solid #161a1d;
  overflow-y: auto;

  a{
    color: white;
    padding: 8px 20px;
    font-weight: 0.9rem;
    display: flex;
    align-items: center;
    height: 100%;
    border: 2px solid transparent;
    border-right: 2px solid #24292e;
    text-decoration: none;
    font-weight: bold;
  }
  a.active{
    background-color: #24292e;
    border-top: 2px solid #f9826c;
  }
  img{
    width: 1.5rem;
    margin: 0px 5px 0px 5px;
  }
  
`