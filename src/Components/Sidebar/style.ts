import { styled } from "styled-components";

export const SidebarContainer = styled.aside`
  width: 4.5rem;
  height: calc(100vh - 30px - 25px);
  background-color: #24292e;
  

  @media screen and (max-width: 690px){
    height: calc(90vh + 15vh + 5vh );
  }
  @media screen and (max-width: 425px){
    height: calc(111vh);
  }
  @media screen and (max-width: 414px){
    height: calc(108vh);
  }
  @media screen and (max-width: 400px){
    height: calc(112vh);
  }
  @media screen and (max-width: 375px){
    height: calc(113vh);
  }
  @media screen and (max-width: 320px){
    height: calc(116vh);
  }
 
` 

export const SidebarIcons = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  ul li{
    padding: 0.5rem 0.2rem;
    color: rgb(106, 115, 125);
    list-style: none;
  }

  ul li:hover{
    color: white;
    cursor: pointer;
  }

  ul li a{
    padding: 10px;
    border: 3px solid transparent;
    color: rgb(106, 115, 125);
    display: flex;
    justify-content: center;
  }

  ul li a:hover{
    color: white;
    transition: .2s;
    background-color: #1f2428;
  }
 
  ul li a.active{
    border-left: 3px solid #f9826c;
    color: white;
    display: flex;
    background-color: #1f2428;
    justify-content: center;
  }
`