import React from "react";

import Item from "./Item";

function List({ items }) {
  const [list, setList] = React.useState(items);

  function increment(id) {
    const index = list.findIndex(item => item.id === id);
    const item = list[index];

    list.splice(index, 1, { ...item, quantity: item.quantity + 1 });
    setList([...list]);
  }

  const optimizedIncrement = React.useCallback(increment, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
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
