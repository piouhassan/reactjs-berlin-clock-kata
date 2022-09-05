export const buildClock = (time,elementId) => {
    // Initialisation
    const clockArray = [];
    const [hours, minutes, seconds] = time.split(':').map(x => parseInt(x, 10));
    const Color = {
        Off: "O",
        Red: "R",
        Yellow: "Y",
        Green: "G"
    };



    // build second led toggle
    const secondsRow = seconds % 2 === 0 ? Color.Yellow : Color.Off;
    clockArray.push(secondsRow);



    const buildRow =
        (color, numberOfElements, length = 4) =>
            color.repeat(parseInt(numberOfElements, 10)).padEnd(length, Color.Off)



    // Build Hours

    const hourString1 = buildRow(Color.Red, hours / 5);
    const hourString2 = buildRow(Color.Red, hours % 5);
    clockArray.push(hourString1, hourString2);



    // Build Minutes

    const minutesString1 = Color.Green
        .repeat(parseInt(minutes / 5, 10))
        .split('')
        .map((i, index) => (index + 1) % 3 === 0 ? Color.Red : i)
        .join("")
        .padEnd(11, Color.Off);
    const minutesString2 = buildRow(Color.Green, minutes % 5);

    clockArray.push(minutesString1, minutesString2);



    // set to global elementId

    const currentElement = document.getElementById(elementId);


    currentElement.querySelector(".time__clock").innerHTML = time;

    // set color to html element

    const line1 = currentElement.querySelector(".line1");
    colorChanger(line1, secondsRow)

    const line2 = currentElement.querySelector('.line2');
    colorChanger(line2, hourString1);

    const line3 = currentElement.querySelector('.line3');
    colorChanger(line3, hourString2);

    const line4 = currentElement.querySelector('.line4');
    colorChanger(line4, minutesString1);

    const line5 = currentElement.querySelector('.line5');
    colorChanger(line5, minutesString2);

    return clockArray.join("\n");

}


export const createTimeByZone = (zone) => {
    const date = new Date(new Date().toLocaleString("en-US", {timeZone: zone}));
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    return {
        "hours" : hours,
        "minutes" : minutes,
        "seconds" : seconds,
    }

}

const colorChanger = (element, currentStringColors) => {
    const ColorHex = {
        "O": "#17252A",
        "R": "#FF4136",
        "Y": "#FFDC00",
        "G": "#2ECC40"
    };
    const elements = element.children;

    if (!elements || elements.length === 0) {
        element.style.backgroundColor = ColorHex[currentStringColors]
        return;
    }
    for (let i = 0; i < elements.length; i++) {
        let backgroundColor = elements[i].style;
        if (backgroundColor.backgroundColor !== ColorHex[currentStringColors[i]]) {
            backgroundColor.backgroundColor = ColorHex[currentStringColors[i]];
        }
    }

    return elements;
}

