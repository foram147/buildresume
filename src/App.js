
  import Home from './components/home';
  import HomeNav from './components/HomeNav';
  import FooterPart from './components/FooterPart';
  import { BrowserRouter,Routes, Route} from "react-router-dom";
  import Testing from './components/home/Testing';
  import Login from './components/home/Login';
  import FunLogin from './components/home/Funlogin';
  //import Switch from "react-bootstrap/esm/Switch"
  import {useNavigate} from "react-router-dom"
  function App() {
     return (

      <>

      <BrowserRouter>
        <Routes>
        <Route path="/"
          element ={<Home/>}
          />
          <Route path='/login' element={<Login navigation={navigation}/>}/>
        <Route path="/profile" render={(props)=>(<>
          <Testing {...props}/>
        </>)} />
        
        </Routes>
      
      </BrowserRouter>
      </>
      
      
    );
  }

  export default App;
