# Deno kata 5 - Creating a command line interface

The purpose of this kata is to wrap up the work by creating a command line interface (CLI) for it. The point is to show how Deno can be used to create small command line utilities.

## Learning aims

The idea is to learn how to create CLIs with Deno and we cover the following:

* Reading command line arguments
* Exposing utilities from our pre-existing modules
* Adding parameters to specific commands

## Task

Complete the following:

1. Set up a `cli.ts` file and make it read the following flags: `-b --build` for build, `-d --develop` for development mode, and `-s --serve` for serving the project. [Use the flags module](https://deno.land/std/flags/mod.ts) for the purpose. After running the script (`deno run ./cli.ts -b`), you should see something like `true false false`. Hint: You can use `Deno.args` to access command line arguments after running the script through deno.
2. Expose build, development, and serving related functionality from the modules we created earlier and connect them to each matching flag within the CLI we just created. Hint: If you want to keep the modules self-executable still, you can use a `if(import.meta.main) { ... }` kind of block to detect that the modules were run as standadlone.
3. Optional - Extract and expose `-p --port` option that can be used together with `-d` and `-s`.
4. Optional - Extract `-o --output` option that can be used together with `-b` and `-s` to define where to emit files and where to serve them from.
5. Optional - Set up a `-h --help` flag that prints out documentation for the CLI that shows available flags and their functions.
