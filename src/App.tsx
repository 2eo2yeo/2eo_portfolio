import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/content/Home';
import Copyright from './components/content/Copyright';
import './style.css'

function App() {

    const logoData = {
    img:"images/2eoprofile2.jpg",  
    name:"2EO" 
  }

  return (
    <>
       <Header></Header>
        <Content>
       <Home logo={logoData}/> 
        <Copyright/>
        </Content>
        <Footer></Footer>

    </>
  )
}

export default App
