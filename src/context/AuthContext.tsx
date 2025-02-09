import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextProps {
    walletAddress: string | null;
    setWalletAddress: (address: string | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{ walletAddress, setWalletAddress }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};