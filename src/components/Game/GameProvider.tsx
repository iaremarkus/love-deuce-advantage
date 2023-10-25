"use client";

import { createContext, useContext } from "react";
import { useEffect, useReducer } from "react";

import type { GameState, Score } from "types";

const GameContext = createContext<{
  gameState: GameState;
  score: Score;
  players: string[];
  points: (number | string)[];
  reset: () => void;
  setScore: ({}: any) => void;
}>(null!);

interface GameProviderProps {
  players: string[];
  children: React.ReactNode;
}

export const GameProvider = ({ players, children, ...props }: GameProviderProps) => {
  const points = ["Love", 15, 30, 40];

  const [gameState, setGameState] = useReducer(
    (state: GameState, payload: any): GameState => {
      return { ...state, ...payload };
    },
    { deuce: false, advantage: 0, winner: 0, state: "playing" }
  );

  const [score, setScore] = useReducer(
    (state: Score, payload: any): Score => {
      return { ...state, ...payload };
    },
    {
      player1: 0,
      player2: 0
    }
  );

  useEffect(() => {
    const { player1, player2 } = score;

    // if > 3, then we're in game winning territory
    if (player1 > 2 && player2 > 2) {
      setGameState({
        deuce: player1 === player2,
        advantage: player1 === player2 ? 0 : player1 > player2 ? 1 : 2
      });

      // have we won by 2 points?
      if (player1 > player2 + 1) setGameState({ winner: 1, state: "gameover" });
      if (player2 > player1 + 1) setGameState({ winner: 2, state: "gameover" });

      // advantage?
      if (player1 > player2) setGameState({ advantage: 1 });
      if (player2 > player1) setGameState({ advantage: 2 });
    } else {
      if (player1 > 3) setGameState({ winner: 1, state: "gameover" });
      if (player2 > 3) setGameState({ winner: 2, state: "gameover" });
    }
  }, [score]);

  const reset = () => {
    setGameState({ deuce: false, advantage: 0, winner: 0, state: "playing" });
    setScore({ player1: 0, player2: 0 });
  };

  if (!players) return "🎾";

  return (
    <GameContext.Provider value={{ gameState, score, points, players, reset, setScore }} {...props}>
      <div className="w-full max-w-5xl mx-auto p-10 lg:p-0 flex flex-col gap-10">{children}</div>
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) throw new Error("Item must be used in GameContext");

  return context;
};
