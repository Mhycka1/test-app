import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the randomly generated number and letter
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomLetter, setRandomLetter] = useState(null);

  // Function to handle the button click and generate a random number and letter
  const handleButtonClick = () => {
    // Generate a random number between 1 and 10
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;
    // Generate a random letter
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    // Update the state with the new random number and letter
    setRandomNumber(newRandomNumber);
    setRandomLetter(newRandomLetter);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Display the randomly generated number and letter */}
        <p>
          Random Number: {randomNumber}
        </p>
        <p>
          Random Letter: {randomLetter}
        </p>
        <button className="App-button" onClick={handleButtonClick}>
          Generate Random Number and Letter
        </button>
      </header>
    </div>
  );
}

export default App;