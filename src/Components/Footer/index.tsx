import { FooterContainer } from "./style";
import {AiOutlineFork} from 'react-icons/ai'
import { BsExclamationTriangle } from "react-icons/bs";
import {MdOutlineDangerous} from "react-icons/md"


export function Footer(){
  return (
    <FooterContainer>
      <footer className="bottomBar">
      <div className="container">
        <AiOutlineFork />
        <a
          href="https://github.com/Lunatic02/Portifolio-Novo"
          target="_blank"
          rel="noreferrer noopener"
          className="section"
        >
          <p>main</p>
        </a>
        <div className="section">
          <MdOutlineDangerous />
          <p className="errorText">0</p>&nbsp;&nbsp;
          <BsExclamationTriangle />
          <p>0</p>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <p>Powered by React.js</p>
        </div>
        <div className="section">
          <p>Prettier</p>
        </div>
        <div className="section">
        </div>
      </div>
    </footer>
    </FooterContainer>
  )
}