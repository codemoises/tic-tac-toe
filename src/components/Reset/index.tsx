// import { useContext } from 'react';

import { useGameContext } from '../../contexts/GameContext';

export default function Reset() {
  const { resetSquares } = useGameContext();
  // const { setIsXNext, setGameResult } = useContext(GameContext);

  function handleClick() {
    resetSquares
    // setIsXNext(true);
    // setGameResult('');
  }

  return (
    <div className="reset">
      <p onClick={handleClick}>
        Reiniciar o jogo
      </p>
    </div>
  );
}