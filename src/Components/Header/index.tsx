import { HeaderContainer } from "./style";

import vscodeIcon from '../../assets/vscode_icon.svg'

export function Header(){
  return(
    <HeaderContainer>
      <img src={vscodeIcon} alt="" />
      <ul>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Go</li>
        <li>Run</li>
        <li>Terminal</li>
        <li>Help</li>
      </ul>
    </HeaderContainer>
  )
}