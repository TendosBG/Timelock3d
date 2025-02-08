import {
    useWeb3ModalTheme,
    createWeb3Modal,
    defaultConfig,
} from 'web3modal-web3js/react';

const projectId = '76804fd6127cc3b85f7d749c4e53700f';


const chains = [
    {
        chainId: 5611,
        name: 'opBNB Testnet',
        currency: 'tBNB',
        explorerUrl: 'https://opbnbscan.com/',
        rpcUrl: 'https://opbnb-testnet-rpc.bnbchain.org',
    }
];

const web3Config = defaultConfig({
    metadata: {
        name: 'TimeLock3d',
        description: 'Send your memories into time capsules !',
        url: 'https://www.bnbchain.org/en',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
    },
    defaultChainId: 97,
    rpcUrl: 'https://data-seed-prebsc-1-s3.bnbchain.org:8545/',
});

// 3. Create modal
createWeb3Modal({
    web3Config,
    chains,
    projectId,
    enableAnalytics: true,
    themeMode: 'light',
    themeVariables: {
        '--w3m-color-mix': '#00DCFF',
        '--w3m-color-mix-strength': 20,
    },
});

export default function App() {
    const { themeMode, setThemeMode } = useWeb3ModalTheme();

    return (
        <>
            <w3m-button />
        </>
    );
}
