# Deno kata 2 - Creating a server

The purpose of this kata is to build a web server with Deno.

## Learning aims

The idea here is to get a Deno server running and cover the following:

* Setting up a Deno server
* Creating an API endpoint
* Testing the endpoint

## Task

Complete the following:

1. Create a Deno server that exposes [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) `/hello` endpoint and returns string `Hello world!` with status 200. For anything else, return `Not found` with status 404. Hint: It is a good idea to use [the Server class](https://deno.land/std@0.181.0/http/server.ts?s=Server) for the task although there are other ways to the same. To handle routing, check `request.url`. Hint: See the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) class as it can help in parsing the request. To avoid having to restart the server manually while developing, [use the --watch mode](https://deno.land/manual@v1.30.3/getting_started/command_line_interface#watch-mode) when running Deno.
2. To ensure that our server implementation works, test it using [Deno test utilities](https://deno.land/manual/basics/testing). In other words, set up a test case that uses [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to hit your endpoint and then ensure what it received matches `Hello world!`.
3. Optional - Test the failure case (`Not found`, 404) as well.
4. Add Deno tasks for the added server and test functionalities.
