import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <a href='https://github.com/nidz-the-fact' target='_blank' className="btn btn-ghost text-xl">Nidz</a>
                </div>
                <div className="navbar-end">
                    <IconButton
                        aria-label="Toggle color mode"
                        icon={colorMode === 'light' ? <MoonIcon color="purple.500" /> : <SunIcon color="yellow.400" />}
                        onClick={toggleColorMode}
                        variant="ghost"
                    />
                    {/* 
                    // @title Use dependencies with RainbowKit (https://www.rainbowkit.com/) for Web3 Blockchain.
                    // @notice import { ConnectButton } from '@rainbow-me/rainbowkit'; Connect Web3 wallet.
                    // 
                    // @custom:<ConnectButton /> -  UI wallet.
                    */}
                    <ConnectButton />
                </div>
            </div>
        </>
    );
}

export default Navbar;
