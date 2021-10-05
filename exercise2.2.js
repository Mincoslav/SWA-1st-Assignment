let temperaturesForecast = [] 
let precipitationForecast = []
let windForecast = []
let cloudForecast = []

function xmlHTTPLatestMeasurements(location) {
    temperaturesForecast = []
    precipitationForecast = []
    windForecast = []
    cloudForecast = []

    let request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:8080/forecast/' + location)
    console.log(request)
    request.send()
    request.onload = () => {
            let response = JSON.parse(request.responseText)
            response.forEach(element => {
                if (element.type === "temperature") {
                    temperaturesForecast.push(element)
                }
                else if (element.type === "precipitation") {
                    precipitationForecast.push(element)
                }
                else if (element.type === "wind speed") {
                    windForecast.push(element)
                }
                else if (element.type === "cloud coverage") {
                    cloudForecast.push(element)
                }
            });
            // console.log(temperaturesForecast[0])
            averageLatestTemperature = Math.round((temperaturesForecast[0].from + temperaturesForecast[0].to) / 2)
            averageLatestPrecipitation = Math.round((precipitationForecast[0].from + precipitationForecast[0].to) / 2)
            averageLatestWind = Math.round((windForecast[0].from + windForecast[0].to) / 2)
            averageLatestCloud = Math.round((cloudForecast[0].from + cloudForecast[0].to) / 2)
            
            console.log(location)
            console.log(averageLatestTemperature)
            console.log(averageLatestPrecipitation)
            console.log(averageLatestWind)
            console.log(averageLatestCloud)

            $('#latestTemperature').text(averageLatestTemperature + '° ' + temperaturesForecast[0].unit)
            $('#latestPrecipitation').text(averageLatestPrecipitation + ' ' + precipitationForecast[0].unit + '\n' + precipitationForecast[0].precipitation_types)
            $('#latestWind').text(averageLatestWind + ' ' + windForecast[0].unit + '\n' + windForecast[0].directions)
            $('#latestCloudCoverage').text(averageLatestCloud + ' ' + cloudForecast[0].unit)

        }    
}

xmlHTTPLatestMeasurements('Horsens')

// document.getElementById('latestTemperature') = temperatures[0]