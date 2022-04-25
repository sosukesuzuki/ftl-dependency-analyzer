import type {
  Expression,
  Literal,
} from "freemarker-parser/lib/interface/Params";

export const isLiteralExpression = (
  expression: Expression
): expression is Literal => expression.type === "Literal";

export { Expression, Literal };
