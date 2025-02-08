import { useWeb3Modal } from 'web3modal-web3js/react';
import { useEffect, useState } from 'react';

export default function ConnectButton() {
    const { open, isConnected, provider } = useWeb3Modal();
    const [account, setAccount] = useState<string | null>(null);

    useEffect(() => {
        if (isConnected && provider) {
            provider.eth.getAccounts().then((accounts: string[]) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                }
            });
        }
    }, [isConnected, provider]);

    return (
        <button
            onClick={() => open({ connectorId: 'injected' })}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
            {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect with MetaMask"}
        </button>
    );
}