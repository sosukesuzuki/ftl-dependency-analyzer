import path from "node:path";
import { execaSync } from "execa";
import { globbySync } from "globby";

const testDistDir = path.join(process.cwd(), "test-dist");

const testFilePaths = globbySync(testDistDir, { absolute: true });

function runNode(filePath) {
  return execaSync("node", [filePath]);
}

for (const testFilePath of testFilePaths) {
  const result = runNode(testFilePath);
  console.log(result.stdout);
  console.log("\n-----------\n");
}
