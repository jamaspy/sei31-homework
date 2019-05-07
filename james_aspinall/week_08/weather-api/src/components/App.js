import React from 'react';

import Weather from "./Weather"
import video from "./video.mp4"

function App() {
  return (
    <div className="App">
    <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video} type="video/mp4"/>    
                </video>
            </div>
    <div className="text-box">
      <Weather />
      </div>
    </div>
  );
}

export default App;
