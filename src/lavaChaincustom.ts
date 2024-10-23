import { defineChain } from 'viem'
import { chainConfig } from 'viem/op-stack'

const sourceId = 8899

export const lavaChaincustom = defineChain({
  ...chainConfig,
  id: 8899001,
  name: 'Lavarock Gaming Blockchain',
  nativeCurrency: { name: 'LVR', symbol: 'LVR', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.lavarock.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://exp.lavarock.xyz',
    },
  },

  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId]: {
        address: '0x5a16e0dEa3A382962d71b596bb945B6dD86574E9',
      },
    },
    portal: {
      [sourceId]: {
        address: '0xeaD7cDaE8458e1C23F666bb225a2c8867ee9F98b',
      },
    },
    l1StandardBridge: {
      [sourceId]: {
        address: '0xB9500972F3a7649D7B9d37652D9c7b4E1d5A05eE',
      },
    },
  },
  sourceId,
  // testnet: true,
})
