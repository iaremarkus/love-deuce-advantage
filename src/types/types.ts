export type GameState = {
  state: "idle" | "playing" | "gameover";
  deuce: boolean;
  advantage: number;
  winner: number;
};

export type Score = {
  player1: number;
  player2: number;
};
