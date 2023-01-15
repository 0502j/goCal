import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ReactDOM from "react-dom/client";
import Welcome from './Pages/Welcome';
import Calculate from './Pages/Calculate';
import { useState } from 'react';
import Title from './Components/Data/Title';
import Result from './Pages/Result';

function App() {

  const [username, setUsername] = useState('');

  const nameHandler = (data) => {
    const {name, id} = data;
    setUsername(name);
  }


 
  return (

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/welcome' element={<Welcome onAddName={nameHandler}/>} />
        <Route path='/calculate' element={
          <div>
            <Title name={username}></Title>
            <Calculate></Calculate>
          </div>
        } />
        <Route path='/result' element={<Result/>} />
      </Routes>
    
  );
}

export default App;
