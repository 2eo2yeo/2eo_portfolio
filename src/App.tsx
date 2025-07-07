import React, { useEffect, useState } from 'react';
import axios from 'axios';


import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/content/Home';
import Copyright from './components/content/Copyright';
import MenuList from './components/header/MenuList';
import SectionWrap from './components/content/SectionWrap';
import './style.css'

function App() {


  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    Promise.all([
      axios("/data/menu_list.json")
    ])
      .then(([menuRes]) => {
        setMenuList(menuRes.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
          <SectionWrap>
              
          </SectionWrap>
        <Copyright />
      </Content>
      <Footer></Footer>

    </>
  )
}

export default App
