import freemarker from "freemarker-parser";
import type { ProgramNode } from "./nodes";

const parser = new freemarker.Parser();

export function parse(template: string): ProgramNode {
  return parser.parse(template).ast;
}
