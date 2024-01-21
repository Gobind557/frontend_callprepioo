import  { Fragment } from "react";
import CollapseArrow from "./CollapseArrow"; // Assuming CollapseArrow is in the same directory

const NEW_LINE = "\n";
const ARRAY_BRACES = ["[", "]"];
const OBJECT_BRACES = ["{", "}"];
import {
  isArrayWithValues,
  isObjectWithKeys,
  indent,

} from "./utils";
// Assuming these utility functions are defined elsewhere

function JsonRenderer({ json, level = 1 }) {
  if (isArrayWithValues(json) || isObjectWithKeys(json)) {
    return <JsonObjectOrArray json={json} level={level + 1} />;
  }

  return JSON.stringify(json);
}

function JsonObjectOrArray({ json, level }) {
  const isArray = Array.isArray(json);
  const keys = isArray
    ? json.map((_, i) => JSON.stringify(i))
    : Object.keys(json);

  const [openBrace, closeBrace] = isArray ? ARRAY_BRACES : OBJECT_BRACES;

  const renderMaybeComma = (key) =>
    keys.indexOf(key) < keys.length - 1 ? "," : "";

  return (
    <CollapseArrow
      fallback={`${openBrace}${".".repeat(
        Math.min(keys.length, 3)
      )}${closeBrace}`}
    >
      {openBrace}
      {NEW_LINE}
      {keys.map((key, i) => (
        <Fragment key={i}>
          {indent(level)}
          {`${JSON.stringify(key)}: `}
          <JsonRenderer
            json={isArray ? json[Number(key)] : json[key]}
            level={level + 1}
          />
          {renderMaybeComma(key)}
          {NEW_LINE}
        </Fragment>
      ))}
      {indent(Math.max(0, level - 2))}
      {closeBrace}
    </CollapseArrow>
  );
}

export default JsonRenderer;
