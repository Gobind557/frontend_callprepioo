export default function isObjectWithKeys(item) {
  return (
    typeof item === "object" &&
    !Array.isArray(item) &&
    item !== null &&
    Object.keys(item).length > 0
  );
}
