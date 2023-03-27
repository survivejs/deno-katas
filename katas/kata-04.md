# Deno kata 4 - Setting up a static build

The purpose of this kata is to create a static build of our webpage and set up a static file server to host it. Technically the static build could easily be hosted on any static host online but it is good to understand what it could look like in technical terms.

## Learning aims

The idea here is to take the existing implementation and refactor it to support static rendering as a separate script. We cover the following:

* Setting up a static build script
* Extracting HTML so it can be used with both the development server and the production build
* Building a static file server

## Task

Complete the following:

1. Set up a `Page.ts` file that exposes server HTML to render. You should still reuse the earlier `App` component. Refactor your server to use the new file.
2. Set up a build script (`build.ts`) that takes the contents of `Page.ts`, renders it static as in the case of the server, and writes `dist/index.html`. Hint: Check out [Deno documentation](https://deno.land/manual@v1.31.1/examples/read_write_files) to understand how to write files. You may also want to [create the directory where to write](https://examples.deno.land/create-remove-directories) through Deno.
3. Optional - Set up a Deno task for the build process.
4. Optional - Use [Deno path utilities](https://deno.land/std/path/mod.ts) to clean up path handling.
5. Optional - Extract HTML rendering logic from the server and the build process to a separate module to share to avoid duplication.
6. Set up a static file server, say `serve.ts`, to serve the static version (`./dist` directory) of the website.
7. Optional - Set up a Deno task for the serve process.
