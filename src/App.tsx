import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Profile from "./pages/Profile";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSideBar";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import Marketplace from "./pages/Marketplace.tsx";
import Collections from "./pages/Collections.tsx";

function App() {
  const [auctions, setAuctions] = useState([
    { image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)", sellerName: "Alice", currentBid: 2.5 },
    { image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)", sellerName: "Bob", currentBid: 3.1 },
    { image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)", sellerName: "Alice", currentBid: 2.5 },
    { image: "https://dummyimage.com/300x300/000000/ffd900&text=I'm+a+NFT+:)", sellerName: "Bob", currentBid: 3.1 },
  ]);

  const handleBid = (index: number) => {
    const newAuctions = [...auctions];
    newAuctions[index].currentBid += 0.1;
    setAuctions(newAuctions);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="main-layout">
          <LeftSidebar />

          <div className="content-area">
            <Routes>
              <Route path="/" element={<Feed />} /> 
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Profile />} />
                <Route path="/collections" element={<Collections />} />
              <Route path="/marketplace" element={<Marketplace />} />
            </Routes>
          </div>

          <RightSidebar auctions={auctions} onBid={handleBid} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;