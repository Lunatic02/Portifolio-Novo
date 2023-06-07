import { styled } from "styled-components";

export const ExplorerContainer= styled.div`
  background-color: #1f2428;
  border: 1px solid #161a1d;
  color: #e1e4e8;
  width: 12.5rem;
`

export const ExplorerContainerTitle = styled.div`
  width: 100%;
  font-stretch: condensed;
  letter-spacing: 2px;
  padding: 8px;
`

export const ExplorerContainerPages = styled.div`
  width: 100%;
  padding: 8px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: .8rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  
  label a{
    cursor: pointer;
    color: #e1e4e8;
    text-decoration: none;
    padding: 4px;
  }
  label span{
    cursor: pointer;
  }  
`

export const ExplorerIconsLinks = styled.ul`
  li{
    padding: 0.2rem 1rem;
    display: flex;
    align-items: center;
    list-style: none;
    font-size: .875rem;
  }
  li a{
    color: white;
    text-decoration: none;
    width: 100%;
  }
  li img{
    width: 1.2rem;
    margin-right: 3px;
  }

  li:hover{
    background-color: #24292e;
  }
`