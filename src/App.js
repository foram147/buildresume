
  import Home from './components/home';
  import { BrowserRouter,Routes, Route} from "react-router-dom";
  import Testing from './components/home/Testing';
  
  import Default from "./components/home/Funlogin"

  
  function App() {
     return (

      <>

      <BrowserRouter>
        <Routes>
        <Route path="/"
          element ={<Home/>}
          />
          <Route path='/login' element={<Default/>}/>
        <Route path="/login/:userId/profile" element={<Testing/>} />
        
        </Routes>
      
      </BrowserRouter>
      </>
      
      
    );
  }

  export default App;
