import { useEffect, useState } from "react";
import "./App.css";

import { Button } from "flowbite-react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const handleThemeChange = () => {
    console.log(">>>buttonclicked");

    if (themeMode == "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  console.log(themeMode, ">>>themeMode");

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-200 dark:bg-red-800">
        Hello world!
      </h1>
      <button
        onClick={handleThemeChange}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-200 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Theme Toggle
      </button>
    </>
  );
}

export default App;
