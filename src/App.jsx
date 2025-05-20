import { useState } from "react";
import dice1 from "./images/dice_1.png";
import dice2 from "./images/dice_2.png";
import dice3 from "./images/dice_3.png";
import dice4 from "./images/dice_4.png";
import dice5 from "./images/dice_5.png";
import dice6 from "./images/dice_6.png";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [count] = useState([1, 2, 3, 4, 5, 6]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [randomImage, setRandomImage] = useState(dice1);
  const [currentDiceValue, setCurrentDiceValue] = useState(null);

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const handleImg = () => {
    if (selectedNumber === null) {
      alert("Please select a number before rolling the dice.");
      return;
    }

    const index = Math.floor(Math.random() * diceImages.length);
    const newDiceValue = index + 1;

    setRandomImage(diceImages[index]);
    setCurrentDiceValue(newDiceValue);

    if (selectedNumber === newDiceValue) {
      setScore((prev) => prev + 15);
    } else {
      setScore((prev) => prev - 5);
    }
  };

  return (
    <div className="ml-[20px] mt-[10px]">
      <h1 className="text-4xl font-bold mb-4">Score: {score}</h1>

      <div className="my-4">
        <p className="text-lg font-semibold mb-2">Select a number:</p>
        {count.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedNumber(item)}
            className={`text-white m-1 px-3 py-1 text-2xl rounded ${
              selectedNumber === item ? "bg-green-600" : "bg-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <img
          src={randomImage}
          alt="dice"
          className="w-[200px] cursor-pointer"
          onClick={handleImg}
        />
      </div>
    </div>
  );
}

export default App;
