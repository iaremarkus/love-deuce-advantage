"use client";

import classNames from "classnames";
import Link from "next/link";
import { useCookie } from "react-use";

import { GameProvider } from "./GameProvider";
import { Players } from "./Players";
import { Versus } from "./Versus";
import { Winner } from "./Winner";

export interface GameProps {
  className?: string;
}

export function Game({ className = "", ...props }: GameProps) {
  const [value, setValue] = useCookie("loveDeuceAdvantagePlayers");
  const teamNames = JSON.parse(value as string);

  return (
    <div className="flex flex-col gap-10 w-full items-center justify-center">
      <GameProvider players={teamNames}>
        <Versus />
        <Players />
        <Winner />
      </GameProvider>

      <Link
        href={"/reset"}
        className={classNames(
          "p-5 text-red-500 text-3xl  rounded-md",
          "transition hover:scale-110 focus:outline-none focus:bg-red-400 focus:bg-opacity-10"
        )}
      >
        Exit Game
      </Link>
    </div>
  );
}
