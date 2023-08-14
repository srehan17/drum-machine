import './App.css'
import Header from './components/Header'
import { useEffect } from 'react'

const drumSounds = [
  {
  key: 'Q',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description: 'sweet'
},
  {
  key: 'W',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description: 'clap'
},
  {
  key: 'E',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description: 'pin'
},
  {
  key: 'A',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description: 'soft'
},
  {
  key: 'S',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: 'beat'
},
  {
  key: 'D',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: 'water'
},
  {
  key: 'Z',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: 'wave'
},
  {
  key: 'X',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: 'thud'
},
  {
  key: 'C',
  soundurl: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: 'summer'
}
]


const App = () => {
  const playSound = (item) => {
  document.getElementById(item.key).play()
    document.getElementById('display').innerHTML= item.description 
  }
      
  useEffect(() => {
    const handleKeyPress = (KeyboardEvent) => {
      const keyPressed = drumSounds.filter((item) => KeyboardEvent.key.toUpperCase() === item.key)
      if (keyPressed) 
      {document.getElementById(keyPressed[0]['key']).play()}
    }
    document.addEventListener("keydown",  handleKeyPress)
  }, [])
  
  return (
    <div id="drum-machine">
      <Header />
      <div id="container">
      <div id="drum-pad">
        {drumSounds.map((item)=> (
          <button key={item.key} onClick={() => playSound(item)} id={item.soundurl} className="drum-pad">
        <audio className="clip" id={item.key} src={item.soundurl}></audio> {item.key}</button>
        ))}
      </div>
        <div id="container2">
          <div id="display"></div>
        </div>
        </div>
    </div>
  )
}    

export default App
