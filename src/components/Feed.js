import React, { useEffect, useState }from "react";
import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import db from './firebase';
import {doc, onSnapshot, collection, query, where} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  // TODO: FIX SYNTAX ERROR HERE
  useEffect(() => {
    const q = query(collection(db,'posts'));
    const result = onSnapshot(q, (querySnapshot) => (
      setPosts("Data", querySnapshot.docs.map(doc => doc.data()))
    ))  
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.map(post => 
        <Post
          displayName = {post.displayName}
          username = {post.username}
          verified = {post.verified}
          text = {post.text}
          avatar = {post.avatar}
          image = {post.image}
        />
      )}
      

    </div>
  )
}

export default Feed