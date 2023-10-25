"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { Game } from "components";

export default async function TheGame() {
  const players = cookies().get("loveDeuceAdvantagePlayers");

  if (!players) redirect("/");

  return (
    <main className="flex items-center justify-center min-h-screen">
      <Suspense fallback="🎾">
        <Game />
      </Suspense>
    </main>
  );
}
