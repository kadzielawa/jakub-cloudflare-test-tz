export async function onRequest(context: PagesFunction) {
  const incoming = new URL(context.request.url);

  const upstream = new URL(incoming);
  upstream.protocol = "https:";
  upstream.hostname = "rooamtab.americanexpress.com";

  const headers = new Headers(context.request.headers);
  headers.set("Host", "rooamtab.americanexpress.com");

  return fetch(upstream, {
    method: context.request.method,
    headers,
    body:
      context.request.method === "GET" ||
      context.request.method === "HEAD"
        ? undefined
        : context.request.body,
    redirect: "manual",
  });
}
