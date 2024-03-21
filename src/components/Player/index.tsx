import { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';


export default function Player() {
  const { gameResult, isXNext } = useContext(GameContext);

  return (
    <div className='player'>
        {gameResult ? <h1>Fim de jogo</h1> : <h1>Player: {isXNext ? 'X' : 'O'}</h1>}
    </div>
    );
}