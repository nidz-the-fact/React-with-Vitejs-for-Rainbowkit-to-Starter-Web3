import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

import '@rainbow-me/rainbowkit/styles.css';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { WagmiProvider } from 'wagmi';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  jbc,
} from 'viem/chains';
// import {
//   sepolia,
//   optimismSepolia,
// } from 'opstack-kit/chains';

import { pomChaincustom } from './pomChaincustom.ts'
// import { lavaChaincustom } from './lavaChaincustom.ts'


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: import.meta.env.VITE_SOME_KEY, // .env
  chains: [
    jbc, 
    pomChaincustom, 
    // lavaChaincustom
  ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>

          <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />

            <App />

          </ChakraProvider>

        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

  </React.StrictMode>,
)
