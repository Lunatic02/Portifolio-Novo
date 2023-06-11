import { Link } from "react-router-dom";
import { HomeContainer } from "./style";
import ReactIcon from '../../assets/trace.svg'

export function Home(){
  return (
  <HomeContainer>
    <div className="background">
      <h1>I BUILD</h1>
      <h1>WEBSITES</h1>
    </div>
      <div className="foreground">
        <div className="content">
          <h1 className="name">
              Lucas Torresin
          </h1>
          <h6 className="bio">Full Stack Web Developer</h6>
          <Link to="/Portifolio-Novo/projetos">
              <button className='button'>View Work</button>
            </Link>
            <Link to="/Portifolio-Novo/contato">
              <button className='outlined'>Contact Me</button>
            </Link>
          </div>
          <div className="image">
              <img src={ReactIcon}/>
          </div>
      </div>
  </HomeContainer> )
}