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
      callback(node);
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
        callback(node);
      }
    }
  } else if (isConditionNode(ast)) {
    for (const node of ast.consequent) {
      callback(node);
    }
    if (ast.alternate) {
      for (const node of ast.alternate) {
        callback(node);
      }
    }
  } else if (isListNode(ast)) {
    for (const node of ast.body) {
      callback(node);
    }
    if (ast.fallback) {
      for (const node of ast.body) {
        callback(node);
      }
    }
  } else if (isSwitchCaseNode(ast) || isSwitchDefaultNode(ast)) {
    for (const node of ast.consequent) {
      callback(node);
    }
  } else if (isSwitchNode(ast)) {
    for (const node of ast.cases) {
      callback(node);
    }
  }
}
