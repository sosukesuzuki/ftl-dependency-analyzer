import fs from "node:fs";
import path from "node:path";
import { isLiteralExpression } from "./expressions";
import { isIncludeNode } from "./nodes";
import { parse } from "./parser";
import { visit } from "./visit";

export type DependencyGraph = {
  name: string;
  dependencies: DependencyGraph[];
};

let isFirst = true;

export function analyzeIncludeDirective(
  ftlFileName: string,
  baseDir: string,
  graph: DependencyGraph = { name: ftlFileName, dependencies: [] }
): DependencyGraph {
  const ftlFilePath = isFirst ? ftlFileName : path.join(baseDir, ftlFileName);
  if (isFirst) {
    isFirst = false;
  }
  const ftlFileData = fs.readFileSync(ftlFilePath, "utf-8");
  const ast = parse(ftlFileData);
  visit(ast, (node) => {
    if (
      isIncludeNode(node) &&
      node.params &&
      isLiteralExpression(node.params) &&
      typeof node.params.value === "string"
    ) {
      graph.dependencies.push(
        analyzeIncludeDirective(node.params.value, baseDir)
      );
    }
  });
  return graph;
}
