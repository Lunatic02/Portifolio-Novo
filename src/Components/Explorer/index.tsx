import { useState } from "react";
import { ExplorerIcons } from "./ExplorerIcons";
import { ExplorerContainer, ExplorerContainerPages, ExplorerContainerTitle } from "./style";
import { NavLink } from "react-router-dom";

export function Explorer(){
  const [toggleIcons, setToggleIcons] = useState(true)
  
  
  return(
    <ExplorerContainer className="container">
      <ExplorerContainerTitle>
        EXPLORER
      </ExplorerContainerTitle>
      <ExplorerContainerPages>
          <label onClick={()=>{setToggleIcons(!toggleIcons)}}>
            <span>{!toggleIcons ? '>' : '∨'}</span><NavLink to='#'>Portfolio</NavLink>
          </label>
      </ExplorerContainerPages>
      <ExplorerIcons toggleIcons={toggleIcons}/>
    </ExplorerContainer>
  )
}