"use server";

import { Suspense } from "react";

import { Players } from "components";

export default async function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Suspense fallback="🎾">
        <Players />
      </Suspense>
    </main>
  );
}
