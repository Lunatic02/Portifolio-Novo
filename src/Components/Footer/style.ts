import styled from "styled-components";

export const FooterContainer = styled.footer`
 
  .bottomBar{
    background: #24292e;
    border-top: 1px solid #1b1f23;
    height: 25px;
    display: flex;
    font-size: 0.8rem;
    padding: 0 0.5rem;
    color: #eee;
    display: flex;
    justify-content: space-between;
    
    
  }
  .bottomBar a {
  color: white;
  text-decoration: none;
}
.container {
  display: flex;
  align-items: center;
}
.section {
  display: flex;
  margin-right: 0.5rem;
  height: 24px;
  align-items: center;
  padding: 0 0.2rem;
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;
}
.section:hover {
  background: #4f4f52;
}
@media screen and (max-width: 690px) {
  width: calc(100vw + 8%);
  .bottomBar {
    margin: 0 auto;
   }
}
@media screen and (max-width: 610px) {
  width: calc(100vw + 72px);
  .bottomBar {
    margin: 0 auto;
   }
}
`