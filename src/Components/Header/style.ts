import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: block;
  width: 100%;
.content{
  background-color: #1f2428;
  display: flex;
  color: white;
  align-items: center;
  height: 30px;
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
}
  height: 30px;
  
 @media screen and (max-width: 900px){
   
  .content ul li{
     display: none;
   }
   
   
 }
 @media screen and (max-width: 690px) {
  width: calc(100vw + 8%);
} 
@media screen and (max-width: 610px) {
  width: calc(100vw + 72px);
}
`