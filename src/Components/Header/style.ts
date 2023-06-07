import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 1.875rem;
  background-color: #1f2428;
  display: flex;
  color: white;
  img{
    width: 1.5rem;
    margin: 7px;
  }

  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }

  ul li{
    font-size: 1rem;
    list-style: none;
    padding: 8px;
    cursor: pointer;
  }
`