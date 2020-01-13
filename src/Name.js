import React from "react";

function Name({ value, depth = 0 }) {
  const arr = String(value).split("");

  return (
    <>
      {arr.map((letter, index) => {
        return (
          <React.Fragment key={index}>
            <Letter component={letter} depth={depth} />
          </React.Fragment>
        );
      })}
    </>
  );
}

function Letter({ component, depth }) {
  let result = <span>{component}</span>;

  if (depth === 0) {
    return result;
  }

  return <Letter component={result} depth={depth - 1} />;
}

export default React.memo(Name);
