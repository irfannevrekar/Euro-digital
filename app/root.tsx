import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { createElement, type ReactNode } from "react";
import "../src/index.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/logo/logo.svg" />
        <link rel="preconnect" href="https://48yfcqwona.ucarecd.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://2c3wn7zfav.ucarecd.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://widget.voiceaiservice.com/react-widget-uv.css" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script dangerouslySetInnerHTML={{ __html: "window.process = { env: {} };" }} />
        <script src="https://widget.voiceaiservice.com/react-widget-uv.iife.js" />
        {createElement("react-widget-uv", {
          agent_id: "60066779-273a-4dc8-9d1e-ae0aa6c0108e",
          schema: "237bc2c6-ef87-4def-be84-701cd673df42",
          type: "customwidget",
        })}
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  const message = error instanceof Error ? error.message : "The requested page could not be loaded.";

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-4 text-4xl font-bold">Page unavailable</h1>
      <p>{message}</p>
    </main>
  );
}
