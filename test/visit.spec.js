import S from"node:test";import{NodeTypes as t}from"freemarker-parser/lib/enum/NodeTypes.js";var s=e=>e.type===t.Program,N=e=>e.type===t.Assign,i=e=>e.type===t.Attempt;var p=e=>e.type===t.Condition;var n=e=>e.type===t.Global;var m=e=>e.type===t.List,a=e=>e.type===t.Local;var c=e=>e.type===t.MacroCall;var f=e=>e.type===t.SwitchCase,l=e=>e.type===t.SwitchDefault,y=e=>e.type===t.Switch;var u=e=>e.type===t.Items;function d(e,r){if(r(e),s(e)||i(e))for(let o of e.body)d(o,r);else if(N(e)||n(e)||a(e)||c(e)||u(e)){if(e.body)for(let o of e.body)d(o,r)}else if(p(e)){for(let o of e.consequent)d(o,r);if(e.alternate)for(let o of e.alternate)d(o,r)}else if(m(e)){for(let o of e.body)d(o,r);if(e.fallback)for(let o of e.body)d(o,r)}else if(f(e)||l(e))for(let o of e.consequent)d(o,r);else if(y(e))for(let o of e.cases)d(o,r)}import b from"freemarker-parser";var C=new b.Parser;function x(e){return C.parse(e).ast}import k from"node:assert/strict";S("visit",()=>{let e=["Program","Assign","Text","Condition","Text"];d(x(`<#assign f=1>
  <#if f gt 0>
    \${f} > 0
  <#else>
    \${f} < 0
  </#if>
  `),o=>{o.type===e[0]&&e.shift()}),k(e.length===0)});
