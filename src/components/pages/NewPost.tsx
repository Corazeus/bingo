import axios from "axios";
import { useState } from "react";
import '../css/App.css'
import NavBar from "./comps/NavBar";

function NewPost() {

    const URL = 'http://hyeumine.com/forumNewPost.php';
    const [id, setID] =  useState('');
    const [post, setPost] = useState('');

  const Post = async () => {

    const Data = {
        id: id,
        post: post,
    };

    axios
        .post(URL, new URLSearchParams({
          id: Data.id,
          post: Data.post
        }))

        .then(res => {
          if(res.data){
            alert("Successfully posted: " +post)
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
          <input placeholder='Post' className='post' type="text" onChange={e => setPost(e.target.value)}/>
        </label>

        <br></br>

        <button className='butt' onClick={ () => Post()}>Post</button>

      </header>
    </div>
  );
}

export default NewPost;
