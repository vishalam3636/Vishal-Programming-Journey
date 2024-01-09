import React, { useState, useEffect, useRef } from "react";

export default function UseRefHook1() {
  const [renderCountStateBool, setRenderCountStateBool] = useState(false);

  const [val, setVal] = useState(0);
  const [text, setText] = useState("");

  // when using state to count render counts
  const [renderCountState, setRenderCountState] = useState(0);

  let renderCount = useRef(0);

  useEffect(() => {
    // when using state to calculate render counts
    // setRenderCountState((prev) => prev + 1);

    // // when using useRef to calculate render counts
    // renderCount.current = renderCount.current + 1;

    // above both handled by conditions
    renderCountStateBool
      ? setRenderCountState((prev) => prev + 1)
      : (renderCount.current = renderCount.current + 1);
  });

  function resetValues() {
    setVal(0);
    setText("");
    setRenderCountState(0);
    renderCount.current = 0;
  }

  return (
    <>
      <h4>useRef Hook Basic One</h4>
      <div className="component-container">
        <div className="rendercount-display">
          <strong>Render Count State: {renderCountState}</strong>

          <strong>Render Count Ref: {renderCount.current}</strong>

          <strong>
            Render Count {renderCountStateBool ? "State" : "useRef"}:{" "}
            {renderCountStateBool ? renderCountState : renderCount.current}
          </strong>

          <button
            onClick={() => setRenderCountStateBool(!renderCountStateBool)}
          >
            {renderCountStateBool
              ? "Do Render Count Using useRefs"
              : "Do Render Count Using State"}
          </button>

          <button onClick={resetValues}>Reset Values</button>
        </div>

        {/* below render counting using useRef hook */}
        <div className="content-container">
          <p>
            <strong>Val: {val}</strong>
            <button onClick={() => setVal((prev) => prev + 1)}>
              {" "}
              Increment
            </button>
            <button onClick={() => setVal((prev) => prev - 1)}>
              {" "}
              Decrement
            </button>
          </p>

          <p>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Text"
            />
          </p>
        </div>

        <div className="note-container">
          <h3>Note:</h3>

          <div className="notes">
            <p>
              👉🏾 The idea is that, first we have to understand how useEffect
              hook works. <br></br>
              📝 useEffect function takes two parameters-
              <ol type="i">
                <li>The callback function</li>
                <li>
                  The dependency parameter (if not passed, by default it takes
                  that no paremeter is passed and runs everytime the components
                  mounts or re-renders)
                </li>
              </ol>
              📝 useEffect runs everytime the components mounts. <br></br>
              📝 useEffect runs everytime any state is changed and the component
              re-renders. <br></br>
              📝 If the dependency parameter i.e; <strong>"[]"</strong> is
              passed, then the useEffect runs only a the time of mounting.{" "}
              <br></br>
              📝 If the dependecy parameter is passed with some state value i,e;
              the dependecy, then the useEffect hook will run everytime the
              state changes.
            </p>
            <p>
              👉🏾 In Our Example, we are trying to count the count everytime our
              component re-remders. <br></br>
              <br></br>
              <h6>
                Case1: When Using <em>"state"</em> to count renders
              </h6>
              📝 When the state changes, the component will render and updates{" "}
              <strong>RenderCountState</strong>, so a state is changed, the
              useEffect will run again, and again the state will change, and the
              useEffect will run again, again the state will change, and the
              useEffect will run again..... so this will stcuk in an infinty
              loop. <br></br>
              📝 ( If we try to pass second dependecy parameter empty, then when
              the component will re-render, thew state will get updated but the
              useEffect will not run.) <br></br>
              📝 (If we pass the second dependecny parameter and pass the states
              which are causing the re-rendering including the one which is
              storing the count of render count of our component. when the state
              which is storing the number of renders gets updated, then it'll
              again stuck in infinty loop) <br></br>
              📝 (Well, this counting renders everytime the state changes will
              work, then we'll have to pass every single state in dependecy
              array which when will change will cause re-rendering. But don't
              pass the state which is responsible for storing the count of
              renders, because when it'll be passed as dependecy, then, when
              we'll change the count of renders in useEffect, the state will
              change and since the count will also be a dependency, it'll enter
              into an infinite loop. )
            </p>
            <h6>
              Case2-: When Using <em>"useRef hook"</em> to count renders
            </h6>
            👉🏾 Since, the definition of "useRef" hook is-{" "}
            <em>
              <strong>
                "The useRef Hook allows you to persist values between renders.
                It can be used to store a mutable value that does not cause a
                re-render when updated."
              </strong>
            </em>{" "}
            <br></br>
            📝 Since useEffect runs only when{" "}
            <strong>the component mounts</strong> or{" "}
            <strong>the component re-renders</strong> or{" "}
            <strong>the state changes</strong> <br></br>
            📝 In our case, the component re-renders because of changes in val
            and text, and so the component re-renders and since dependency array
            is not passed, so useEffect will everytime the component renders.
            So, the useEffect runs and updated the renderCountRef. <br></br>
            📝 Here note point is thet, when any state is not changing, the
            component won't re-render. Even if we many button and update
            renerCount on button click, it won't be causing rendering of the
            component.
          </div>
        </div>
      </div>
    </>
  );
}
