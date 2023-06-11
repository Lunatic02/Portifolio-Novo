import { SidebarContainer, SidebarIcons } from "./style";
import {AiFillFolderOpen, AiFillSetting, AiOutlineMail, AiOutlineUser} from 'react-icons/ai'
import {BsCodeSlash, BsPencil } from 'react-icons/bs'
import { NavLink } from "react-router-dom";

export function Sidebar(){
  return(
    <SidebarContainer>
      <SidebarIcons>
          <div>
            <ul>
              <li><NavLink to='/Portifolio-Novo/'><AiFillFolderOpen size={30}/></NavLink></li>
              <li><NavLink to='/Portifolio-Novo/projetos'><BsCodeSlash size={30}/></NavLink></li>
              <li><NavLink to='/Portifolio-Novo/sobre-mim'><BsPencil size={30}/></NavLink></li>
              <li><NavLink to='/Portifolio-Novo/contato'><AiOutlineMail size={30}/></NavLink></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><AiOutlineUser size={30}/></li>
              <li><AiFillSetting size={30}/></li>
            </ul>
          </div>
      </SidebarIcons>
    </SidebarContainer>
  )
}