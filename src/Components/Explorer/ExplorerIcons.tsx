import { Link } from "react-router-dom"
import { ExplorerIconsLinks} from "./style"
import ReactIcon from '../../assets/react_icon.svg'
import HtmlIcon from '../../assets/html_icon.svg'
import JsIcon from '../../assets/js_icon.svg'
import CssIcon from '../../assets/css_icon.svg'

export function ExplorerIcons({toggleIcons}:any){
  if(toggleIcons){
    return(
      <ExplorerIconsLinks>
        <li><img src={ReactIcon}/><Link to='/Portifolio-Novo/'>home.jsx</Link></li>
        <li><img src={HtmlIcon}/><Link to='/Portifolio-Novo/sobre-mim'>about.html</Link></li>
        <li><img src={CssIcon}/><Link to='/Portifolio-Novo/contato'>contact.css</Link></li>
        <li><img src={JsIcon}/><Link to='/Portifolio-Novo/projetos'>project.js</Link></li>
      </ExplorerIconsLinks>
    )
  } else{
    return(
      <div></div>
    )
  }
}