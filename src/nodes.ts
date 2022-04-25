import type ProgramNode from "freemarker-parser/lib/nodes/ProgramNode";
import type AbstractNode from "freemarker-parser/lib/nodes/abstract/AbstractNode";
import type AssignNode from "freemarker-parser/lib/nodes/AssignNode";
import type AttemptNode from "freemarker-parser/lib/nodes/AttemptNode";
import type AutoEscNode from "freemarker-parser/lib/nodes/AutoEscNode";
import type BreakNode from "freemarker-parser/lib/nodes/BreakNode";
import type CommentNode from "freemarker-parser/lib/nodes/CommentNode";
import type CompressNode from "freemarker-parser/lib/nodes/CompressNode";
import type ConditionNode from "freemarker-parser/lib/nodes/ConditionNode";
import type EscapeNode from "freemarker-parser/lib/nodes/EscapeNode";
import type FlushNode from "freemarker-parser/lib/nodes/FlushNode";
import type FtlNode from "freemarker-parser/lib/nodes/FtlNode";
import type FunctionNode from "freemarker-parser/lib/nodes/FunctionNode";
import type GlobalNode from "freemarker-parser/lib/nodes/GlobalNode";
import type ImportNode from "freemarker-parser/lib/nodes/ImportNode";
import type IncludeNode from "freemarker-parser/lib/nodes/IncludeNode";
import type InterpolationNode from "freemarker-parser/lib/nodes/InterpolationNode";
import type ListNode from "freemarker-parser/lib/nodes/ListNode";
import type LocalNode from "freemarker-parser/lib/nodes/LocalNode";
import type LtNode from "freemarker-parser/lib/nodes/LtNode";
import type MacroCallNode from "freemarker-parser/lib/nodes/MacroCallNode";
import type MacroNode from "freemarker-parser/lib/nodes/MacroNode";
import type NoAutoEscNode from "freemarker-parser/lib/nodes/NoAutoEscNode";
import type NoEscapeNode from "freemarker-parser/lib/nodes/NoEscapeNode";
import type NtNode from "freemarker-parser/lib/nodes/NtNode";
import type OutputFormatNode from "freemarker-parser/lib/nodes/OutputFormatNode";
import type ReturnNode from "freemarker-parser/lib/nodes/ReturnNode";
import type RtNode from "freemarker-parser/lib/nodes/RtNode";
import type SettingNode from "freemarker-parser/lib/nodes/SettingNode";
import type StopNode from "freemarker-parser/lib/nodes/StopNode";
import type SwitchCaseNode from "freemarker-parser/lib/nodes/SwitchCaseNode";
import type SwitchDefaultNode from "freemarker-parser/lib/nodes/SwitchDefaultNode";
import type SwitchNode from "freemarker-parser/lib/nodes/SwitchNode";
import type TextNode from "freemarker-parser/lib/nodes/TextNode";
import type TNode from "freemarker-parser/lib/nodes/TNode";
import type ItemsNode from "freemarker-parser/lib/nodes/Items";
import { NodeTypes } from "freemarker-parser/lib/enum/NodeTypes.js";

export type Node =
  | AbstractNode
  | AssignNode
  | AttemptNode
  | AutoEscNode
  | BreakNode
  | CommentNode
  | CompressNode
  | ConditionNode
  | EscapeNode
  | FlushNode
  | FtlNode
  | FunctionNode
  | GlobalNode
  | ImportNode
  | IncludeNode
  | InterpolationNode
  | ListNode
  | LocalNode
  | LtNode
  | MacroCallNode
  | MacroNode
  | NoAutoEscNode
  | NoEscapeNode
  | NtNode
  | OutputFormatNode
  | ReturnNode
  | RtNode
  | SettingNode
  | StopNode
  | SwitchCaseNode
  | SwitchDefaultNode
  | SwitchNode
  | TextNode
  | TNode
  | ItemsNode
  | ProgramNode;

export const isProgramNode = (node: Node): node is ProgramNode =>
  node.type === NodeTypes.Program;
export const isAssignNode = (node: Node): node is AssignNode =>
  node.type === NodeTypes.Assign;
export const isAttemptNode = (node: Node): node is AttemptNode =>
  node.type === NodeTypes.Attempt;
export const isAutoEscNode = (node: Node): node is AutoEscNode =>
  node.type === NodeTypes.AutoEsc;
export const isBreakNode = (node: Node): node is BreakNode =>
  node.type === NodeTypes.Break;
export const isCommentNode = (node: Node): node is CommentNode =>
  node.type === NodeTypes.Comment;
export const isCompressNode = (node: Node): node is CompressNode =>
  node.type === NodeTypes.Compress;
export const isConditionNode = (node: Node): node is ConditionNode =>
  node.type === NodeTypes.Condition;
export const isEscapeNode = (node: Node): node is EscapeNode =>
  node.type === NodeTypes.Escape;
export const isFlushNode = (node: Node): node is FlushNode =>
  node.type === NodeTypes.Flush;
export const isFtlNode = (node: Node): node is FtlNode =>
  node.type === NodeTypes.Ftl;
export const isFunctionNode = (node: Node): node is FunctionNode =>
  node.type === NodeTypes.Function;
export const isGlobalNode = (node: Node): node is GlobalNode =>
  node.type === NodeTypes.Global;
export const isImportNode = (node: Node): node is ImportNode =>
  node.type === NodeTypes.Import;
export const isIncludeNode = (node: Node): node is IncludeNode =>
  node.type === NodeTypes.Include;
export const isInterpolationNode = (node: Node): node is InterpolationNode =>
  node.type === NodeTypes.Interpolation;
export const isListNode = (node: Node): node is ListNode =>
  node.type === NodeTypes.List;
export const isLocalNode = (node: Node): node is LocalNode =>
  node.type === NodeTypes.Local;
export const isLtNode = (node: Node): node is LtNode =>
  node.type === NodeTypes.Lt;
export const isMacroCallNode = (node: Node): node is MacroCallNode =>
  node.type === NodeTypes.MacroCall;
export const isMacroNode = (node: Node): node is MacroNode =>
  node.type === NodeTypes.Macro;
export const isNoAutoEscNode = (node: Node): node is NoAutoEscNode =>
  node.type === NodeTypes.NoAutoEsc;
export const isNoEscapeNode = (node: Node): node is NoEscapeNode =>
  node.type === NodeTypes.NoEscape;
export const isNtNode = (node: Node): node is NtNode =>
  node.type === NodeTypes.Nt;
export const isOutputFormatNode = (node: Node): node is OutputFormatNode =>
  node.type === NodeTypes.OutputFormat;
export const isReturnNode = (node: Node): node is ReturnNode =>
  node.type === NodeTypes.Return;
export const isRtNode = (node: Node): node is RtNode =>
  node.type === NodeTypes.Rt;
export const isSettingNode = (node: Node): node is SettingNode =>
  node.type === NodeTypes.Setting;
export const isStopNode = (node: Node): node is StopNode =>
  node.type === NodeTypes.Stop;
export const isSwitchCaseNode = (node: Node): node is SwitchCaseNode =>
  node.type === NodeTypes.SwitchCase;
export const isSwitchDefaultNode = (node: Node): node is SwitchDefaultNode =>
  node.type === NodeTypes.SwitchDefault;
export const isSwitchNode = (node: Node): node is SwitchNode =>
  node.type === NodeTypes.Switch;
export const isTextNode = (node: Node): node is TextNode =>
  node.type === NodeTypes.Text;
export const isTNode = (node: Node): node is TNode => node.type === NodeTypes.T;
export const isItemsNode = (node: Node): node is ItemsNode =>
  node.type === NodeTypes.Items;

export {
  ProgramNode,
  AbstractNode,
  AssignNode,
  AttemptNode,
  AutoEscNode,
  BreakNode,
  CommentNode,
  CompressNode,
  ConditionNode,
  EscapeNode,
  FlushNode,
  FtlNode,
  FunctionNode,
  GlobalNode,
  ImportNode,
  IncludeNode,
  InterpolationNode,
  ListNode,
  LocalNode,
  LtNode,
  MacroCallNode,
  MacroNode,
  NoAutoEscNode,
  NoEscapeNode,
  NtNode,
  OutputFormatNode,
  ReturnNode,
  RtNode,
  SettingNode,
  StopNode,
  SwitchCaseNode,
  SwitchDefaultNode,
  SwitchNode,
  TextNode,
  TNode,
  ItemsNode,
};
