import { build } from "esbuild";
import path from "node:path";
import fs from "node:fs";
import { globbySync } from "globby";

const pkg = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8")
);

const external = Object.keys(pkg.dependencies ?? []);

const mode = process.env.MODE ?? "source";

const io = {
  source: {
    entryPoints: ["./src/index.ts", "./src/cli.ts"],
    outdir: "./lib",
  },
  test: {
    entryPoints: globbySync("./tests/*.spec.ts"),
    outdir: "./test",
  },
};

/** @type {import('esbuild').BuildOptions} */
const options = {
  minify: true,
  bundle: true,
  target: "node14.19",
  platform: "node",
  format: "esm",
  external,
  ...io[mode],
};

if (process.env.WATCH === "true") {
  options.watch = {
    onRebuild(error, result) {
      if (error) {
        console.error("watch build failed:", error);
      } else {
        console.log("watch build succeeded:", result);
      }
    },
  };
}

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
