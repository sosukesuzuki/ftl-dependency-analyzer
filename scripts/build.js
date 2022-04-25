import { build } from "esbuild";
import path from "node:path";
import fs from "node:fs";

const pkg = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8")
);

const external = Object.keys(pkg.dependencies ?? []);

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: ["./src/index.ts"],
  minify: true,
  bundle: true,
  outfile: "./dist/index.js",
  target: "node14.19",
  platform: "node",
  format: "esm",
  external,
};

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
