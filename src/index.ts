import path from "node:path";
import { analyzeIncludeDirective } from "./analyze";

const fileName = "includes-01.ftl";
const baseDir = path.join(process.cwd(), "fixtures");
const res = analyzeIncludeDirective(fileName, baseDir);

console.log(JSON.stringify(res, null, 2));
