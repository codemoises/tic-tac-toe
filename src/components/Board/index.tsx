import { useContext, useEffect } from "react";

import { GameContext } from "../../contexts/GameContext";
import Square from "../Square";
import calculateWinner from "../../utils";
import Player from "../Player";
import Reset from "../Reset";
import GameResulted from "../GameResulted";


export default function Board() {
  const { squares, setGameResult } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner({ squares });

    const isNull = (element: number) => { 
      return (element === null); 
   } 
             
   const passed = squares.filter(isNull);

    if (passed.length === 0 && !winner) {
      setGameResult('draw')
    }
    if (winner) {
      setGameResult(winner);
    }
  }, [ setGameResult, squares]);


  return (
    <div className="board-container">
      <Player />
      <div className="board">
        {squares.map((value: string, index: number) => (
            <Square value={value} index={index} />
            ))}
        <GameResulted />
      </div>
      <Reset />
    </div>
  );
}
