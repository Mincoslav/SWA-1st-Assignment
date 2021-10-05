let latestMeasurementTemperature = [] 
let latestMeasurementPrecipitation = []
let latestMeasurementWind = []
let latestMeasurementCloud = []

function xmlHTTPLatestMeasurements(location) {
    latestMeasurementTemperature = []
    latestMeasurementPrecipitation = []
    latestMeasurementWind = []
    latestMeasurementCloud = []

    let request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:8080/data/' + location)
    console.log(request)
    request.send()
    request.onload = () => {
            let response = JSON.parse(request.responseText)
            response.forEach(element => {
                if (element.type === "temperature") {
                    latestMeasurementTemperature.push(element)
                }
                else if (element.type === "precipitation") {
                    latestMeasurementPrecipitation.push(element)
                }
                else if (element.type === "wind speed") {
                    latestMeasurementWind.push(element)
                }
                else if (element.type === "cloud coverage") {
                    latestMeasurementCloud.push(element)
                }
            });

            $('#latestTemperature').text(latestMeasurementTemperature[latestMeasurementTemperature.length-1].value + '° ' + latestMeasurementTemperature[latestMeasurementTemperature.length-1].unit)
            $('#latestPrecipitation').text(latestMeasurementPrecipitation[latestMeasurementPrecipitation.length-1].value + ' ' + latestMeasurementPrecipitation[latestMeasurementPrecipitation.length-1].unit + '\n' + latestMeasurementPrecipitation[latestMeasurementPrecipitation.length-1].precipitation_type)
            $('#latestWind').text(latestMeasurementWind[latestMeasurementWind.length-1].value + ' ' + latestMeasurementWind[latestMeasurementWind.length-1].unit + '\n' + latestMeasurementWind[latestMeasurementWind.length-1].direction)
            $('#latestCloudCoverage').text(latestMeasurementCloud[latestMeasurementCloud.length-1].value + ' ' + latestMeasurementCloud[latestMeasurementCloud.length-1].unit)

        }    
}

xmlHTTPLatestMeasurements('Horsens')

// document.getElementById('latestTemperature') = temperatures[0]