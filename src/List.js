import React from "react";

import { listReducer } from "./reducer";
import Item from "./Item";
import Details from "./Details";

function List({ items }) {
  const [list, dispatch] = React.useReducer(listReducer, items);
  const [selected, setSelected] = React.useState();

  function increment(id) {
    dispatch({ type: "increment", id });
  }
  function display() {
    alert(selected.quantity);
  }

  const optimizedIncrement = React.useCallback(increment, []);
  const optimizedShowDetails = React.useCallback(display, [selected]);

  return (
    <>
      <Details item={selected} onDisplay={optimizedShowDetails} />
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

            return (
              <Item
                key={item.id}
                item={item}
                select={setSelected}
                inc={optimizedIncrement}
                selected={item.id === selected?.id}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default React.memo(List);
