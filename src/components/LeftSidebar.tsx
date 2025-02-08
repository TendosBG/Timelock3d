import { useState } from 'react';
import ConnectButton from "./ConnectButton.tsx";
import '../styles/Sidebar.css';

export default function LeftSidebar() {
    const [menuItems] = useState([
        { name: "Home", icon: " 🏠", path: "/" },
        { name: "Profile", icon: " 👤", path: "/profile" },
        { name: "Settings", icon: " ⚙️", path: "/settings" },
    ]);

    return (
        <div className="zidebar">
            <ConnectButton/>

            <nav className="menu">
                {menuItems.map((item, index) => (
                    <button className="menu-item" key={index}>
                        <span className="icon">{item.icon}</span>
                        <span className="text">{item.name}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}