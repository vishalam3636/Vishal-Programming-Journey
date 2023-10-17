import React, { useState } from "react";
import "./styles.css";

import Task_00 from "./pages/task_00/Task_00";
import Task_01 from "./pages/task_01/Task_01";
import Task_02 from "./pages/task_02/Task_02";
import Task_03 from "./pages/task_03/Task_03";
import Task_04 from "./pages/task_04/Task_04";
import Task_05 from "./pages/task_05/Task_05";
import Task_06 from "./pages/task_06/Task_06";
import Task_07 from "./pages/task_07/Task_07";
import Task_08 from "./pages/task_08/Task_08";
import Task_09 from "./pages/task_09/Task_09";

function App() {
  const [displayApp, setDisplayApp] = useState(false);

  function displayProject(val) {
    setDisplayApp(val);
  }

  return (
    <div className="app">
      <Task_00 displayProject={displayProject} />
      {displayApp && (
        <>
          <Task_01 />
          <Task_02 />
          <Task_03 />
          <Task_04 />
          <Task_05 />
          <Task_06 />
          <Task_07 />
          <Task_08 />
          <Task_09 />
        </>
      )}
    </div>
  );
}

export default App;
