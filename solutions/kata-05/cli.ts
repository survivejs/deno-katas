import * as flags from "https://deno.land/std@0.181.0/flags/mod.ts";
import { build } from "./build.ts";
import { develop } from "./server.ts";
import { serve } from "./serve.ts";

const args = flags.parse(Deno.args, {
  boolean: ["build", "develop", "serve"],
  alias: {
    b: "build",
    d: "develop",
    s: "serve",
  },
});

if (args.build) {
  build();
} else if (args.develop) {
  develop();
} else if (args.serve) {
  serve();
}
