import { useState } from "react"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import ProjectList from "./components/projectList/ProjectList"
import Sidebar from "./components/sidebar/Sidebar"
import { projects, websiteType } from "./data/projects"

function App() {
  const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const projectList = projects.filter(s => s.type.includes(category));
  return (
    <>
      <Header onClick={() => setIsMenuShow(!isMenuShow)} />
      <main className="main">
        <Sidebar className={isMenuShow ? "" : "hidden"} defaultValue={category} categories={websiteType} onClick={setCategory} />
        <ProjectList list={projectList} />
      </main>
      <Footer />
    </>
  )
}

export default App
