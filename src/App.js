import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import { AuthProvider } from './auth/authProvider';
function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='login' element ={<Login/>}/>
    <Route path='signup' element ={<SignUp/>}/>
    <Route path='dashboard' element ={<Dashboard/>}/>
   </Routes>
  
   </AuthProvider>
    </div>
  );
}

export default App;
