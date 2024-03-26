import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { GameContextActions } from "../enums/GameContextActions";

export const INITIAL_STATE = {
  squares: Array(9).fill(null),
  isXNext: true,
  gameResult: "",
  history: [],
};

export type InitialStateType = typeof INITIAL_STATE;

export const GameContext = createContext({
  state: INITIAL_STATE,
  upDateSquare: () => {},
  setIsXNext: () => {},
  //   setGameResult: () => {},
});

export const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};

interface GameContextProps {
  children: ReactNode;
}

interface IDispatchAction {
  type: GameContextActions;
  payload?: unknown;
}

export const GameContextReducer = (
  state = INITIAL_STATE,
  action: IDispatchAction
): InitialStateType => {
  switch (action.type) {
    case GameContextActions.upDateSquare: {
      const { squares, history, isXNext, gameResult } = state;

      const newHistory = [
        ...history,
        {
          squares,
          isXNext,
          gameResult,
        } as never,
      ];

      const newState = { ...state };
      newState.squares = action.payload;
      newState.isXNext = !isXNext;
      newState.gameResult = gameResult;
      newState.history = newHistory;

      return newState;
    }
    case GameContextActions.setIsXNext:
      return {
        ...state,
        isXNext: !state.isXNext,
      };
    default:
      throw new Error();
  }
};

export default function GameContextProvider({ children }: GameContextProps) {
  const [state, dispatch] = useReducer(GameContextReducer, INITIAL_STATE);

  const upDateSquare = useCallback(() => {
    dispatch({
      type: GameContextActions.upDateSquare,
    });
  }, [dispatch]);

  const setIsXNext = useCallback(() => {
    dispatch({
      type: GameContextActions.setIsXNext,
    });
  }, [dispatch]);

  return (
    <GameContext.Provider value={{ state, upDateSquare, setIsXNext }}>
      {children}
    </GameContext.Provider>
  );
}
