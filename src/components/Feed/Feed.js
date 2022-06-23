import React, { useEffect, useState }from "react";
import TweetBox from "../TweetBox";
import Post from "../Post/Post";
import './Feed.css';
import db from "../firebase";
import FlipMove from 'react-flip-move';
import {getDocs, collection, query} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db,'posts'));
    const querySnapshot = getDocs(q);
    querySnapshot
    .then((doc) => {
      setPosts(doc.docs.map(item => {
        return item.data();
      }))
    });
  }, [posts])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map(post => (
          <Post
            displayName = {post.displayName}
            username = {post.username}
            verified = {post.verified}
            text = {post.text}
            avatar = {post.avatar}
            image = {post.image}
          />
        ))}
      </FlipMove>
      

    </div>
  )
}

export default Feed