import { Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateComponent from './Components/UpdateComponent';
import ViewByIdComponent from './Components/ViewByIdComponent';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Components/Create';
import HomeApp from './Components/HomeApp';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignUpForm />} />
      <Route path="/" element={<HomeApp />} />
      <Route path="/create" element={<Create />} />
      <Route path="/home" element={<Home />} />
      <Route path='/update' element={<UpdateComponent /> } />
      <Route path='/view' element={<ViewByIdComponent /> } />
     </Routes>
    </div>
  );
}

export default App;
