import classNames from "classnames";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { setPlayerNames } from "./actions";

export interface PlayersProps {
  className?: string;
}

export async function Players({ className = "", ...props }: PlayersProps) {
  const players = cookies().get("loveDeuceAdvantagePlayers");

  if (players) redirect("/game");

  return (
    <div className={classNames("w-full max-w-2xl mx-auto p-10 lg:p-0 flex flex-col gap-10", className)} {...props}>
      <h1 className="text-white text-3xl md:text-5xl lg:text-7xl text-center">
        Enter the names of the <br />
        players / teams 👇
      </h1>

      <form action={setPlayerNames} className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <input
            required
            type="text"
            name="player1"
            placeholder="Team / Player 1"
            className={classNames(
              "text-center p-4 text-purple-600 text-3xl md:text-5xl lg:text-4xl rounded-md shadow-2xl",
              "transition focus:scale-110"
            )}
          />
          <div className="text-3xl md:text-5xl lg:text-7xl text-center text-orange-400 leading-none pb-4">vs</div>
          <input
            required
            type="text"
            name="player2"
            placeholder="Team / Player 2"
            className={classNames(
              "text-center p-4 text-purple-600 text-3xl md:text-5xl lg:text-4xl rounded-md shadow-2xl",
              "transition focus:scale-110"
            )}
          />
        </div>

        <button
          type="submit"
          className={classNames(
            "p-5 text-yellow-500 text-3xl md:text-5xl lg:text-7xl rounded-md",
            "transition hover:scale-110 focus:outline-none focus:bg-yellow-400 focus:bg-opacity-10"
          )}
        >
          Let&apos;s go! 🎾
        </button>
      </form>
    </div>
  );
}
