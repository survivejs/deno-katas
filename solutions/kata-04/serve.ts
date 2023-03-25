import { Server } from "https://deno.land/std@0.181.0/http/server.ts";
import * as path from "https://deno.land/std@0.181.0/path/mod.ts";

function serve({ directory, port }: {
  directory: string;
  port: number;
}) {
  const server = new Server({
    handler: async ({ url }) => {
      const { pathname } = new URL(url);
      const assetPath = path.join(
        directory,
        pathname,
        path.extname(pathname) ? "" : "index.html",
      );

      console.log(`Reading ${assetPath} from the file system`);

      try {
        const asset = await Deno.readTextFile(assetPath);

        return new Response(asset, {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
          },
          status: 200,
        });
      } catch (_) {
        console.error("Failed to find", assetPath);
      }

      return new Response("Not found", { status: 404 });
    },
  });
  const listener = Deno.listen({ port });

  server.serve(listener);
}

serve({ directory: "./dist", port: 8000 });
