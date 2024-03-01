import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import CreateList from './pages/CreateList';
import Login from './pages/Login';
import Register from './pages/Register';
import MemberList from './pages/MemberLists';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/createlist' element={<CreateList />} />
        <Route path='/create' element={<Create />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/memberlists' element={<MemberList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;