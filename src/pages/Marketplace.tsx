import { useState } from "react";
import "../styles/Marketplace.css";

interface NFT {
    id: number;
    name: string;
    image: string;
    price: number;
    owner: string;
}

export default function Marketplace() {
    const [nfts, setNfts] = useState<NFT[]>([
        {
            id: 1,
            name: "Crypto Art #1",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)",
            price: 0.5,
            owner: "0x123...456",
        },
        {
            id: 2,
            name: "Rare Collectible #42",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)",
            price: 1.2,
            owner: "0xabc...789",
        },
        {
            id: 3,
            name: "Pixel Warrior",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)",
            price: 0.75,
            owner: "0xdef...101",
        },
        {
            id: 4,
            name: "NFT #4",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)",
            price: 3.83,
            owner: "0x123...456",
        },
        {
            id: 5,
            name: "NFT #5",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)",
            price: 0.2,
            owner: "0x123...456",
        },
        {
            id: 6,
            name: "NFT #6",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)",
            price: 2.5,
            owner: "0x123...456",
        }
    ]);

    const handleBuy = (id: number) => {
        alert(`NFT ${id} acheté (mock) !`);
        setNfts(nfts.filter((nft) => nft.id !== id));
    };

    return (
        <div className="marketplace">
            <h1>Marketplace</h1>
            <div className="nft-grid">
                {nfts.length === 0 ? (
                    <p>No NFT available.</p>
                ) : (
                    nfts.map((nft) => (
                        <div key={nft.id} className="nft-card">
                            <img src={nft.image} alt={nft.name} />
                            <h2>{nft.name}</h2>
                            <p>Price: {nft.price} ETH</p>
                            <p>Seller: {nft.owner}</p>
                            <button onClick={() => handleBuy(nft.id)}>Buy NFT</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}