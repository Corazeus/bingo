import axios from "axios";
import { useState } from "react";
import '../css/App.css'
import NavBar from "./comps/NavBar";
import PostCard from "./comps/PostCard";

function GetPosts() {

  const URL = 'http://hyeumine.com/forumGetPosts.php';
  const [posts, setPosts] = useState([{
    id: '',
    post: '',
    user: '',
    date: '',
    reply: {
      reply: '',
      user: '',
      date: '',
    }
  }]);
  const [page, setPage] = useState('');

  const GetPosts = async () => {

    const res = await axios.get(URL + '?page=' + page);
    if (res.data) {
      setPosts(res.data)
    }
  }

  return (
    <div className="App">

      <NavBar />

      <header className="App-header">

        <h1> GET ALL POSTS </h1>

        <br></br>

        <label>
          <input placeholder='Page' className='page' type="number" onChange={e => setPage(e.target.value)} />
        </label>
        <button className='butt' onClick={() => GetPosts()}>Retrieve Posts</button>

        <div className="Posts">

          {posts.map((post, i) =>
            <PostCard
              key={i}
              post={post.post}
              user={post.user}
              date={post.date}
              id={post.id}
              replies={JSON.stringify(post.reply)}

            />

          )}

        </div>

      </header>
    </div>
  );
}

export default GetPosts;
