import { useState, useEffect } from "react";
import Land from "./Land/Land.jsx";

export default function App() {
  const [landNumbers, setLandNumbers] = useState([]);
  const [inputLand, setInputLand] = useState("")
  const limit = 5000;

  const [renderCount, setRenderCount] = useState(0)
  useEffect(() => {
    setRenderCount((r) => r + 1)
    console.log("Render Count: " + String(renderCount));
  }, [landNumbers])


  function handleInput(event) {
    setInputLand(event.target.value)
  }

  function getInput() {
    if (inputLand && Number(inputLand) >= 1 && Number(inputLand) <= limit){
      setLandNumbers((l) => [...l, inputLand]);
    }else{
      alert("#1-5000 lang jusko");
    }
  }

  function randomLand() {
    setLandNumbers((l) => [...l, String(Math.floor(Math.random() * limit) + 1)]);
  }

  function deleteAll() {
    setLandNumbers((l) => []);
  }

  function addLandNumber(landNumber) {
    setLandNumbers((l) => [...l, String(landNumber)]);
  }

  function deleteLandNumber(index) {
    setLandNumbers((l) => l.filter((_, i) => i !== index));
  }

  return (
    <>
      <header>
        <input onChange={handleInput} placeholder="Enter the Land Number"/>
        <button className="view" onClick={getInput}>View</button>
        <button className="random" onClick={randomLand}>Random Land</button>
        <button className="delete" onClick={deleteAll}>Delete all viewing land</button>
      </header>

      <main>
        {landNumbers.map((landNumber, index) => {
          return <Land
                    number={landNumber}
                    previous={() => addLandNumber(Number(landNumber) - 1)}
                    next={() => addLandNumber(Number(landNumber) + 1)}
                    delete={() => deleteLandNumber(index)}
                  />
        })}
      </main>
    </>
  );
}