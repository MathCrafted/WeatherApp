// document.body.style = "background-image: linear-gradient(to bottom, lightgray, darkgray)"

// Define function to call weather api
async function getWeatherData() {
    const urlAPICall = "https://api.open-meteo.com/v1/forecast?latitude=36.17&longitude=-85.5&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch"
    try {
        // fetch
        const objApiResponse = await fetch(urlAPICall)

        // verify ok
        if(!objApiResponse.ok) {
            throw new Error('HTTP Error Status:', objApiResponse)
        }

        // get json
        const objApiJson = await objApiResponse.json()
        console.log(objApiJson)


        if(objApiJson.current.weather_code >= 2) {
            // update background
            document.body.style = "background-image: linear-gradient(to bottom, lightgray, darkgray)"
            
        }

        // update temp
        document.getElementById('pTemperature').innerHTML = objApiJson.current.temperature_2m + ' ' + objApiJson.current_units.temperature_2m
        if(objApiJson.current.temperature_2m >= 80) {
            document.getElementById('imgTemperature').src = 'img/thermometer-add.svg'
        } else if(objApiJson.current.temperature_2m <= 50) {
            document.getElementById('imgTemperature').src = 'img/thermometer-minus.svg'
        }

        // update humidity
        document.getElementById('pHumidity').innerHTML = objApiJson.current.relative_humidity_2m + objApiJson.current_units.relative_humidity_2m + ' Humiditiy'
        if(objApiJson.current.relative_humidity_2m >= 50) {
            document.getElementById('imgHumidity').src = 'img/foggy.svg'
        }
        
        // update precipitation
        document.getElementById('pPrecipitation').innerHTML = objApiJson.current.precipitation + ' ' + objApiJson.current_units.precipitation
        if (objApiJson.current.weather_code >= 2) {
            document.getElementById('imgPrecipitation').src = 'img/partly-cloudy.svg'
        }
        if (objApiJson.current.weather_code >= 51) {
            document.getElementById('imgPrecipitation').src = 'img/rainy.svg'
        }

    } catch(objError) {
        console.log("Error fetching weather data: ", objError)
        Swal.fire({
            icon: 'error',
            title: 'Oops! Something went wrong!',
            html: '<p>Please try again later</p>'
        })
    }
}

// Make the API Call
getWeatherData()