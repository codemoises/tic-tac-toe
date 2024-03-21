import React, { createContext, useState } from 'react';

export const GameContext = createContext({
    
});

interface GameContextProps {
    children: React.ReactNode;
}

export default function GameContextProvider({ children }: GameContextProps) {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [gameResult, setGameResult] = useState('');

    const state = {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        gameResult,
        setGameResult,
      };

    return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}