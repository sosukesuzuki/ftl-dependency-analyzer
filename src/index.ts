import { isConditionNode } from "./nodes";
import { parse } from "./parser";
import { visit } from "./visit";

const template = `<#assign f=1>
<#if f gt 0>
  \${f} > 0
<#else>
  \${f} < 0
</#if>`;

const ast = parse(template);

visit(ast, (node) => {
  if (isConditionNode(node)) {
    console.log(node);
  }
});
