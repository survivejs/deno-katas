import { Page } from "./Page.ts";

async function build() {
  try {
    await Deno.mkdir("./dist");
  } catch (error) {
    // The directory might already exist
  }
  await Deno.writeTextFile(
    "./dist/index.html",
    Page(),
  );
}

if (import.meta.main) {
  build();
}

export { build };
