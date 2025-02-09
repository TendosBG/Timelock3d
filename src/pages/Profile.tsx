import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Profile.css';

const Profile: React.FC = () => {
    const { walletAddress } = useAuth();
    const [nickname, setNickname] = useState<string>('');
    const [tempNickname, setTempNickname] = useState<string>('');


    useEffect(() => {
        const savedNickname = localStorage.getItem('nickname');
        if (savedNickname) {
            setNickname(savedNickname);
            setTempNickname(savedNickname); 
        }
    }, []);

    const handleSubmit = () => {
        localStorage.setItem('nickname', tempNickname); 
        setNickname(tempNickname); 
    };

    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-header">
                    <h2>My Profile</h2>
                    <p>Address: {walletAddress}</p>
                    {nickname && (
                        <p>Nickname: {nickname}</p>
                    )}
                </div>
                
                <div className="profile-body">
                    <div className="nickname-section">
                        <label htmlFor="nickname">Set your nickname:</label>
                        <input
                            id="nickname"
                            type="text"
                            value={tempNickname}
                            onChange={(e) => setTempNickname(e.target.value)}
                            placeholder="Enter your nickname"
                        />
                        <button onClick={handleSubmit}>Save Nickname</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;