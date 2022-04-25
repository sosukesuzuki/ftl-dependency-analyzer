const nodeNames = `import AbstractNode from '../nodes/abstract/AbstractNode';
import AssignNode from '../nodes/AssignNode';
import AttemptNode from '../nodes/AttemptNode';
import AutoEscNode from '../nodes/AutoEscNode';
import BreakNode from '../nodes/BreakNode';
import CommentNode from '../nodes/CommentNode';
import CompressNode from '../nodes/CompressNode';
import ConditionNode from '../nodes/ConditionNode';
import EscapeNode from '../nodes/EscapeNode';
import FlushNode from '../nodes/FlushNode';
import FtlNode from '../nodes/FtlNode';
import FunctionNode from '../nodes/FunctionNode';
import GlobalNode from '../nodes/GlobalNode';
import ImportNode from '../nodes/ImportNode';
import IncludeNode from '../nodes/IncludeNode';
import InterpolationNode from '../nodes/InterpolationNode';
import ListNode from '../nodes/ListNode';
import LocalNode from '../nodes/LocalNode';
import LtNode from '../nodes/LtNode';
import MacroCallNode from '../nodes/MacroCallNode';
import MacroNode from '../nodes/MacroNode';
import NoAutoEscNode from '../nodes/NoAutoEscNode';
import NoEscapeNode from '../nodes/NoEscapeNode';
import NtNode from '../nodes/NtNode';
import OutputFormatNode from '../nodes/OutputFormatNode';
import ReturnNode from '../nodes/ReturnNode';
import RtNode from '../nodes/RtNode';
import SettingNode from '../nodes/SettingNode';
import StopNode from '../nodes/StopNode';
import SwitchCaseNode from '../nodes/SwitchCaseNode';
import SwitchDefaultNode from '../nodes/SwitchDefaultNode';
import SwitchNode from '../nodes/SwitchNode';
import TextNode from '../nodes/TextNode';
import TNode from '../nodes/TNode';
import ItemsNode from '../nodes/Items';`
  .split("\n")
  .map((line) => line.split(" ")[1]);

// const f = nodeNames
//   .map(
//     (name) =>
//       `export const is${name} = (node: Node): node is ${name} => node.type === NodeTypes.${name.replace(
//         "Node",
//         ""
//       )};`
//   )
//   .join("\n");

const f = nodeNames.join(", ");

console.log(f);
