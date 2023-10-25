import classNames from "classnames";

import { useGameContext } from "./GameProvider";

export interface VersusProps {
  className?: string;
}

export const Versus = ({ className = "", ...props }: VersusProps) => {
  const { players, gameState } = useGameContext();
  const { winner } = gameState;

  const [player1, player2] = players;

  if (winner) return null;

  return (
    <div className={classNames("", className)} {...props}>
      <h1 className="text-white text-3xl md:text-5xl lg:text-8xl text-center">
        {player1} <strong className="text-red-600">vs</strong> {player2}
      </h1>
    </div>
  );
};
