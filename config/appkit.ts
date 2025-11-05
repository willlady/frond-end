import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { sepolia, mainnet, polygon, arbitrum, base } from '@reown/appkit/networks'

// Get projectId from environment variable or use default
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'a9fbadc760baa309220363ec867b732e'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, polygon, arbitrum, base, sepolia]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const wagmiConfig = wagmiAdapter.wagmiConfig
