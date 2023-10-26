This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**[Give it a go](https://love-deuce-advantage.vercel.app/)**

## Currently

* `/` sets player names into a cookie, which is returned to the client in the `/game` route
* Game state managed in Context on the `<Game />` component

## Next step for 💩's & 😆's

* Remove client-side game state machine, and manage it all on the server via URL routes, eg `/player1/player1/15/30`
