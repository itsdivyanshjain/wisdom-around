export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // if (url.pathname === "/health") {
    //   return new Response("OK");
    // }

    if (url.pathname.startsWith("/api/send")) {
        const target = new URL("https://gateway.umami.is/api/send");
        // Clone the request so the body, method, and most headers are preserved
        const proxyRequest = new Request(target, request);
        return fetch(proxyRequest);
    }

    // Existing Hugo asset serving
    return env.ASSETS.fetch(request);
  }
}