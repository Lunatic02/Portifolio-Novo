import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 1.875rem;
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
   width: 60%;
   display: flex;
   justify-content: center;
 }
 @media screen and (max-width: 900px){
   
   ul li{
     display: none;
   }
   div{
     width: 100%;
   }
 }

`