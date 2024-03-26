import { useGameContext } from "../../contexts/GameContext";


interface SquareProps {
    value: string;
    index: number;
}

export default function Square({ value = "", index }: SquareProps) {
    
    const {
        state,
        upDateSquare,
      } = useGameContext();

      const squares = state.squares;
      const isXNext = state.isXNext;

      const handleClick = () => {
        if (squares[index]) return;
        if (state.gameResult) return;
    
        const newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';
        upDateSquare;
      }

    return (
        <button type="button" onClick={handleClick}>
            {value}
        </button>
    );
}