// context/appkit.tsx
"use client";
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { sepolia, mainnet, polygon, arbitrum, base } from "@reown/appkit/networks";
import type { AppKitNetwork } from "@reown/appkit/networks";
import { ReactNode } from "react";
import { wagmiAdapter, projectId } from "../config/appkit";

// Environment detection
const isMainnet = process.env.NEXT_PUBLIC_ENVIRONMENT === 'mainnet'

// Dynamic network configuration based on environment
const mainnetNetworks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, polygon, arbitrum, base]
const testnetNetworks: [AppKitNetwork, ...AppKitNetwork[]] = [sepolia, mainnet, polygon, arbitrum, base]

// Use appropriate networks based on environment (always ensure at least one network)
const supportedNetworks = isMainnet ? mainnetNetworks : testnetNetworks

// Create a metadata object
const metadata = {
  name: "ANYWORK",
  description: `ANYWORK - Digital marketplace connecting verified artisans and skilled workers - ${isMainnet ? 'Mainnet' : 'Testnet'} Mode`,
  url: "https://anywork.africa",
  icons: ["https://anywork.africa/logo.png"],
};

// Log environment info for debugging
console.log(`🌍 AppKit Environment: ${isMainnet ? 'Mainnet' : 'Testnet'}`);
console.log(`📡 Supported Networks:`, supportedNetworks.map(n => n.name));

// Create the AppKit instance
createAppKit({
  adapters: [wagmiAdapter],
  metadata,
  networks: supportedNetworks,
  projectId,
  features: {
    analytics: true,
    email: true, // Enable email login
    socials: ["google", "x", "github", "discord", "apple", "facebook", "farcaster"], // Enable social logins
    emailShowWallets: false, // Show email/social first, then wallets on separate screen
  },
  allWallets: 'SHOW', // Display all wallets
  // Optional: Add environment-specific features
  ...(isMainnet ? {
    // Mainnet specific configurations
    enableExplorer: true,
  } : {
    // Testnet specific configurations
    enableExplorer: true,
    enableOnramp: false, // Disable on-ramp for testnets
  })
});

interface AppKitProps {
  children: ReactNode;
}

export function AppKit({ children }: AppKitProps) {
  return <>{children}</>;
}
