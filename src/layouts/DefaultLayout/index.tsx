import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Explorer } from "../../Components/Explorer";
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import { TabBar } from "../../Components/TabBar";
import { LayoutChanging, LayoutContents } from "./styles";

export function DefaultLayout(){
  return(
    <>
      <BrowserRouter>
          <Header />
        <LayoutContents>
            <Sidebar />
            <Explorer />
            <LayoutChanging>
              <TabBar />
              <Routes>
                <Route path="/" element={'oi'}/>
                <Route path="/github" element={'github'}/>
                <Route path="/projetos" element={'projetos'}/>
                <Route path="/sobre-mim" element={'Sobre Mim'}/>
                <Route path="/contato" element={'Contato'}/>
              </Routes>
            </LayoutChanging>
        </LayoutContents> 
        Footer   
      </BrowserRouter>
    </>
  )
}