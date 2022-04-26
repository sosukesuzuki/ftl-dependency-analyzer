import fs from "node:fs";

export function isExistsDir(maybeDirPath: string): boolean {
  try {
    const stat = fs.statSync(maybeDirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}
