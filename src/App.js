
  import Home from './components/home';
  import { BrowserRouter,Routes, Route} from "react-router-dom";
  import Testing from './components/home/Testing';
  import Login from './components/home/Login';
  //import Default from "./components/home/Funlogin"
  import MakeCV from './components/home/MakeCV';
  import Profile from './components/home/Profile';
  import Experience from './components/home/Experience';

  
  function App() {
     return (

      <>

      <BrowserRouter>
        <Routes>
        <Route path="/"
          element ={<Home/>}
          />
          <Route path='/login' element={<Login/>}/>
        <Route path="/profile/:id" element={<Testing/>} />
        <Route path='/experience/:id' element={<Experience/>}/>
        <Route path="/preview/:id" element={<MakeCV/>}/>
        </Routes>
      
      </BrowserRouter>
      </>
      
      
    );
  }

  export default App;
