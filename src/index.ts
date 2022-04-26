import path from "node:path";
import { analyzeIncludeDirective } from "./analyze";
import { viewTree } from "./viewers";

const fileName = "includes-01.ftl";
const baseDir = path.join(process.cwd(), "fixtures");
const res = analyzeIncludeDirective(fileName, baseDir);

console.log(viewTree(res));
