import { Server } from "https://deno.land/std@0.181.0/http/server.ts";
import { Page } from "./Page.ts";

async function develop() {
  const port = 8000;
  const handler = (request: Request) => {
    const { pathname } = new URL(request.url);

    if (pathname === "/") {
      return new Response(
        Page(),
        {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
          },
          status: 200,
        },
      );
    }

    if (pathname === "/hello") {
      return new Response("Hello world!", { status: 200 });
    }

    return new Response("Not found", { status: 404 });
  };
  const server = new Server({ port, handler });

  console.log(`server listening on http://localhost:${port}`);

  await server.listenAndServe();
}

if (import.meta.main) {
  develop();
}

export { develop };
