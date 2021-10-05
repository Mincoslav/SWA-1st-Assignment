let temperatures = []
let precipitations = []
let winds = []
let clouds = []


function success(responseText) {
    temperatures = []
	precipitations = []
	winds = []
	clouds = []
    response = JSON.parse(responseText)

    response.forEach((element) => {
        if (element.type === "temperature") {
            temperatures.push(element)
        } else if (element.type === "precipitation") {
            precipitations.push(element)
        } else if (element.type === "wind speed") {
            winds.push(element)
        } else if (element.type === "cloud coverage") {
            clouds.push(element)
        }
    })
    xmlHTTPLatestMeasurements()
    xmlHTTP5DayMinimumTemperature()
    xmlHTTP5DayMaximumTemperature()
}


function getData(location) {

    let request = new XMLHttpRequest()
	request.open("GET", "http://localhost:8080/data/" + location)
	console.log(request)
	request.send()

    request.onload = function () {
        success(this.responseText)
    }
}


function getDaysAgo(b) {
	var a = new Date()
	a.setDate(a.getDate() - b)
	return a
}


function xmlHTTPLatestMeasurements() {
        
		$("#latestTemperature").text(
			temperatures[temperatures.length - 1].value +
				"° " +
				temperatures[temperatures.length - 1].unit
		)
		$("#latestPrecipitation").text(
			precipitations[precipitations.length - 1].value +
				" " +
				precipitations[precipitations.length - 1].unit +
				"\n" +
				precipitations[precipitations.length - 1].precipitation_type
		)
		$("#latestWind").text(
			winds[winds.length - 1].value +
				" " +
				winds[winds.length - 1].unit +
				"\n" +
				winds[winds.length - 1].direction
		)
		$("#latestCloudCoverage").text(
			clouds[clouds.length - 1].value + " " + clouds[clouds.length - 1].unit
		)
}


function xmlHTTP5DayMinimumTemperature() {
	let minimumTemperature = {
        value: 200,
        unit: ''
    }
	let date5daysAgo = getDaysAgo(5)

	let last5daysTemperatures = temperatures.filter(
		(temperature) => new Date(temperature.time) >= date5daysAgo
	)

    for (let index = 0; index < last5daysTemperatures.length; index++) {
        if (minimumTemperature.value > last5daysTemperatures[index].value) {
            minimumTemperature.value = last5daysTemperatures[index].value
            minimumTemperature.unit = last5daysTemperatures[index].unit
        }
    }

    $("#minimumTemperature").text(
        minimumTemperature.value + '° ' + minimumTemperature.unit
    )
}


function xmlHTTP5DayMaximumTemperature() {
    let maximumTemperature = {
        value: -100,
        unit: ''
    }
	let date5daysAgo = getDaysAgo(5)

	let last5daysTemperatures = temperatures.filter(
		(temperature) => new Date(temperature.time) >= date5daysAgo
	)

    for (let index = 0; index < last5daysTemperatures.length; index++) {
        if (maximumTemperature.value < last5daysTemperatures[index].value) {
            maximumTemperature.value = last5daysTemperatures[index].value
            maximumTemperature.unit = last5daysTemperatures[index].unit
        }
    }

    $("#maximumTemperature").text(
        maximumTemperature.value + '° ' + maximumTemperature.unit
    )
}
