import { defineChain } from 'viem'
import { chainConfig } from 'viem/op-stack'

const sourceId = 8899

export const pomChaincustom = defineChain({
  ...chainConfig,
  id: 7003,
  name: 'POM CHAIN',
  nativeCurrency: { name: 'POM', symbol: 'POM', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://pom-rpc.jibl2.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://pom.jibl2.com',
      apiUrl: 'https://pom.jibl2.com/api'
    },
  },

  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId]: {
        address: '0xa66Ceef161F975321DBfCC5E2879AEd935Bc6D78',
      },
    },
    portal: {
      [sourceId]: {
        address: '0xc15A4B8C12f7596d2e92276888770324e90f2FB9',
      },
    },
    l1StandardBridge: {
      [sourceId]: {
        address: '0x5Ea9057E3848D73D988718F74b311656f229A866',
      },
    },
  },
  sourceId,
  // testnet: true,
})
