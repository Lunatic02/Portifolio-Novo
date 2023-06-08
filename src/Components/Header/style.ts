import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 30px;
  background-color: #1f2428;
  display: flex;
  color: white;
  align-items: center;
  img{
    width: 1rem;
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
 div{
   width: 100%;
   display: flex;
   justify-content: center;
 }
 @media screen and (max-width: 900px){
   
   ul li{
     display: none;
   }
   
 }

`