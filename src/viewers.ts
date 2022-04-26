import { DependencyGraph } from "./analyze";

export type Viewer = (graph: DependencyGraph) => string;

export function viewTree(graph: DependencyGraph) {
  function view(graph: DependencyGraph, level = 0): string {
    const node = `|--${graph.name}\n`;
    const indent = " ".repeat(level * 2);
    const content = indent + node;
    const dependenciesContents = graph.dependencies
      .map((dependency) => view(dependency, level + 1))
      .join("");
    return content + dependenciesContents;
  }
  return view(graph);
}
