import React from "react";

function Name({ value, depth = 0 }) {
  if (depth === 0) {
    return <div>{value}</div>;
  }

  const arr = String(value).split("");

  return (
    <div>
      {arr.map((letter, index) => {
        return (
          <React.Fragment key={index}>
            <Letter letter={letter} depth={depth - 1} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

function Letter({ letter, depth }) {
  let result = <span>{letter}</span>;

  if (depth === 0) {
    return result;
  }

  return <Letter letter={result} depth={depth - 1} />;
}

export default React.memo(Name);
