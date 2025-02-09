// components/Tweet.tsx
import { useState } from "react";
import { TweetType } from "./feed";

import "../styles/Tweet.css";

interface TweetProps {
  tweet: TweetType;
}

export default function Tweet({ tweet }: TweetProps) {
  const [likes, setLikes] = useState(tweet.likes);
  const [comments, setComments] = useState(tweet.comments);

  const addComment = (text: string) => {
    setComments([...comments, text]);
  };

  return (
    <div className="tweet">
      <h3>{tweet.author}</h3>
      <p>{tweet.content}</p>
      <div className="tweet-actions">
        <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
        <span>💬 {comments.length}</span>
      </div>
      <div className="comments">
        
      </div>
    </div>
  );
}