import { Link } from "react-router-dom"
import { ExplorerIconsLinks} from "./style"
import ReactIcon from '../../assets/react_icon.svg'
import HtmlIcon from '../../assets/html_icon.svg'
import JsIcon from '../../assets/js_icon.svg'
import CssIcon from '../../assets/css_icon.svg'
import MarkDownIcon from '../../assets/markdown_icon.svg'

export function ExplorerIcons({toggleIcons}:any){
  if(toggleIcons){
    return(
      <ExplorerIconsLinks>
        <li><img src={ReactIcon}/><Link to='/'>home.jsx</Link></li>
        <li><img src={HtmlIcon}/><Link to='/sobre-mim'>about.html</Link></li>
        <li><img src={CssIcon}/><Link to='/contato'>contact.css</Link></li>
        <li><img src={JsIcon}/><Link to='/projetos'>project.js</Link></li>
        <li><img src={MarkDownIcon}/><Link to='/github'>github.md</Link></li>
      </ExplorerIconsLinks>
    )
  } else{
    return(
      <div></div>
    )
  }
}