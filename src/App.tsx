import React, { useEffect, useState } from 'react';
import axios from 'axios';


import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './pages/Home';
import Copyright from './components/content/Copyright';
import MenuList from './components/header/MenuList';
import SectionWrap from './components/content/SectionWrap';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
// import ProjectList from './components/content/ProjectList';
import './style.css'



function App() {



  const [menuList, setMenuList] = useState([]);
  const [sectionList, setSectionList] = useState<Section[]>([]);

  useEffect(() => {
    Promise.all([
      axios("data/section_list.json"),
      axios("data/menu_list.json")
    ])
      .then(([sectionRes, menuRes]) => {
        setSectionList(sectionRes.data);
        setMenuList(menuRes.data);
      })
      .catch((error) => { console.log(error) });
  }, []);

  interface Section {
    id: string,
    title: string,
    description: string,
    children: ComponentNode[]
  }

  interface ComponentNode {
    component: string;
    props?: Record<string, any>;
    children?: ComponentNode[];
  }


  const componentMap: Record<string, React.ElementType> = {
    Home,
    About,
    Skills,
    Projects
  };

  const renderComponent = (childObj: ComponentNode): React.ReactNode => {
    const Component = componentMap[childObj.component];
    if (!Component) return null;

        return (
      <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
        {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
      </Component>
    );
  }

  const logoData = {
    img: "images/2eoprofile2.jpg",
    name: "2EO"
  }



  return (
    <>
      <Header>
        <MenuList menuList={menuList} />
      </Header>
      <Content>
        <Home logo={logoData} />
        {sectionList && sectionList.map((section) => (

          <SectionWrap
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            {section.children.map((child) => renderComponent(child))}

          </SectionWrap>
        ))}

        <Copyright />
      </Content>
      <Footer>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, et ipsa reiciendis dignissimos ducimus ex cum aperiam odit quisquam voluptatibus exercitationem ipsum omnis, libero nostrum officia eos explicabo dolor atque.</p>
      </Footer>

    </>
  )
}

export default App
