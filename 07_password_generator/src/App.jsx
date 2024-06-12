import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) passwordString += "0123456789";
    if (characterAllowed) passwordString += "!@#$%^&*-_+=[]{}~`";
    for (let index = 1; index <= length; index++) {
      let character = Math.floor(Math.random() * passwordString.length) + 1;
      pass += passwordString.charAt(character);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  // passwordGenerator();

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <>
      <main className="bg-black w-screen h-screen flex justify-center items-center">
        <section className="bg-zinc-800 text-white p-20 flex justify-center items-center flex-col gap-8 rounded-3xl">
          <h1 className="text-5xl font-extrabold">Password Generator</h1>
          <div className="flex rounded-xl overflow-hidden">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className="text-black text-2xl font-semibold outline-none cursor-pointer px-5 py-2 w-full"
            />
            <button className="bg-blue-800 px-5 py-2 font-medium">Copy</button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex justify-center items-center gap-7">
              <input
                type="range"
                min={6}
                maxLength={100}
                onChange={(event) => {
                  setLength(event.target.value);
                }}
                className="cursor-pointer scale-125"
              />
              <label className="text-orange-500 font-medium text-lg">
                Length: {length}
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
                Numbers
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
                Characters
              </label>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
