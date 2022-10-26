import {Route, Routes} from "react-router-dom";
import {MainPage} from "./components/MainPage";
import {LoginPage} from "./components/LoginPage";
import {RegisterPage} from "./components/RegisterPage";
import {HomePage} from "./components/HomePage";

function App() {
  return (
    <div className="App container">
      <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
