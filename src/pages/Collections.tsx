import { useState } from "react";
import "../styles/Collections.css";

interface Collection {
    id: number;
    name: string;
    image: string;
    nfts: number;
}

export default function CollectionPage() {
    const [collections, setCollections] = useState<Collection[]>([
        {
            id: 1,
            name: "My NFTs",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=Collection+1",
            nfts: 12,
        },
        {
            id: 2,
            name: "My sales",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=Collection+2",
            nfts: 8,
        },
        {
            id: 3,
            name: "My Purchases",
            image: "https://dummyimage.com/300x300/000000/ffd900&text=Collection+3",
            nfts: 5,
        },
    ]);

    const handleViewCollection = (id: number) => {
        alert(`Affichage de la collection ${id} (mock) !`);
    };

    return (
        <div className="collection-container">
            <h1>My Collections</h1>
            <div className="collection-grid">
                {collections.length === 0 ? (
                    <p>No Collections Available.</p>
                ) : (
                    collections.map((collection) => (
                        <div key={collection.id} className="collection-card">
                            <img src={collection.image} alt={collection.name} />
                            <h2>{collection.name}</h2>
                            <p>NFTs Number: {collection.nfts}</p>
                            <button onClick={() => handleViewCollection(collection.id)}>See NFTs Collection</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}