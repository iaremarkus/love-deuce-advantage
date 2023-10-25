import classNames from "classnames";

import { useGameContext } from "./GameProvider";
import { PlayerCard } from "./PlayerCard";

export interface PlayersProps {
  className?: string;
}

export const Players = ({ className = "", ...props }: PlayersProps) => {
  const { gameState } = useGameContext();

  const { winner } = gameState;

  return (
    <div className={classNames("", className)} {...props}>
      {winner < 1 && (
        <div className="grid grid-cols-2 gap-10">
          <PlayerCard player={"player1"} />
          <PlayerCard player="player2" />
        </div>
      )}
    </div>
  );
};
