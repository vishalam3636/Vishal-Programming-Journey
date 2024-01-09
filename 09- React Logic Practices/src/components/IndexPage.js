import "./indexpage.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="index-container">
      <h3>
        <Link to="/task-01">VSC</Link>
      </h3>
      <div className="index-page">
        <ul>
          <li>
            <NavLink to="/task-01">01- Implement Counter</NavLink>
          </li>
          <li>
            <NavLink to="/task-02">02- Build a Toggle Switch</NavLink>
          </li>
          <li>
            <NavLink to="/task-03">03- Create a Form</NavLink>
          </li>
          <li>
            <NavLink to="/task-04">04- Implement a Timer</NavLink>
          </li>
          <li>
            <NavLink to="/task-05">
              05- Develop a Todo List with Local Storage
            </NavLink>
          </li>
          <li>
            <NavLink to="/task-06">06- Implement a Dropdown Menu</NavLink>
          </li>
          <li>
            <NavLink to="/task-07">07- Build a Tabs Component</NavLink>
          </li>
          <li>
            <NavLink to="/task-08">08- Make an API Request</NavLink>
          </li>
          <li>
            <NavLink to="/task-09">09- Create a Modal</NavLink>
          </li>
          <li>
            <NavLink to="/task-10">10- Build a Multi-step Form</NavLink>
          </li>
          <li>
            <NavLink to="/task-11">11- Props and Prop Drilling</NavLink>
          </li>
          <li>
            <NavLink to="/task-12">12- Context API</NavLink>
          </li>
          <li>
            <NavLink to="/task-13">13- UseRef Hook Scroll Accordion</NavLink>
          </li>
          <li>
            <NavLink to="/task-14">14- useRef Hook Basic</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
