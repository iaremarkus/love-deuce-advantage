"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setPlayerNames(data: FormData) {
  const player1 = data.get("player1");
  const player2 = data.get("player2");

  cookies().set("loveDeuceAdvantagePlayers", JSON.stringify([player1, player2]));

  redirect("/game");
}
