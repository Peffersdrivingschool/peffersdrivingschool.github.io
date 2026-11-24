import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const projectRoot = process.cwd();
const outputFile = path.join(projectRoot, "dist", "public", "index.html");

const vite = await createServer({
  configFile: path.join(projectRoot, "vite.config.ts"),
  root: path.join(projectRoot, "client"),
  appType: "custom",
  logLevel: "error",
  server: {
    middlewareMode: true,
  },
});

try {
  const module = await vite.ssrLoadModule("/src/pages/Home.tsx");
  const Home = module.default as React.ComponentType;
  const markup = renderToStaticMarkup(React.createElement(Home)).replace(
    /\sdata-loc="[^"]*"/g,
    "",
  );
  const html = fs.readFileSync(outputFile, "utf8");
  const rootTag = '<div id="root"></div>';

  if (!html.includes(rootTag)) {
    throw new Error("Could not find the empty root element to prerender.");
  }

  fs.writeFileSync(outputFile, html.replace(rootTag, `<div id="root">${markup}</div>`));
  console.log(`Prerendered homepage HTML (${markup.length.toLocaleString()} characters).`);
} finally {
  await vite.close();
}
