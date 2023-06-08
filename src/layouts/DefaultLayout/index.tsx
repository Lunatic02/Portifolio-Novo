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
import { Container, Layout, LayoutChanging, LayoutContents, LayoutFlex } from "./styles";

export function DefaultLayout(){
  return(
    <>
      <BrowserRouter>
          <Container>
            <Header />
          <LayoutContents>
              <Sidebar />
              <Explorer />
              <LayoutChanging>
                <TabBar />
                  <LayoutFlex>
                    <Layout className="layout">
                      
                        <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/projetos" element={<Projects />}/>
                        <Route path="/sobre-mim" element={<About />}/>
                        <Route path="/contato" element={<Contact />}/>
                        </Routes>
                    
                    </Layout>
                  </LayoutFlex>
              </LayoutChanging>
          </LayoutContents> 
              <Footer />  
          </Container>
      </BrowserRouter>
    </>
  )
}