import styled from "styled-components";

export const ProjectsContainer = styled.main`
  background-color: #24292e;
  height: calc(100vh - 6.3rem);
  padding: 2rem;
  color: #eee;
  font-family: 'JetBrains Mono', monospace;

  .container {
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
  
.card {
  background: #1f2428;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  cursor: pointer;
}
.card:hover {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
}

.content {
  padding: 1rem;
  border-radius: 0 0 20px 20px;
}

.content p {
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0 1rem;
}

.tags span {
  margin: 0.5rem 0.5rem 0 0;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-size: 0.75rem;
  transition: all 0.2s;
}

.cta {
  display: flex;
  gap: 1rem;
}

.underline {
  padding: 0.2rem 0;
  font-size: 0.9rem;
  letter-spacing: 0;
  cursor: pointer;
  color: white;
  text-decoration: none;
  background-image: linear-gradient(
    120deg,
    #f9826c 100%,
    #f9826c 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
}

.underline:hover {
  background-size: 100% 88%;
}
img{
  border-radius: 12px;
}
`
 