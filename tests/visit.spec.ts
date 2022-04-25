import test from "node:test";
import { visit } from "../src/visit";
import { parse } from "../src/parser";
import assert from "node:assert/strict";

test("visit", () => {
  const expected = ["Program", "Assign", "Text", "Condition", "Text"];
  const template = `<#assign f=1>
  <#if f gt 0>
    \${f} > 0
  <#else>
    \${f} < 0
  </#if>
  `;
  visit(parse(template), (node) => {
    if (node.type === expected[0]) {
      expected.shift();
    }
  });
  assert(expected.length === 0);
});
