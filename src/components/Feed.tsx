// components/Feed.tsx
import { useState } from "react";

import Tweet from "./PostProp";
import "../styles/Feed.css";
import PromptToRequest from "./PromptToRequest";

export interface TweetType {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: string[];
}

 

export default function Feed() {
  const [tweets, setTweets] = useState<TweetType[]>([
    { id: 1, author: "CZ Binance", content: "BNB Chain is the future of decentralized finance! 🚀🔥", likes: 102, comments: ["So bullish! 📈", "Mass adoption coming!"] },
    { id: 2, author: "NFT Whale", content: "Just minted a rare BNB NFT! 💎 Who else is in? #NFTs #BNBChain", likes: 89, comments: ["Show us the art!", "What's the floor price?"] },
    { id: 3, author: "Crypto Analyst", content: "BNB breaking resistance at $350. Next stop, $500? 🚀📊 #Crypto", likes: 120, comments: ["Strong fundamentals!", "HODLing till $1000!"] },
    { id: 4, author: "bnb", content: "BNB Chain is the future of decentralized finance! 🚀🔥", likes: 102, comments: ["So bullish! 📈", "Mass adoption coming!"] }
  ]);

 

  return (
    <div className="feed-container">
      <PromptToRequest />
      <div className="tweets">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}