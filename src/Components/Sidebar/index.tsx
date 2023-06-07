import { SidebarContainer, SidebarIcons } from "./style";
import {AiFillFolderOpen, AiFillGithub, AiFillSetting, AiOutlineMail, AiOutlineUser} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'
import { Link, NavLink } from "react-router-dom";

export function Sidebar(){
  return(
    <SidebarContainer>
      <SidebarIcons>
          <div>
            <ul>
              <li><NavLink to='/'><AiFillFolderOpen size={36}/></NavLink></li>
              <li><NavLink to='/github'><AiFillGithub size={36}/></NavLink></li>
              <li><NavLink to='/projetos'><BsCodeSlash size={36}/></NavLink></li>
              <li><NavLink to='/contato'><AiOutlineMail size={36}/></NavLink></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><AiOutlineUser size={36}/></li>
              <li><AiFillSetting size={36}/></li>
            </ul>
          </div>
      </SidebarIcons>
    </SidebarContainer>
  )
}