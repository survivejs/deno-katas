/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { renderToStaticMarkup } from "https://esm.sh/react-dom@18.2.0/server";
import { Page } from "./Page.tsx";

await Deno.mkdir("./dist");
await Deno.writeTextFile(
  "./dist/index.html",
  `<!DOCTYPE html>${renderToStaticMarkup(<Page />)}`,
);
