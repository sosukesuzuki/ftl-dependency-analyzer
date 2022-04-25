import fs from "node:fs";
import path from "node:path";
import { isLiteralExpression } from "./expressions";
import { isIncludeNode } from "./nodes";
import { parse } from "./parser";
import { visit } from "./visit";

type Graph = {
  name: string;
  dependencies: Graph[];
};

export function analyze(
  ftlFileName: string,
  baseDir: string,
  graph: Graph = { name: ftlFileName, dependencies: [] }
): Graph {
  const ftlFilePath = path.join(baseDir, ftlFileName);
  const ftlFileData = fs.readFileSync(ftlFilePath, "utf-8");
  const ast = parse(ftlFileData);
  visit(ast, (node) => {
    if (
      isIncludeNode(node) &&
      node.params &&
      isLiteralExpression(node.params) &&
      typeof node.params.value === "string"
    ) {
      graph.dependencies.push(analyze(node.params.value, baseDir));
    }
  });
  return graph;
}
