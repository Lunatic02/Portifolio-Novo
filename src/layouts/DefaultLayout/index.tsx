import { BrowserRouter } from "react-router-dom";
import { Explorer } from "../../Components/Explorer";
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import { LayoutContents } from "./styles";

export function DefaultLayout(){
  return(
    <>
      <BrowserRouter>
          <Header />
        <LayoutContents>
            <Sidebar />
            <Explorer />
        </LayoutContents>    
      </BrowserRouter>
    </>
  )
}