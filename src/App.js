
import Home from './components/home';
import HomeNav from './components/HomeNav';
import FooterPart from './components/FooterPart';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Testing from './components/home/Testing';
//import Switch from "react-bootstrap/esm/Switch"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/"
        element ={<Home/>}
        />
      <Route path="/testing" element = {<Testing/>}/>
      
      </Routes>
    
    </BrowserRouter>
    </>
    
    
  );
}

export default App;
