# Qwik Kata 1 - Getting started

The purpose of this kata is to get your feet wet with Deno and get the environment running on your system so don't expect too much yet.

During the following katas, we'll build a small static site generator that includes basic functionality such as a development server, static build, and a command line interface for triggering the features. Essentially you can use the tool for building websites and applications of your own.

Note that if you use [Visual Studio Code](https://code.visualstudio.com/) as your editor, you can copy a good configuration from the root of this project from `.vscode/settings.json`. The configuration sets up Deno related plugins for the workspace and gives you features such as automatic formatting and access to Deno language server for completions and refactoring.

## Learning aims

The idea here is to get a Deno server running and cover the following:

* Running Deno
* Setting up a Deno server
* Creating an API endpoint
* Testing the endpoint
* Creating Deno tasks

## Task

Complete the following:

1. Create a Deno script that emits "Hello world!" when you run it. Hint: You can use the `deno --help` command to figure out what to do with the runtime. [See also documentation](https://deno.land/manual@v1.32.1/getting_started/first_steps) for further instructions especially if you are not familiar with JavaScript yet.
2. Create a Deno server that exposes [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) `/hello` endpoint and returns string `Hello world!` with status 200. For anything else, return `Not found` with status 404. Hint: It is a good idea to use [the Server class](https://deno.land/std@0.181.0/http/server.ts?s=Server) for the task although there are other ways to the same. To handle routing, check `request.url`. Hint: See the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) class as it can help in parsing the request. To avoid having to restart the server manually while developing, [use the --watch mode](https://deno.land/manual@v1.30.3/getting_started/command_line_interface#watch-mode) when running Deno.
3. Optional - To ensure that our server implementation works, test it using [Deno test utilities](https://deno.land/manual/basics/testing). In other words, set up a test case that uses [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to hit your endpoint and then ensure what it received matches `Hello world!`.
4. Optional - Test the failure case (`Not found`, 404) as well.
5. To make it convenient to run Deno in different ways, set up [Deno tasks](https://deno.land/manual@v1.32.1/tools/task_runner) for the targets (i.e., `hello` for the hello demo, `start` for running the server, `test` for running the tests against it).
