import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Nav from './components/navbar/nav';
import { mycontext } from './components/context';
import {  useState } from 'react';
import { thirdpara } from './components/datafile';

function App() {
  
  const [desc,setdesc] = useState(thirdpara)
  const values = {
    desc, setdesc
  }
  return (
    <div className="App">
      <BrowserRouter>
      <mycontext.Provider value ={values} >
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/nav' element={<Nav/>}/>
        </Routes>
        </mycontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
