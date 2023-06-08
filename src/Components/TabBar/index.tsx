import {NavLink } from "react-router-dom";
import { TabBarContainer } from "./style";
import ReactIcon from '../../assets/react_icon.svg'
import HtmlIcon from '../../assets/html_icon.svg'
import JsIcon from '../../assets/js_icon.svg'
import CssIcon from '../../assets/css_icon.svg'
import MarkDownIcon from '../../assets/markdown_icon.svg'

export function TabBar(){
  return (<>
  <TabBarContainer>
        <NavLink to='/'><img src={ReactIcon}/>home.jsx</NavLink>
        <NavLink to='/sobre-mim'><img src={HtmlIcon}/>about.html</NavLink>
        <NavLink to='/contato'><img src={CssIcon}/>contact.css</NavLink>
        <NavLink to='/projetos'><img src={JsIcon}/>project.js</NavLink>
  </TabBarContainer>
  </>)
}