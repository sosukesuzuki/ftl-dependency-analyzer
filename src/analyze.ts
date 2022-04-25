import fs from "node:fs";
import path from "node:path";
import { isLiteralExpression } from "./expressions";
import { isIncludeNode } from "./nodes";
import { parse } from "./parser";
import { visit } from "./visit";

type DependencyGraph = {
  name: string;
  dependencies: DependencyGraph[];
};

export function analyzeIncludeDirective(
  ftlFileName: string,
  baseDir: string,
  graph: DependencyGraph = { name: ftlFileName, dependencies: [] }
): DependencyGraph {
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
      graph.dependencies.push(
        analyzeIncludeDirective(node.params.value, baseDir)
      );
    }
  });
  return graph;
}
