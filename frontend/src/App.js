import './components/Navbar/Navbar'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Landing from './components/Landingpage/Landing';
import Signup from './components/Signup/Signup';
import Card from './components/Card/Card';
import Fav from './components/Fav/Fav';
import Recommend from './components/Recommendation/Recommend';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/card/:name' element={<Card></Card>}></Route>
      <Route path='/home' element={<Landing></Landing>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/recommend' element={<Recommend></Recommend>}></Route>
      <Route path='/fav' element={<Fav></Fav>}></Route>
    
     </Routes>
    </BrowserRouter>

  );
}

export default App;
