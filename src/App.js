import React from 'react';
import Clock from "./Clock";

const App = () => {

    const timeZoneArray = [
        "Africa/Lome",
        "Europe/Berlin",
        "America/Sao_Paulo",
        "Pacific/Fiji"
    ]


  return (
      <>
          <div className="app">
              <aside className="select__box">
                  <h1 className="select__box__header">Berlin clock</h1>
              </aside>
              <main className="container">
                  <Clock  zone={timeZoneArray[0]}  elementIdentification="timezone1" />
                 <Clock  zone={timeZoneArray[1]}  elementIdentification="timezone2" />
                 <Clock  zone={timeZoneArray[2]} elementIdentification="timezone3" />
                 <Clock  zone={timeZoneArray[3]} elementIdentification="timezon4" />
              </main>
          </div>
      </>
  );
}

export default App;
