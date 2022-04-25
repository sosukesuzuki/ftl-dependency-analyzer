import {
  Node,
  isProgramNode,
  isAssignNode,
  isAttemptNode,
  isConditionNode,
  isGlobalNode,
  isListNode,
  isLocalNode,
  isMacroCallNode,
  isSwitchCaseNode,
  isSwitchDefaultNode,
  isSwitchNode,
  isItemsNode,
} from "./nodes";

export function visit(ast: Node, callback: (node: Node) => void) {
  callback(ast);
  if (isProgramNode(ast) || isAttemptNode(ast)) {
    for (const node of ast.body) {
      visit(node, callback);
    }
  } else if (
    isAssignNode(ast) ||
    isGlobalNode(ast) ||
    isLocalNode(ast) ||
    isMacroCallNode(ast) ||
    isItemsNode(ast)
  ) {
    if (ast.body) {
      for (const node of ast.body) {
        visit(node, callback);
      }
    }
  } else if (isConditionNode(ast)) {
    for (const node of ast.consequent) {
      visit(node, callback);
    }
    if (ast.alternate) {
      for (const node of ast.alternate) {
        visit(node, callback);
      }
    }
  } else if (isListNode(ast)) {
    for (const node of ast.body) {
      visit(node, callback);
    }
    if (ast.fallback) {
      for (const node of ast.body) {
        visit(node, callback);
      }
    }
  } else if (isSwitchCaseNode(ast) || isSwitchDefaultNode(ast)) {
    for (const node of ast.consequent) {
      visit(node, callback);
    }
  } else if (isSwitchNode(ast)) {
    for (const node of ast.cases) {
      visit(node, callback);
    }
  }
}
