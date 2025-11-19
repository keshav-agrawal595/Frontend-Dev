function planActivity() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let isRaining = document.getElementById('isRaining').checked;
    let windSpeed = parseFloat(document.getElementById('windSpeed').value);

    if (isRaining) {
        console.log("Stay indoors with hot coffee.");
    } else if (temperature > 35) {
        console.log("Go swimming.");
    } else if (temperature < 15 && windSpeed > 20) {
        console.log("Too cold and windy — stay home.");
    } else {
        console.log("Perfect day for a walk.");
    }
}
