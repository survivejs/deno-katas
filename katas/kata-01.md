# Deno kata 1 - Getting started

The purpose of this kata is to get your feet wet with Deno and get the environment running on your system so don't expect too much yet.

During the following katas, we'll build a small static site generator that includes basic functionality such as a development server, static build, and a command line interface for triggering the features. Essentially you can use the tool for building websites and applications of your own.

Note that if you use [Visual Studio Code](https://code.visualstudio.com/) as your editor, you can copy a good configuration from the root of this project from `.vscode/settings.json`. The configuration sets up Deno related plugins for the workspace and gives you features such as automatic formatting and access to Deno language server for completions and refactoring.

## Learning aims

The idea here is to get a Deno server running and cover the following:

* Running Deno
* Fetching data
* Creating Deno tasks

## Task

Complete the following:

1. Create a Deno script that emits "Hello world!" when you run it. Hint: You can use the `deno --help` command to figure out what to do with the runtime. [See also documentation](https://deno.land/manual@v1.32.1/getting_started/first_steps) for further instructions especially if you are not familiar with JavaScript yet.
2. Create a Deno script to [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) [Deno logo](https://deno.land/logo.svg) and print its contents to the console.
3. To make it convenient to run Deno in different ways, set up [Deno tasks](https://deno.land/manual@v1.32.1/tools/task_runner) for running the scripts.
