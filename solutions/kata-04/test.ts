import { assertEquals } from "https://deno.land/std@0.181.0/testing/asserts.ts";

Deno.test("hello test", async () => {
  const { status, text } = await fetch("http://localhost:8000/hello").then(
    async (
      res,
    ) => ({
      status: res.status,
      text: await res.text(),
    }),
  );

  assertEquals(status, 200);
  assertEquals(text, "Hello world!");
});

Deno.test("failure test", async () => {
  const { status, text } = await fetch("http://localhost:8000/failure").then(
    async (
      res,
    ) => ({
      status: res.status,
      text: await res.text(),
    })
  );

  assertEquals(status, 404);
  assertEquals(text, "Not found");
});
