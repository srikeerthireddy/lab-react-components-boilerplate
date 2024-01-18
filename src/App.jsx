import './App.css';
import lake from "./image/lake.JPG";
// import GallaryFooter from './components/GallaryFooter';
import Header from './components/HeaderSection/Header.jsx';
import Body from './components/BodySection/Body.jsx';
import Footer from './components/FooterSection/GallaryFooter.jsx';
import imageData from './components/Data/DataComponents.jsx';



function App() {
  return (
    <div>
      <Header/>
      <Body data={imageData}/>
      <Footer/>

      </div>
  )
}

export default App;
