/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { Server } from "https://deno.land/std@0.181.0/http/server.ts";
import { renderToStaticMarkup } from "https://esm.sh/react-dom@18.2.0/server";
import { Page } from "./Page.tsx";

const port = 8000;
const handler = (request: Request) => {
  const { pathname } = new URL(request.url);

  if (pathname === "/") {
    return new Response(
      `<!DOCTYPE html>${renderToStaticMarkup(<Page />)}`,
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
