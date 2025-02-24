// document.body.style = "background-image: linear-gradient(to bottom, lightgray, darkgray)"

// Define function to call weather api
async function getWeatherData() {
    const urlAPICall = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,precipitation,cloud_cover&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&forecast_days=1"
    // fetch
    const objApiResponse = await (await fetch(urlAPICall)).json()
    console.log(objApiResponse)

    // update background
    if(objApiResponse.current.cloud_cover) {

    }

    // update temp

    // update humidity
    // update precipitation
}

// Make the API Call
getWeatherData()