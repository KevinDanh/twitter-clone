import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();
    const tweetRef = collection(db, 'posts');
    setDoc(doc(tweetRef), {
      displayName: 'Dragon K',
      username: '@dragonk',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTgwMTE3ODg2NDU3ODE2NDA4/how-to-create-an-aesthetic-pfp-the-ultimate-guide.png'
    })
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src=""></Avatar>
                <input 
                  onChange={e => setTweetMessage(e.target.value)}
                  value={tweetMessage} 
                  placeholder="What's happening">
                </input>
            </div>
            <input
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput" 
                placeholder="Image URL"
                type="text"
            />
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox