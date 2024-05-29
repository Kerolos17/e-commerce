import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComp from './Routes/HomeComp';
import SingleProductComp from './Routes/SingleProductComp';
import RegisterComp from './Routes/RegisterComp';
import LoginComp from './Routes/LoginComp';
import Products from './Routes/Products';
import CartComp from './Routes/CartComp';
import ContactUs from './Routes/ContactUs';

function App() {
  return (
    <Routes>
    <Route path='/' element={<HomeComp/>}/>
    <Route path='/:id' element={<SingleProductComp/>}/>
    <Route path= "/register" element={<RegisterComp/>}/>
    <Route path="/login" element={<LoginComp/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<SingleProductComp/>}/>
    <Route path='/cart' element={<CartComp/>}/>
    <Route path='/cart/:id' element={<SingleProductComp/>}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
    </Routes> 

  );
}

export default App;
