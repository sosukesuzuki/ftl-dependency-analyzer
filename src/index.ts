import path from "node:path";
import { analyze } from "./analyze";

const res = analyze("includes-01.ftl", path.join(process.cwd(), "fixtures"));
console.log(JSON.stringify(res));
