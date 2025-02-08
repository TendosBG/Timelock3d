import React from "react";
import AuctionItem from "./AuctionItemProp";
import "../styles/Bidbar.css";

interface RightSidebarProps {
  auctions: {
    image: string;
    sellerName: string;
    currentBid: number;
  }[];
  onBid: (index: number) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ auctions, onBid }) => {
  return (
    <div className="bidbar">
      <h2>Trending Auctions</h2>
      <div className="auction-list">
        {auctions.map((auction, index) => (
          <AuctionItem
            key={index}
            image={auction.image}
            sellerName={auction.sellerName}
            currentBid={auction.currentBid}
            onBid={() => onBid(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;