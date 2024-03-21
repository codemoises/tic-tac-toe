import React, { useContext } from "react";

import { GameContext } from "../../contexts/GameContext";


interface SquareProps {
    value: string;
    index: number;
}

export default function Square({ value = "", index }: SquareProps) {
    
    const {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        gameResult
      } = useContext(GameContext);

      const handleClick = () => {
        if (squares[index]) return;
        if (gameResult) return;
    
        const newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
      }

    return (
        <button type="button" onClick={handleClick}>
            {value}
        </button>
    );
}