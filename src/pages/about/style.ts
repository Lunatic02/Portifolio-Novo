import styled from "styled-components";

export const AboutContainer = styled.main`
  padding: 2rem;
  background-color: #24292e;
  height: calc(100vh - 6.3rem);
  
  
  
  h2{
    color: #eee;
    font-family: 'JetBrains Mono', monospace;
  }
  h3{
    padding: 2rem;
    color: #eee;
    font-family: 'JetBrains Mono', monospace;
    width: 75%;
  }
  @media screen and (max-width: 690px) {
  h3{
    width: 100%;
    padding: 1rem;
  }
  height: 100vh;
}
@media screen and (max-width: 500px) {
  h2{
    font-size:1.5rem;
  }
  h3{
    font-size: 1rem;
  }
  padding: 1rem;
  height: 100vh;
}
`