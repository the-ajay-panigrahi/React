import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [lowerCaseAllowed, setLowerCaseAllowed] = useState(true);
  const [upperCaseAllowed, setUpperCaseAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordReference = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let passwordString = "";
    if (lowerCaseAllowed) passwordString += "abcdefghijklmnopqrstuvwxyz";
    if (upperCaseAllowed) passwordString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) passwordString += "0123456789";
    if (characterAllowed) passwordString += "!@#$%^&*-_+=[]{}~`";
    for (let index = 1; index <= length; index++) {
      let character = Math.floor(Math.random() * passwordString.length) + 1;
      pass += passwordString.charAt(character);
    }
    setPassword(pass);
  }, [
    length,
    upperCaseAllowed,
    lowerCaseAllowed,
    numberAllowed,
    characterAllowed,
    setPassword,
  ]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordReference.current?.select();
    passwordReference.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [
    length,
    upperCaseAllowed,
    lowerCaseAllowed,
    numberAllowed,
    characterAllowed,
    passwordGenerator,
  ]);
  return (
    <>
      <main className="bg-black w-screen h-screen flex justify-center items-center px-3 py-2">
        <section className="bg-zinc-800 text-white p-14 flex justify-center items-center flex-col gap-8 rounded-3xl">
          <h1 className="text-5xl font-extrabold text-yellow-400">
            Password Generator
          </h1>
          <div className="flex rounded-xl overflow-hidden">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordReference}
              className="text-black text-2xl font-semibold outline-none cursor-pointer px-5 py-2 w-full"
            />
            <button
              onClick={copyPasswordToClipBoard}
              className="bg-blue-800 px-5 py-2 font-medium hover:bg-red-500 duration-200"
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex justify-center items-center gap-7">
              <input
                type="range"
                min={6}
                max={20}
                defaultValue={length}
                onChange={(event) => {
                  setLength(event.target.value);
                }}
                className="cursor-pointer scale-125"
              />
              <label className="text-red-500 font-medium text-lg">
                Length :- {length}
              </label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                defaultChecked
                id="lowerCaseCheck"
                onChange={() => {
                  setLowerCaseAllowed((prev) => !prev);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="lowerCaseCheck"
                className="text-orange-500 font-medium text-lg"
              >
                Allow LowerCase Alphabets
              </label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="upperCaseCheck"
                onChange={() => {
                  setUpperCaseAllowed((prev) => !prev);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="upperCaseCheck"
                className="text-orange-500 font-medium text-lg"
              >
                Allow UpperCase Alphabets
              </label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="numCheck"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="numCheck"
                className="text-orange-500 font-medium text-lg"
              >
                Allow Numbers or Digits
              </label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="charCheck"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="charCheck"
                className="text-orange-500 font-medium text-lg"
              >
                Allow Special Characters
              </label>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
