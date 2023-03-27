import { App } from "./App.ts";

const Page = () => `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charSet="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    ${App()}
  </body>
</html>
`;

export { Page };
