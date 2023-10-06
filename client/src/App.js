import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/components/style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


import { Home } from './components/home/home';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Menu } from './components/menu';
import { Dashboard } from './components/dashboard/dashboard';
import { Adminpage } from './components/admin page/adminpage';
import { Viewuser } from './components/admin page/viewuser';
import { Viewservice } from './components/admin page/viewservices';
import { Addservice } from './components/admin page/addservice';
import { Adupdate } from './components/admin page/update';
import { Updateservice } from './components/admin page/updateservice';
import { About } from './components/home/about';
import { Booking } from './components/admin page/booking';
// import { Contact } from './components/dashboard/contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Menu />, <Home />]}></Route>
          <Route path='/Register' element={[<Register />]} ></Route>
          <Route path="/Login" element={[<Login />]} ></Route>
          <Route path="/adminpage/:id" element={[<Adminpage />]}></Route>
          <Route path="/user/:id" element={[<Dashboard />]}></Route>
          <Route path="/viewuser" element={[<Viewuser />]}></Route>
          <Route path="/viewservice" element={[<Viewservice />]}></Route>
          <Route path="/addservices" element={[<Addservice />]}></Route>
          <Route path="/updateuser/:id" element={[<Adupdate />]}></Route>
          <Route path="/updateservice/:sno" element={[<Updateservice />]}></Route>
          <Route path="/about" element={[<Menu />, <About />]}></Route>
          <Route path="/booking" element={[<Booking />]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

