import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ConnectButton from "./ConnectButton.tsx";
import "../styles/Sidebar.css";

export default function LeftSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const menuItems = [
        { name: "🏠 Home", path: "/" },
        { name: "👤 Profile", path: "/profile" },
        { name: "⚙️ Settings", path: "/settings" },
        { name: "🛒 Marketplace", path: "/marketplace" },
        { name: "🖼 Collection", path: "/collection" },
        { name: "❓ Help", path: "/help" },
    ];

    return (
        <div className="zidebar">
            <ConnectButton />

            <nav className="menu">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`menu-item ${location.pathname === item.path ? "active" : ""}`}
                        onClick={() => navigate(item.path)}
                    >
                        <span className="text">{item.name}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}