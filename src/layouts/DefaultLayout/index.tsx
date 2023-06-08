import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Explorer } from "../../Components/Explorer";
import { Header } from "../../Components/Header";
import { Sidebar } from "../../Components/Sidebar";
import { TabBar } from "../../Components/TabBar";
import { About } from "../../pages/about";
import { Contact } from "../../pages/contact";
import { Home } from "../../pages/home";
import { Projects } from "../../pages/projects";
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
                <Route path="/" element={<Home />}/>
                <Route path="/github" element={'github'}/>
                <Route path="/projetos" element={<Projects />}/>
                <Route path="/sobre-mim" element={<About />}/>
                <Route path="/contato" element={<Contact />}/>
              </Routes>
            </LayoutChanging>
        </LayoutContents> 
        Footer   
      </BrowserRouter>
    </>
  )
}