# Deno kata 3 - Creating initial development server

The purpose of this kata is to create a development server for our project.

## Learning aims

The idea here is to expand on what was learned earlier and cover the following:

* Returning HTML from the server
* Understanding template literals at a basic level
* Defining custom components that use template literals

## Task

Complete the following:

1. Create or expand the current server that returns a [basic HTML document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_document) at `/`.
2. Apply `text/html; charset=utf-8` as the `Content-Type` header of the returned document. Note how rendering changes at the browser.
3. Set up a file called `App.ts`, set up a function that returns `<p>This is my page</p>`, and export it (`export { App };`). Import the file to your server and render it through [a template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
4. Optional - Look up [ws module](https://deno.land/std@0.95.0/ws/README.md) and expose a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) from the server. Then set up a [esbuild](https://deno.land/x/esbuild) based build for the client portion and use [Deno.watchFs](https://deno.land/manual@v1.31.1/examples/file_system_events) to trigger it to refresh the client using `location.reload()`. Note that this is a highly advanced task and you should try it only if you have time and confidence with web technologies.
