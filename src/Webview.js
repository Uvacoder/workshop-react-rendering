import React from "react";
import "./Webview.css";

function Webview({ url = "https://dexonline.ro/" }) {
  const [key, setKey] = React.useState(0);

  function reset() {
    // updating the "key" state, which will be set on the "key" prop
    // will cause the "iframe" element to unmount/remount
    // which will basically reset the url
    setKey(prev => prev + 1);
  }

  return (
    <div className="webview">
      <div className="webview-toolbar">
        <button onClick={reset}>Reset</button>
      </div>

      <iframe
        key={key}
        src={url}
        title="webview"
        frameBorder="0"
        width="100%"
        height="400"
      ></iframe>
    </div>
  );
}

export default Webview;
