# Deno kata 3 - Creating initial development server

The purpose of this kata is to create a development server for our project.

## Learning aims

The idea here is to expand on what was learned earlier and cover the following:

* Returning HTML from the server
* Understanding JSX at a basic level
* Defining custom JSX components

## Task

Complete the following:

1. Create or expand the current server that returns a [basic HTML document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomy_of_an_html_document) at `/`.
2. Apply `text/html; charset=utf-8` as the `Content-Type` header of the returned document. Note how rendering changes at the browser.
3. Port the HTML code to [JSX](https://react.dev/learn/writing-markup-with-jsx) and render it to HTML by using `renderToStaticMarkup` from `https://esm.sh/react-dom@18.2.0/server"`. Hint: Set `/** @jsxImportSource https://esm.sh/react@18.2.0 */` for the server file to avoid JSX related errors in the file or [do the setup globally](https://deno.land/manual@v1.32.1/advanced/jsx_dom/jsx). Also note that you cannot define `<!DOCTYPE html>` as JSX due to limitations of the format so you will have to return it otherwise.
4. Set up a file called `App.tsx` or `App.jsx` and move there within a function that is returning `<p>This is my page</p>`. Import the file to your server and render it through JSX (i.e., `<App />`).
5. Optional - Look up [ws module](https://deno.land/std@0.95.0/ws/README.md) and expose a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) from the server. Then set up a [esbuild](https://deno.land/x/esbuild) based build for the client portion and use [Deno.watchFs](https://deno.land/manual@v1.31.1/examples/file_system_events) to trigger it to refresh the client using `location.reload()`. Note that this is a highly advanced task and you should try it only if you have time and confidence with web technologies.
