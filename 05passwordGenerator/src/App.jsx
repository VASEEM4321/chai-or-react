import React, { useState, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*()_+{}[]";
    let finalChars = chars;

    if (includeNumbers) finalChars += numbers;
    if (includeChars) finalChars += specialChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * finalChars.length);
      generatedPassword += finalChars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeChars]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[28rem]">
        <h2 className="text-xl font-bold text-center mb-4">Password Generator</h2>
        <div className="flex items-center border rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-3 py-2 text-black outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-4 mb-4 justify-between">
          <label className="text-sm">Length: {length}</label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-24"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeChars}
              onChange={() => setIncludeChars(!includeChars)}
            />
            Characters
          </label>
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;