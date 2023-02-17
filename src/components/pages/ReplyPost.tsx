import axios from "axios";
import { useState } from "react";
import '../css/App.css'
import NavBar from "./comps/NavBar";


function ReplyPost() {

    const URL = 'http://hyeumine.com/forumReplyPost.php';
    const [id, setID] =  useState('');
    const [postid, setPostID] = useState('');
    const [reply, setReply] = useState('');

  const Reply = async () => {

    const Data = {
        id: id,
        postid: postid,
        reply: reply,
    };

    axios
        .post(URL, new URLSearchParams({
          user_id: Data.id,
          post_id: Data.postid,
          reply: Data.reply
        }))

        .then(res => {
          if(res.data){
            alert("Successfully replied: " +reply+ " to Post "+postid)
          }
        })
        .catch(err =>{
            console.log(err)
        })

  }

  return (
    <div className="App">
      <NavBar/>

      <header className="App-header">

        <h1> New Post </h1>

        <label>
          <input placeholder='User ID' className='gcode' type="number" onChange={e => setID(e.target.value)} />
          <br></br>
          <input placeholder='Post ID' className='gcode' type="number" onChange={e => setPostID(e.target.value)} />
          <br></br>
          <input placeholder='Reply' className='post' type="text" onChange={e => setReply(e.target.value)}/>
        </label>

        <br></br>

        <button className='butt' onClick={ () => Reply()}>Reply</button>

      </header>
    </div>
  );
}

export default ReplyPost;
