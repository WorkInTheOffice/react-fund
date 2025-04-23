import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect"

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "BB", body: "First description" },
    { id: 2, title: "AA", body: "Second description" },
    { id: 3, title: "CC", body: "Third description" },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'},
          ]}
          />
      </div>
      {posts.length !== 0 
      ? <PostList posts={posts} remove={removePost} title={"Posts about JS"} /> 
      : <h1 style={{textAlign: 'center'}}>Posts not found</h1>
      }
    </div>
  );
}

export default App;
