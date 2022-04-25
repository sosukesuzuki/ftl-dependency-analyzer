import fs from "node:fs";
import path from "node:path";

export function getFixturesPath(): string {
  return path.join(process.cwd(), "fixtures");
}

export function getFixturePaths(): string[] {
  const fixturedPath = getFixturesPath();
  const fixturesFileData = fs.readdirSync(fixturedPath, {
    withFileTypes: true,
  });
  return fixturesFileData
    .map((fixture) =>
      fixture.isDirectory() ? "" : path.join(fixturedPath, fixture.name)
    )
    .filter(Boolean);
}

export function* getFixtures(): Generator<string> {
  const fixturePaths = getFixturePaths();
  for (const fixturePath of fixturePaths) {
    yield fs.readFileSync(fixturePath, "utf-8");
  }
}
