import { render } from "@testing-library/react";
import axios from "axios";
import { useState } from "react";
import '../css/App.css'

interface userInfo{
  success:boolean,
  user:{
    id:string,
    username:string,
  }
}

function Login() {

    const LOGIN_URL = 'http://hyeumine.com/forumLogin.php';
    const [user, setUser] =  useState('');
    const [pass, setPass] = useState('');
    const [userInfo, setUserInfo] = useState<userInfo>();
    const [logged, setLogged] = useState(false);

  const Login = async () => {

    const userData = {
        username: user,
        password: pass,
    };

    axios
        .post(LOGIN_URL, new URLSearchParams({
          username: userData.username,
          password: userData.password
        }))
        .then(res => {

            setUserInfo(res.data);
            console.log(userInfo)
            
            if(userInfo?.success){
              alert("Successfully Logged in as: "+JSON.stringify(userInfo.user.username)+", with UID "+JSON.stringify(userInfo.user.id))
              setLogged(true);
            }else{
              alert("Try Again!")
            }
 
        })
        .catch(err =>{
            console.log(err)
        })

  }

  return (
    <div className="App">

      <header className="App-header">

        <h1> LOGIN </h1>

        <label>
          <input placeholder='Username' className='gcode' type="text" onChange={e => setUser(e.target.value)} />
          <br></br>
          <input placeholder='Password' className='gcode' type="password" onChange={e => setPass(e.target.value)}/>
        </label>

        <br></br>
        {logged ?(
          <a href="/GetPosts"><button className='butt2'>Proceed</button></a>
        ): (
          <button className='butt' onClick={ () => Login()}>Login</button>
        )}
        <br></br>
        <a href="/signup">Dont have an account? Register Now!</a>

      </header>
    </div>
  );
}

export default Login;
