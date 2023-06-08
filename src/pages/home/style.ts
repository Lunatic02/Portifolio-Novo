import styled from "styled-components";

export const HomeContainer = styled.main`

  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #24292e;
  height: calc(100vh - 6.3rem);
  flex-direction: column;
  position: relative;
  padding: 2rem;


  .background{
    font-size: 5rem;
    font-family: 'Montserrat';
    line-height: 1.1;
    color: rgba(56,58,61,0.35);
    position: absolute;
    z-index: 1;

    flex: 1;
  }
  @media screen and (max-width: 1200px){
    .background h1{
      display: none;
    }
  }
  

  .foreground {
  z-index: 2;
  display: flex;
  color: #f9826c;
  justify-content: space-between;
  align-items: center;

  }
  
  .name{
    color: #eee;
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .content {
  font-family: 'JetBrains Mono', monospace;
  flex: 1;
  overflow-y: auto;
}

  .bio {
  width: max-content;
  color: #eee;
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  position: relative;
}

.bio::before,
.bio::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.bio::before {
  background: #24292e;
  animation: typewriter 2.5s steps(24) 500ms forwards;
}

.bio::after {
  margin-left: 0.4rem;
  width: 0.125em;
  background: #f9826c;
  animation: typewriter 2.5s steps(24) 500ms forwards,
    blink 750ms steps(24) infinite;
}
.image{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2;
}

.image img {
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
    height: 50vh;
}
@media screen and (max-width: 1300px) {
  .image img{
    height: 30vh;
  }
}
@media screen and (max-width: 1000px) {
  .image img{
    display: none;
  }
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}

@keyframes typewriter {
  to {
    left: 100%;
  }
}
@keyframes blink {
  to {
    background: transparent;
  }
}
.button {
  background: #f9826c;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  margin-right: 1.5rem;
  color: #eee;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.outlined {
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  color: #eee;
  border: 2px solid #f9826c;
  background: transparent;
  cursor: pointer;
}

.button:hover,
.outlined:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
`