import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom'
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Edit from './pages/Edit';


function App() {
  return (
    <fieldset>
    <legend>App.jsx</legend>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/authors" element={<Create />} />
      <Route path="/authors/edit/:author_id" element={<Edit/>}/>
    </Routes>
    </fieldset>
    
    
  );
}

export default App;
