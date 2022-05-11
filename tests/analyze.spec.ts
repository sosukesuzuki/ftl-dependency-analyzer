import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { analyzeIncludeDirective } from "../src/analyze";
import { getFixturesPath } from "./utils/fixtures";

test("analyzeIncludeDirective", () => {
  const expectedDependencies = [
    {
      name: "/includes-02.ftl",
      dependencies: [
        {
          name: "/basic-01.ftl",
          dependencies: [],
        },
        {
          name: "/basic-02.ftl",
          dependencies: [],
        },
      ],
    },
    {
      name: "/basic-03.ftl",
      dependencies: [],
    },
  ];
  const fixturesPath = getFixturesPath();
  const result = analyzeIncludeDirective(
    path.join(fixturesPath, "includes-01.ftl"),
    getFixturesPath()
  );
  assert.deepEqual(result.dependencies, expectedDependencies);
});
