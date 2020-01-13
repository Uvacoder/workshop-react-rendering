import React from "react";
import Name from "./Name";

function Item({ item, inc }) {
  // const isRegex = testProblematicRegex(item.description);

  // create a memoized value
  // that will be recomputed only when "item.description" will change
  const isRegex = React.useMemo(() => testProblematicRegex(item.description), [
    item.description
  ]);

  return (
    <tr>
      <td>
        {/* {item.product} */}
        <Name depth={10} value={item.product} />
      </td>
      <td>{item.quantity >= 10 ? "9+" : item.quantity}</td>
      <td>{isRegex ? "true" : "false"}</td>
      <td>
        <button onClick={() => inc(item.id)}>+</button>
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
