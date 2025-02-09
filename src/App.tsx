import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSideBar";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";


function App() {
  const [auctions, setAuctions] = useState([
    { image: "image-url-1", sellerName: "Alice", currentBid: 2.5 },
    { image: "image-url-2", sellerName: "Bob", currentBid: 3.1 },
    { image: "image-url-1", sellerName: "Alice", currentBid: 2.5 },
    { image: "image-url-2", sellerName: "Bob", currentBid: 3.1 },
    // Add more auction items here
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
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Home />} />
            </Routes>
          </div>

          <RightSidebar auctions={auctions} onBid={handleBid} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;