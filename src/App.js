import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ReactDOM from "react-dom/client";
import Welcome from './Pages/Welcome';
import Calculate from './Pages/Calculate';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState(null);

  return (

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/welcome' element={<Welcome/>} />
        <Route path='/calculate' element={<Calculate username={username}/>} />
      </Routes>
    
  );
}

export default App;
