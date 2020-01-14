# React Rendering Performance Optimizations (Advanced)

It is said that React is "fast enough". This is very true for most applications.

Rendering performance problems might occur in 2 different situations: we render many components or native elements, or we perform very frequent updates, during animations or gestures.

We'll take an hands-on approach to identify performance problems, measure them using the React Profiler and we'll fix them using various optimization techniques such as __React.memo()__, __useMemo()__, __useCallback()__ and __useRef()__.

At the end of this workshop you should be able to identify and fix performance problems in React, but also gain a better understanding of React rendering pipeline.

__NOTE__: this workshop will use function components and hooks.

## Setup

```
$ git clone https://github.com/andreipfeiffer/workshop-react-rendering.git
$ cd workshop-react-rendering
$ npm install
$ npm start
```

The app should start at the address `http://localhost:3000`. If you can see a table displayed, you're all set.

## What you'll learn?

- understand when do rendering performance problems occur;
- identify them with React Profiler;
- use `React.memo()` to optimize component unnecessary re-renders;
- use `useCallback()` hook to memoize function props;
- use `useMemo()` hook to memoize expensive computations;
- use `useRef()` hook to skip unneeded re-renders;
- understand the difference between renders and DOM updates;
- understand React's reconciliation process;
- how to use `keys` to force re-renders;

## What you'll need?

1. laptop + power-plug
2. code editor
3. [Node.js](https://nodejs.org/en/download/) 10.0+ installed
4. [React Profiler](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler) installed

## Who is this workshop for?

You must have prior experience with React to attend this workshop.

Being an advanced workshop, we __won't cover the basics__ of React: the syntax, what components are, what is state and how it works, component lifecycle, etc.
