import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import contactHandler from "./api/contact";
import type { ViteDevServer } from "vite";

function readRequestBody(request: NodeJS.ReadableStream) {
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = [];

    request.on("data", (chunk: Buffer | string) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

function localApiMiddleware() {
  return {
    name: "local-api-contact",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (request, response, next) => {
        if (request.url?.split("?")[0] !== "/api/contact") {
          next();
          return;
        }

        if (request.method !== "POST") {
          response.statusCode = 405;
          response.setHeader("Allow", "POST");
          response.end(JSON.stringify({ error: "Method not allowed." }));
          return;
        }

        try {
          const body = await readRequestBody(request);

          await contactHandler(
            { method: request.method, body },
            {
              setHeader: (name: string, value: string) => response.setHeader(name, value),
              status: (statusCode: number) => ({
                json: (payload: unknown) => {
                  response.statusCode = statusCode;
                  response.setHeader("Content-Type", "application/json");
                  response.end(JSON.stringify(payload));
                },
              }),
            },
          );
        } catch (error) {
          console.error("Local contact API failed:", error);
          response.statusCode = 500;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ error: "Internal server error." }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [localApiMiddleware(), reactRouter(), tailwindcss()],
});
