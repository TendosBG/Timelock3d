import LeftSidebar from "./components/LeftSideBar.tsx";
import RightSidebar from "./components/RightSideBar.tsx";
import PromptToRequest from "./components/PromptToRequest.tsx";


import React, { useState } from "react";


const MainPage: React.FC = () => {
  const [auctions, setAuctions] = useState([
    { image: "image-url-1", sellerName: "Alice", currentBid: 2.5 },
    { image: "image-url-2", sellerName: "Bob", currentBid: 3.1 },
    { image: "image-url-1", sellerName: "Alice", currentBid: 2.5 },
    { image: "image-url-2", sellerName: "Bob", currentBid: 3.1 },
    // Add more auction items here
  ]);

  const handleBid = (index: number) => {
    // Logic to update the auction bid, maybe call a smart contract or local state update
    const newAuctions = [...auctions];
    newAuctions[index].currentBid += 0.1;
    setAuctions(newAuctions);
  };

  return (
    <>
        <div className="main-layout">
            <RightSidebar auctions={auctions} onBid={handleBid}/>
                <div className="verticalSection"> 
                    <PromptToRequest />
                    <div className="divider"/>
                </div>
            <LeftSidebar />
        </div>
    </> 
  );
};

export default MainPage;
