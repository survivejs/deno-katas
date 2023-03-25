const url = "https://deno.land/logo.svg";
const html = await fetch(url).then((res) => res.text());

console.log(html);
