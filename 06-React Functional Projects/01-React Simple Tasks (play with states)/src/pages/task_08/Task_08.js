import React, { useState } from "react";
import InputField from "../../reusableComponents/InputField";

export default function Task_08() {
  const [numOfCard, setNumOfCard] = useState("");
  const [cards, setCards] = useState([]);
  const [bool, setBool] = useState(false);

  function handleSubmit() {
    let arr = [];
    for (let i = 0; i < numOfCard; i++) {
      arr.push(i);
    }
    setCards(arr);
    setBool(true);
  }

  function handleDisplay() {
    setBool(!bool);
  }

  return (
    <div className="mainPage">
      <h3>Print Multiple Cards The Number Passed In Input Field</h3>

      <div className="playArea">
        <div className="fieldContainer">
          <label>Input Val: </label>
          <InputField
            onChange={(e) => setNumOfCard(e.target.value)}
            placeholder={"Input Field"}
          />
        </div>
        <div className="buttonContainer">
          <button onClick={handleSubmit}>Print Cards</button>
        </div>
        {cards.length > 0 && (
          <div className="familyContainer">
            <div className="buttonContainer">
              {
                <button onClick={handleDisplay}>
                  {bool ? "Hide" : "Show"}
                </button>
              }
            </div>

            <div className="boxContainer">
              {bool &&
                cards.map((card, index) => {
                  return <div className="smallBox">{card}</div>;
                })}
            </div>
            <div className="buttonContainer">
              {
                <button onClick={handleDisplay}>
                  {bool ? "Hide" : "Show"}
                </button>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
