import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import { useGameContext } from "./GameProvider";

export interface WinnerProps {
  className?: string;
}

export function Winner({ className = "", ...props }: WinnerProps) {
  const { gameState, players, reset } = useGameContext();
  const { width, height } = useWindowSize();
  const { winner } = gameState;

  if (!winner) return null;

  return (
    <AnimatePresence>
      <Confetti width={width} height={height} />
      <motion.div
        transition={{ duration: 0.1, damping: 2 }}
        initial={{ scale: 0 }}
        exit={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex flex-col gap-10 items-center justify-center"
      >
        <h1 className="text-white text-3xl md:text-5xl lg:text-8xl text-center">
          Winner: <strong className="text-green-500">{players[winner - 1]}</strong>
        </h1>
        <button
          onClick={reset}
          className={classNames(
            "p-5 text-yellow-500 text-3xl md:text-5xl lg:text-7xl rounded-md",
            "transition hover:scale-110 focus:outline-none focus:bg-yellow-400 focus:bg-opacity-10"
          )}
        >
          Play again 🎾
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
