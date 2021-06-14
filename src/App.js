
import { useState, useEffect } from "react"



function App() {
  const [library] = useState(
    [
      {
        id: "backwards-in-crash",
        key: "Q",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/65[kb]backwards-in-crash.wav.mp3",
      },
      {
        id: "clap",
        key: "W",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/20[kb]chhclap.wav.mp3"
      },
      {
        id: "brass-hit-6",
        key: "E",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/41[kb]brass-hit-6.WAV.mp3"
      }, 
      {
        id: "basspunch",
        key: "A",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/36[kb]basspunch.wav.mp3"
      },
      {
        id: "blackpunch",
        key: "S",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/31[kb]blackpunch.wav.mp3"
      },
      {
        id: "iELECTRIBE-kick-17",
        key: "D",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/45[kb]iELECTRIBE-kick-17.wav.mp3"
      },
      {
        id: "iELECTRIBE-kick-11",
        key: "Z",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/47[kb]iELECTRIBE-kick-11.wav.mp3"
      },
      {
        id: "iELECTRIBE-kick-0",
        key: "X",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/167[kb]iELECTRIBE-kick-0.wav.mp3"
      },
      {
        id: "down_in_china",
        key: "C",
        sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/292[kb]down_in_china.wav.mp3"
      }
    ]
  );


  const [info, setInfo] = useState("Waiting for Trigger");

  const handleClick = (key) => {
    return () => {
       document.getElementById(key).play();
       setInfo(key)
    };
 }


 const  handleKeyPress = (e) => {
  const key = e.key.toUpperCase();
  if ("QWEASDZXC".includes(key)) {
    document.getElementById(key).play();
    setInfo(key)
  } else {
    console.log("No sound assigned for that key");
  }
}

useEffect(() => {
  document.addEventListener("keydown", handleKeyPress);
}, []);

  return (
    <main id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display" >{info}</div>
      <div className="container">  
      {library.map((button) =>
         <button onClick={handleClick(button.key)} id={button.id} className="drum-pad">{button.key}<audio id={button.key} src={button.sound} className="clip"/></button>)}  
         </div>

     
    </main>
  );
}

export default App;
