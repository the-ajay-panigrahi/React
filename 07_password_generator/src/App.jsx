import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) passwordString += "0123456789";
    if (characterAllowed) passwordString += "!@#$%^&*-_+=[]{}~`";
    for (let index = 1; index <= length; index++) {
      let character = Math.floor(Math.random() * passwordString.length) + 1;
      password += passwordString.charAt(character);
    }
    setPassword(password);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <main className="bg-black w-screen h-screen text-white"></main>
    </>
  );
}

export default App;
