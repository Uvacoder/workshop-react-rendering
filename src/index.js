import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import shortid from "shortid";

import App from "./App";
import { getItems } from "./data";

const items = getItems(10).map(item => {
  return {
    ...item,
    id: shortid.generate()
  };
});

ReactDOM.render(<App items={items} />, document.getElementById("root"));

/**
 * @todo steps
 *
 * describe the app as it is
 * explain that there are no perf issues on few items / short lists (10)
 * display many items (100)
 * still no problems (show DOM, no deep structures)
 * explain Name component, with depth
 * set it to depth=10 (which simulates a real world use-case)
 * witness rendering problems
 * see the "missing key" error
 * explain that these should be unique, but we don't have one
 * generate a unique id, inside the loop
 * witness no change, actually more harm (everything is updated)
 * explain not to change the keys between renders, because it will update
 * better use index, but ideally set id first, in index.js
 * explain what does React use keys for

 * show a use-case for changing the key manually (iframe + link to Kent C. Dobbs article)
 * - kentcdodds.com/blog/understanding-reacts-key-prop
 * - egghead.io/lessons/react-use-the-key-prop-when-rendering-a-list-with-react
 *
 * witness that the DOM is not updated, but performance still sucks
 * explain difference between DOM updates & React rendering
 * introduce React Profiler, "see" the problems
 * extract Item component

 * use React.memo() to memoize the List component
 * - explain similarities with PureComponent
 * - witness improvement in rendering speed
 * 
 * pass handler to Item to increase individual count: () => inc()
 * - execute it in Item
 * - witness performance issues (everything is re-rendered)
 * 
 * explain passing inline functions to components, make the change
 * explain creating of new functions on every render
 * - useCallback() instead
 * - witness that only the changed component will re-render
 * 
 * add an expensive operation (regex) to Item
 * - witness slow re-renders on state updates, even if description is not changing
 * - useMemo() to optimize
 * - explain the difference compared to useCallback()
 * 
 * add an useEffect() to track clicks while the checkbox is active
 * - store the value to local state
 * - witness the re-rendering
 * 
 * switch from state to a local variable
 * - witness the reset on state change
 * - notive the warning in VSCode
 * - store it in useRef()
 * 
 * ??? need to give them something to work on
 * 1. optimize Name component
 * 2. display max "9+" and optimize using custom memo function
 */

//                             local variable   |   useState()   |   useRef()
// Persists between renders          ❌                ✅              ✅
// Triggers render on change         ❌                ✅              ❌
