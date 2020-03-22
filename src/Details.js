import React from "react";

function Details({ item, onDisplay }) {
  if (!item) {
    return null;
  }

  return (
    <div className="details">
      <strong>{item.name}</strong>
      <br />
      <small>{item.description}</small>
      <br />
      <br />
      <button onClick={onDisplay}>{item.quantity}</button>
    </div>
  );
}

export default React.memo(Details);
