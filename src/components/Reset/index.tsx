import { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';

export default function Reset() {
  const { setSquares, setIsXNext, setGameResult } = useContext(GameContext);

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameResult('');
  }

  return (
    <div className="reset">
      <p onClick={handleClick}>
        Reiniciar o jogo
      </p>
    </div>
  );
}