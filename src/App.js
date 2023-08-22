import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Bookbus from "./components/Bookbus";
import Busdetails from "./components/Busdetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protect from "./components/Protect";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={ <Protect Child={Home}/>  }/>
          <Route path='/profile' element={ <Protect Child={Profile}/>  }/>
          <Route path='/bus' element={<Protect Child={Bookbus}/>}/>
          <Route path='/busdetail/:busid' element={<Protect Child={Busdetails}/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
