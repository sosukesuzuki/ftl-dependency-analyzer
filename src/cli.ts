import path from "node:path";
import meow, { type TypedFlags } from "meow";
import { analyzeIncludeDirective } from "./analyze";
import { isExistsDir } from "./fs-utils";
import { Viewer, viewTree } from "./viewers";

type Flags = {
  format: {
    type: "string";
    default: string;
    alias: string;
  };
  base: {
    type: "string";
    alias: "b";
  };
};

const cli = meow<Flags>(
  `
    Usage
      $ ftl-dependency-analyzer <input>

    Options
      --format, -f
      --base, -b

    Examples
      $ ftl-dependency-analyze ./index.ftl --format=tree`,
  {
    importMeta: import.meta,
    flags: {
      format: {
        type: "string",
        default: "tree",
        alias: "f",
      },
      base: {
        type: "string",
        alias: "b",
      },
    },
  }
);

function getViewer(format: string): Viewer {
  switch (format) {
    case "tree": {
      return viewTree;
    }
    default:
      throw new Error(`${format} format is invalida.`);
  }
}

function processCli(input: string, flags: TypedFlags<Flags>) {
  if (!input) {
    throw new Error("input is required.");
  }

  const baseDirPath = flags.base ? flags.base : path.dirname(input);
  if (!isExistsDir(baseDirPath)) {
    throw new Error(`${flags.base} not found.`);
  }

  const graph = analyzeIncludeDirective(path.basename(input), baseDirPath);
  const viewer = getViewer(flags.format);
  const result = viewer(graph);

  console.log(result);
}

processCli(cli.input[0], cli.flags);
