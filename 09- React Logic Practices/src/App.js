import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import Counter from "./tasks-folder/01-counter/Counter";
import ToggleSwitch from "./tasks-folder/02-toggle _switch/ToggleSwitch";
import Form from "./tasks-folder/03-form/Form";
import Timer from "./tasks-folder/04-timer/TImer";
import TodoList from "./tasks-folder/05-todo_list/TodoList";
import DropdownMenu from "./tasks-folder/06-dropdown_menu/DropdownMenu";
import TabsComponent from "./tasks-folder/07-tabs_component/TabsComponent";
import ApiRequest from "./tasks-folder/08-api_request/ApiRequest";
import Modal from "./tasks-folder/09-modal/Modal";
import MultiStepForm from "./tasks-folder/10-multi-step_form/MultiStepForm";
import PropAndPropDrilling from "./tasks-folder/11-props and prop drilling/PropsAndPropDrilling";
import ContextAPI from "./tasks-folder/12-context_API/ContextAPI";
import UseRefHookScrollAccordion from "./tasks-folder/13-useRef hook scroll accordion/UseRefHookScrollAccordion";
import UseRefHook from "./tasks-folder/14-useRef Hook Basics/UseRefHook";

function App() {
  return (
    <div className="app">
      {/* Task 1: Implement a Counter */}
      <BrowserRouter>
        <IndexPage />
        <Routes>
          {/* <Route exact path='/' element={<IndexPage />} /> */}
          <Route exact path="/task-01" element={<Counter />} />
          <Route exact path="/task-02" element={<ToggleSwitch />} />
          <Route exact path="/task-03" element={<Form />} />
          <Route exact path="/task-04" element={<Timer />} />
          <Route exact path="/task-05" element={<TodoList />} />
          <Route exact path="/task-06" element={<DropdownMenu />} />
          <Route exact path="/task-07" element={<TabsComponent />} />
          <Route exact path="/task-08" element={<ApiRequest />} />
          <Route exact path="/task-09" element={<Modal />} />
          <Route exact path="/task-10" element={<MultiStepForm />} />
          <Route exact path="/task-11" element={<PropAndPropDrilling />} />
          <Route exact path="/task-12" element={<ContextAPI />} />
          <Route
            exact
            path="/task-13"
            element={<UseRefHookScrollAccordion />}
          />
          <Route exact path="/task-14" element={<UseRefHook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
