

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import ChefDetails from './Components/ChefDetails/ChefDetails';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavItem from './Components/NavItem/NavItem';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <NavItem/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/chef/:id' element={<ChefDetails/> }/>
        <Route path='/cart/:foodId' element={<RequireAuth><Cart/></RequireAuth>}></Route>
        <Route path='/about' element={<About/> }/>
        <Route path='/signup' element={<SignUp/> }/>
        <Route path='/login' element={<SignUp />} />
        <Route path='*' element={<NotFound/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
