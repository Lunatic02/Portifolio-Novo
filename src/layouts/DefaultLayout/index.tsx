import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Explorer } from "../../Components/Explorer";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Sidebar } from "../../Components/Sidebar";
import { TabBar } from "../../Components/TabBar";
import { About } from "../../pages/about";
import { Contact } from "../../pages/contact";
import { Home } from "../../pages/home";
import { Projects } from "../../pages/projects";
import { Layout, LayoutChanging, LayoutContents, SearchersContainer,} from "./styles";

export function DefaultLayout(){
  return(
    <>
      <BrowserRouter>
        <Header />

          <LayoutContents>
            <SearchersContainer>
              <Sidebar />
              <Explorer />
            </SearchersContainer>
              <LayoutChanging>
                <TabBar />
                    <Layout className="layout">
                      
                        <Routes>
                          <Route path="/Portifolio-Novo/" element={<Home />}/>
                          <Route path="/Portifolio-Novo/projetos" element={<Projects />}/>
                          <Route path="/Portifolio-Novo/sobre-mim" element={<About />}/>
                          <Route path="/Portifolio-Novo/contato" element={<Contact />}/>
                        </Routes>
                    
                    </Layout>
              </LayoutChanging>
          </LayoutContents> 
              <Footer />  
      </BrowserRouter>
    </>
  )
}