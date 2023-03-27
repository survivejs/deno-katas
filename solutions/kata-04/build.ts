import { Page } from "./Page.ts";

try {
  await Deno.mkdir("./dist");
} catch (error) {
  // The directory might already exist
}
await Deno.writeTextFile(
  "./dist/index.html",
  Page(),
);
