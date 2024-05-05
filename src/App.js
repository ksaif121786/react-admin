import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectRoute from './ProtectRoute'

// pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ListBanner from './pages/Banner/ListBanner';
import AddBanner from './pages/Banner/AddBanner';
import EditBanner from './pages/Banner/EditBanner';

// user
import ListUser from './pages/User/ListUser';
import ShowUser from './pages/User/ShowUser';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route index element={<Login/>}/>
       

        {/* users */}
        <Route element={<ProtectRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>

          <Route path='/banners' element={<ListBanner/>}/>
          <Route path='/banner-add' element={<AddBanner/>}/>
          <Route path='/banner-edit' element={<EditBanner/>}/>


          <Route path='/users' element={<ListUser/>}/>
          <Route path='/user-show/:id' element={<ShowUser/>}/>
          
        </Route>
       
     </Routes>
    </BrowserRouter>
  );
}

export default App;
