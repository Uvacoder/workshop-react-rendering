import React from "react";
import "./App.css";

import List from "./List";
// import Webview from "./Webview";

function App({ items }) {
  const [toggled, setToggled] = React.useState(false);

  const [clicks, setClicks] = React.useState(0);
  // const clicksRef = React.useRef(0);
  // let local = 0;

  function toggle(value) {
    if (value === false) {
      console.log(clicks);
      // console.log(clicksRef.current);
    }
    setToggled(value);
  }

  React.useEffect(() => {
    function handler() {
      // toggled && (clicksRef.current += 1);
      toggled && setClicks(prev => prev + 1);
      // local += 1;
    }
    document.addEventListener("mousemove", handler);
    return () => {
      document.removeEventListener("mousemove", handler);
    };
  }, [toggled]);

  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          checked={toggled}
          onChange={e => toggle(e.target.checked)}
        />
        &nbsp;
        {toggled ? "End recording" : "Start recording mousemove"}
      </label>
      {toggled && <small>(press, hold and move your cursor)</small>}
      <hr />

      {/*
      <Webview />
      <hr />
       */}

      <List items={items}></List>
    </div>
  );
}

export default App;
