import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, remove, title}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => <PostItem number={index+1} post={post} remove={remove} key={post.id}/> )}
    </div>
  );
}

export default PostList;