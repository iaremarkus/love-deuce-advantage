import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { useGameContext } from "./GameProvider";

export interface PlayerCardProps {
  player: "player1" | "player2";
  className?: string;
}

export const PlayerCard = ({ player, className = "", ...props }: PlayerCardProps) => {
  const { gameState, score, points, setScore, players } = useGameContext();
  const { state, deuce, advantage } = gameState;

  const index = player === "player1" ? 0 : 1;

  if (!player) throw new Error("PlayerCard requires a player prop");

  return (
    <div className={classNames("", className)} {...props}>
      <div
        className={classNames(
          "bg-white rounded-xl shadow-2xl flex flex-col gap-4 p-5",
          index === 1 ? "rotate-3" : "-rotate-4"
        )}
      >
        <div
          className={classNames(
            "bg-gradient-radial from-slate-800 to-slate-900",
            "text-white text-4xl md:text-6xl lg:text-9xl aspect-video md:aspect-square flex items-center justify-center rounded-2xl"
          )}
        >
          <AnimatePresence mode="wait">
            {state === "playing" && !deuce && advantage === 0 && (
              <motion.span
                transition={{ duration: 0.1, damping: 2 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={`score-${index}`}
              >
                {points[score[player]]}
              </motion.span>
            )}
            {(deuce || advantage === (index === 0 ? 2 : 1)) && (
              <motion.span
                transition={{ duration: 0.1, damping: 2 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={`deuce-${index}`}
              >
                Deuce
              </motion.span>
            )}
            {advantage === (index === 0 ? 1 : 2) && (
              <motion.span
                transition={{ duration: 0.1, damping: 2 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={`advantage-${index}`}
              >
                Advantage
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setScore({ [player]: score[player] + 1 })}
          className={classNames(
            "p-4 px-6 text-2xl md:text-4xl rounded-md shadow-xl bg-yellow-300",
            "transition hover:scale-110 hover:shadow-2xl hover:bg-yellow-400 active:scale-95"
          )}
        >
          {players[index]} Scored
        </button>
      </div>
    </div>
  );
};
