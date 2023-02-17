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

function SignUp() {

    const URL = 'http://hyeumine.com/forumCreateUser.php';
    const [user, setUser] =  useState('');
    const [pass, setPass] = useState('');
    const [userInfo, setUserInfo] = useState<userInfo>();

  const SignUp = async () => {

    console.log(user)
    console.log(pass)   

    const userData = {
        username: user,
        password: pass,
    };

    axios
        .post(URL, new URLSearchParams({
          username: userData.username,
          password: userData.password
        }))
        .then(res => {

            setUserInfo(res.data);

            if(res.data){
              console.log(res.data.id)
              console.log(res.data.username)

              alert('Successfully registered: '+res.data.username+ ', with UID: ' +res.data.id)
            }

            console.log(userInfo);

        })
        .catch(err =>{
            console.log(err)
        })

  }

  return (
    <div className="App">

      <header className="App-header">

        <h1> SIGNUP </h1>

        <label>
          <input placeholder='Username' className='gcode' type="text" onChange={e => setUser(e.target.value)} />
          <br></br>
          <input placeholder='Password' className='gcode' type="password" onChange={e => setPass(e.target.value)}/>
        </label>

        <br></br>

        <button className='butt' onClick={ () => SignUp()}>Register</button>
        <br></br>
        <a href="/">Already have an account? Sign-in Now!</a>

      </header>
    </div>
  );
}

export default SignUp;
