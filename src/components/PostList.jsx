import { createRef } from 'react';
import React from 'react';
import PostItem from './PostItem';
import "../styles/App.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, remove, title }) => {

    if (!posts) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Posts not found!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                        <CSSTransition
                            nodeRef={post.nodeRef}
                            timeout={500}
                            key={post.id}
                            classNames="post"
                        >
                            <PostItem
                                number={index + 1}
                                post={post}
                                remove={remove}
                                ref={post.nodeRef}
                            />
                        </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default PostList;
