
import { useState } from "react"



function App() {
  const [audio, setAudio] = useState({
    Q : "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/65[kb]backwards-in-crash.wav.mp3"
  });
  const [value, setValue] = useState({
    value: "Q"
  })
  

  let audioSound = new Audio(audio.Q)

  const start = () => {
    audioSound.play()
  console.log(value.value)
  }


  return (
    <main id="drum-machine">
      <div id="display" ></div>
      <h1>Drum Machine</h1>
      <button className="drum-pad" id="backward-crash" onClick={start}>
       <audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/65[kb]backwards-in-crash.wav.mp3" className="clip" id="Q"  value={value.value}></audio>Q</button>
      <button className="drum-pad" id="discoblast-clap"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/20[kb]chhclap.wav.mp3" className="clip" id="W"></audio>W</button>
      <button className="drum-pad" id="discoblast-punches"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/41[kb]brass-hit-6.WAV.mp3" className="clip" id="E"></audio>E</button>
      <button className="drum-pad" id="basspunch"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/36[kb]basspunch.wav.mp3" className="clip" id="A"></audio>A</button>
      <button className="drum-pad" id="blackpunch"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/31[kb]blackpunch.wav.mp3" className="clip" id="S"></audio>S</button>
      <button className="drum-pad" id="electric-kick"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/45[kb]iELECTRIBE-kick-17.wav.mp3" className="clip" id="D"></audio>D</button>
      <button className="drum-pad" id="electric-kick-2"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/47[kb]iELECTRIBE-kick-11.wav.mp3" className="clip" id="Z"></audio>Z</button>
      <button className="drum-pad" id="electric-kick-3"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/167[kb]iELECTRIBE-kick-0.wav.mp3" className="clip" id="X"></audio>X</button>
      <button className="drum-pad" id="crashes-down-in-china"><audio src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/292[kb]down_in_china.wav.mp3" className="clip" id="C"></audio>C</button>
    </main>
  );
}

export default App;
