import './App.css';
import BingoGame from './components/BingoGame';
import { Routes, Route, Link, Router } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/Signup';
import GetPosts from './components/pages/GetPosts';
import NewPost from './components/pages/NewPost';
import ReplyPost from './components/pages/ReplyPost';
function App() {
  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/GetPosts' element={<GetPosts/>}/>
        <Route path='/NewPost' element={<NewPost/>}/>
        <Route path='/ReplyPost' element={<ReplyPost/>}/>
      </Routes>

      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
