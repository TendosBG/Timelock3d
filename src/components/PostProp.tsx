import React, { useState } from "react";
import "../styles/PostPropCSS.css"

interface AuctionItemProps {
  image: string;
  sellerName: string;
  currentBid: number;
  onBid: (newBid: number) => void;
}

const AuctionItem: React.FC<AuctionItemProps> = ({ image, sellerName, currentBid, onBid }) => {
  const [bidAmount, setBidAmount] = useState(currentBid);

  const handleBid = () => {
    setBidAmount((prevBid) => {
      const newBid = prevBid + 0.1;
      onBid(newBid); // Notify parent component of new bid
      return newBid;
    });
  };

  return (
    <div className="auction-item">
      <img src={image} alt="NFT" className="auction-image" />
      <div className="auction-details">
        <h3>{sellerName}</h3>
        <p>Current Bid: {bidAmount.toFixed(2)} ETH</p>
        <button onClick={handleBid}>Bid Higher</button>
      </div>
    </div>
  );
};

export default AuctionItem;