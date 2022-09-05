import React, {useEffect, useState} from 'react';
import {buildClock, createTimeByZone} from "./helper";

const Clock = ({zone,elementIdentification}) => {
    useEffect(() => {
       const intervalTime =   setInterval( () => updateClockTime(elementIdentification), 1000)
        return () => clearInterval(intervalTime)
    },[elementIdentification])

    const [time,setTime] = useState("")

    const hourNumber = 4;
    const minuteNumber = 11;
    const addionalMinuteNumber = 4;


    const updateClockTime = (elementId) => {
        // Get Time from Timezone
         const {hours , minutes , seconds } = createTimeByZone(zone)
        // Set time to be show in view
        setTime(`${hours}:${minutes}:${seconds}`)
        // set time to clock to be build
        buildClock(`${hours}:${minutes}:${seconds}`, elementId)
    }



    return (
        <section id={elementIdentification} className="clock">
            <div className="clock__seconds line1"></div>
            <div className="clock__row line2">
                {[...Array(hourNumber)].map((hours,k) =>
                    <div className="clock__hours" key={k}></div>
                )}
            </div>
            <div className="clock__row line3">
                {[...Array(hourNumber)].map((hours,key) =>
                    <div className="clock__hours" key={key}></div>
                )}
            </div>
            <div className="clock__row line4">
                {[...Array(minuteNumber)].map((minute,y) =>
                    <div className="clock__minutes" key={y}></div>
                )}

            </div>
            <div className="clock__row line5">
                {[...Array(addionalMinuteNumber)].map((minute,e) =>
                    <div className="clock__minutes-additional" key={e}></div>
                )}
            </div>
            <div className="time">
                <div className="time__timezone">{zone}</div>
                <div className="time__clock">{time === "" ? "Loading..." : time }</div>
            </div>
        </section>
    );
}

export default Clock;
