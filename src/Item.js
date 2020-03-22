import React from "react";
import Name from "./Name";

function Item({ item, inc, select, selected }) {
  // const isRegex = testProblematicRegex(item.description);

  // create a memoized value
  // that will be recomputed only when "item.description" will change
  const isRegex = React.useMemo(() => testProblematicRegex(item.description), [
    item.description
  ]);

  return (
    <tr className={!!selected ? "item-selected" : ""}>
      <td>
        <Name depth={1} value={item.name} />
        {isRegex ? "✅" : "🚫"}
        <small>{item.description}</small>
      </td>
      <td>{item.quantity >= 10 ? "9+" : item.quantity}</td>
      <td>
        <button onClick={() => inc(item.id)}>+</button>
        <button onClick={() => select(item)}>></button>
      </td>
    </tr>
  );
}

export default React.memo(Item, isUnchanged);

function isUnchanged(prevProps, nextProps) {
  return prevProps.item.quantity >= 10 && nextProps.item.quantity >= 10;
}

function testProblematicRegex(str) {
  // this regex is very slow when passing a string like "accccccccccd"
  return /a(b|c+)+d/.test(str);
}
