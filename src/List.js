import React from "react";

import { listReducer } from "./reducer";
import Item from "./Item";

function List({ items }) {
  const [list, dispatch] = React.useReducer(listReducer, items);

  function increment(id) {
    dispatch({ type: "increment", id });
  }

  const optimizedIncrement = React.useCallback(increment, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => {
          // const id = shortid.generate();
          // const id = i;

          return <Item key={item.id} item={item} inc={optimizedIncrement} />;
        })}
      </tbody>
    </table>
  );
}

export default React.memo(List);
