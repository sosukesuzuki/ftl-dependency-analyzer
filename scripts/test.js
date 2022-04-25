import path from "node:path";
import { execaSync } from "execa";
import { globbySync } from "globby";

const testDistDir = path.join(process.cwd(), "test-dist");

const testFilePaths = globbySync(testDistDir, { absolute: true });

function runNode(filePath) {
  return execaSync("node", [filePath]);
}

for (const testFilePath of testFilePaths) {
  try {
    const result = runNode(testFilePath);
    console.log(result.stdout);
  } catch (e) {
    console.log(e.stdout);
  }

  console.log("\n-----------\n");
}
