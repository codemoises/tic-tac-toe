import { useContext, useState } from 'react';

import { GameContext } from '../../contexts/GameContext';

export default function Winner() {
  const { gameResult } = useContext(GameContext);
    
  if (!gameResult) return <></>;
  return (
    <div className="winner">
        <div>
            {gameResult === 'draw' ? <p>Empate!</p> : <p>{gameResult} vencedor!</p>}
        </div>
    </div>
  );
}
