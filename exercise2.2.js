let temperatures = [];
let precipitations = [];
let winds = [];
let clouds = [];

function dateInterval(fromDate, toDate) {
	function getFrom() {
		return fromDate;
	}
	function getTo() {
		return toDate;
	}

	function contains(date) {
		if (date > getFrom() && date < getTo()) {
			return true;
		} else {
			return false;
		}
	}

	return {
		getFrom,
		getTo,
		contains
	};
}

function success(responseText) {
	temperatures = [];
	precipitations = [];
	winds = [];
	clouds = [];
	response = JSON.parse(responseText);

	response.forEach((element) => {
		if (element.type === "temperature") {
			temperatures.push(element);
		} else if (element.type === "precipitation") {
			precipitations.push(element);
		} else if (element.type === "wind speed") {
			winds.push(element);
		} else if (element.type === "cloud coverage") {
			clouds.push(element);
		}
	});

	let last5daysTemperatures = [
		getDayValues(getDaysAgo(5), temperatures),
		getDayValues(getDaysAgo(4), temperatures),
		getDayValues(getDaysAgo(3), temperatures),
		getDayValues(getDaysAgo(2), temperatures),
		getDayValues(getDaysAgo(1), temperatures)
	];
	let last5daysWind = [
		getDayValues(getDaysAgo(5), winds),
		getDayValues(getDaysAgo(4), winds),
		getDayValues(getDaysAgo(3), winds),
		getDayValues(getDaysAgo(2), winds),
		getDayValues(getDaysAgo(1), winds)
	];
	let last5daysPrecipitation = [
		getDayValues(getDaysAgo(5), precipitations),
		getDayValues(getDaysAgo(4), precipitations),
		getDayValues(getDaysAgo(3), precipitations),
		getDayValues(getDaysAgo(2), precipitations),
		getDayValues(getDaysAgo(1), precipitations)
	];

	let predictions = {
		temperaturePredictions: getDayValues(
			"",
			temperatures,
			new Date(),
			getDaysAgo(-1)
		),
		cloudPredictions: getDayValues("", clouds, new Date(), getDaysAgo(-1)),
		windPredictions: getDayValues("", winds, new Date(), getDaysAgo(-1)),
		rainPredictions: getDayValues(
			"",
			precipitations,
			new Date(),
			getDaysAgo(-1)
		)
	};

	if (!response[0].hasOwnProperty("from")) {
		setLast5Dates(last5daysTemperatures);
		xmlHTTPLatestMeasurements();
		xmlHTTP5DayMinimumTemperature(last5daysTemperatures);
		xmlHTTP5DayMaximumTemperature(last5daysTemperatures);
		xmlHTTP5DayTotalPrecipitation(last5daysPrecipitation);
		xmlHTTP5DayAverageWindSpeed(last5daysWind);
	} else {
		xmlHTTP24HourPredictions(predictions);
	}
}

function getData(url) {
	let request = new XMLHttpRequest();
	request.open("GET", url);
	request.send();
	request.onload = function () {
		success(this.responseText);
	};
}

function getDaysAgo(b) {
	var a = new Date();
	a.setDate(a.getDate() - b);
	return a;
}

function withoutTime(dateTime) {
	var date = new Date(dateTime.getTime());
	date.setHours(0, 0, 0, 0);
	return date;
}

function getDayValues(date, array, fromDate, toDate) {
	const newArray = [];
	if (fromDate !== undefined && toDate !== undefined) {
		let interval = dateInterval(fromDate, toDate);
		for (let index = 0; index < array.length; index++) {
			array[index].time = new Date(array[index].time);
			if (interval.contains(array[index].time)) {
				newArray.push(array[index]);
			}
		}
	} else {
		for (let index = 0; index < array.length; index++) {
			array[index].time = new Date(array[index].time);
			if (
				array[index].time.getDate() === date.getDate() &&
				array[index].time.getMonth() === date.getMonth() &&
				array[index].time.getFullYear() === date.getFullYear()
			) {
				newArray.push(array[index]);
			}
		}
	}
	return newArray;
}

function setLast5Dates(list) {
	for (let index = 0; index < list.length; index++) {
		$("#date" + index).text(withoutTime(list[index][0].time));
	}
}

function xmlHTTPLatestMeasurements() {
	$("#latestTemperature").text(
		temperatures[temperatures.length - 1].value +
			"° " +
			temperatures[temperatures.length - 1].unit
	);
	$("#latestPrecipitation").text(
		precipitations[precipitations.length - 1].value +
			" " +
			precipitations[precipitations.length - 1].unit +
			"\n" +
			precipitations[precipitations.length - 1].precipitation_type
	);
	$("#latestWind").text(
		winds[winds.length - 1].value +
			" " +
			winds[winds.length - 1].unit +
			"\n" +
			winds[winds.length - 1].direction
	);
	$("#latestCloudCoverage").text(
		clouds[clouds.length - 1].value + " " + clouds[clouds.length - 1].unit
	);
}

function xmlHTTP5DayMinimumTemperature(list) {
	let minimumTemperature = {
		value: 200,
		unit: ""
	};

	for (let index = 0; index < list.length; index++) {
		for (let innerIndex = 0; innerIndex < list[index].length; innerIndex++) {
			if (minimumTemperature.value > list[index][innerIndex].value) {
				minimumTemperature.value = list[index][innerIndex].value;
				minimumTemperature.unit = list[index][innerIndex].unit;
			}
		}

		$("#minimumTemperatureValue" + index).text(
			minimumTemperature.value + "° " + minimumTemperature.unit
		);
	}

	$("#minimumTemperature").text(
		minimumTemperature.value + "° " + minimumTemperature.unit
	);
}

function xmlHTTP5DayMaximumTemperature(list) {
	let maximumTemperature = {
		value: -100,
		unit: ""
	};

	for (let index = 0; index < list.length; index++) {
		for (let innerIndex = 0; innerIndex < list[index].length; innerIndex++) {
			if (maximumTemperature.value < list[index][innerIndex].value) {
				maximumTemperature.value = list[index][innerIndex].value;
				maximumTemperature.unit = list[index][innerIndex].unit;
			}
		}

		$("#maximumTemperatureValue" + index).text(
			maximumTemperature.value + "° " + maximumTemperature.unit
		);
	}

	$("#maximumTemperature").text(
		maximumTemperature.value + "° " + maximumTemperature.unit
	);
}

function xmlHTTP5DayTotalPrecipitation(list) {
	let totalPrecipitation = {
		value: 0,
		unit: "",
		total: 0
	};

	for (let index = 0; index < list.length; index++) {
		for (let innerIndex = 0; innerIndex < list[index].length; innerIndex++) {
			totalPrecipitation.value += list[index][innerIndex].value;
			totalPrecipitation.total += list[index][innerIndex].value;
			totalPrecipitation.unit = list[index][innerIndex].unit;
		}

		totalPrecipitation.value = Math.round(totalPrecipitation.value);

		$("#totalPrecipitationValue" + index).text(
			totalPrecipitation.value + " " + totalPrecipitation.unit
		);
		totalPrecipitation.value = 0;
	}

	$("#totalPrecipitation").text(
		Math.round(totalPrecipitation.total) + " " + totalPrecipitation.unit
	);
}

function xmlHTTP5DayAverageWindSpeed(list) {
	let windSpeeds = {
		values: [],
		unit: ""
	};

	for (let index = 0; index < list.length; index++) {
		for (let innerIndex = 0; innerIndex < list[index].length; innerIndex++) {
			windSpeeds.values.push(list[index][innerIndex].value);
			windSpeeds.unit = list[index][innerIndex].unit;
		}

		averageWindSpeed = Math.round(
			windSpeeds.values.reduce((a, b) => a + b, 0) / windSpeeds.values.length
		);

		$("#averageWindSpeedValue" + index).text(
			averageWindSpeed + " " + windSpeeds.unit
		);
	}

	$("#averageWindSpeed").text(averageWindSpeed + " " + windSpeeds.unit);
}

function xmlHTTP24HourPredictions(list) {
	let dateRow = document.querySelectorAll("#dateRow > th");
	let temperatureRow = document.querySelectorAll("#temperatureRow > td");
	let precipitationRow = document.querySelectorAll("#precipitationRow > td");
	let windRow = document.querySelectorAll("#windRow > td");
	let cloudRow = document.querySelectorAll("#cloudRow > td");

	for (let index = 1; index < dateRow.length; index++) {
		dateRow[index].innerHTML = list.temperaturePredictions[index - 1].time;
		temperatureRow[index].innerHTML =
			list.temperaturePredictions[index - 1].from +
			" - " +
			list.temperaturePredictions[index - 1].to +
			"° " +
			list.temperaturePredictions[index - 1].unit;
		precipitationRow[index].innerHTML =
			list.rainPredictions[index - 1].from +
			" - " +
			list.rainPredictions[index - 1].to +
			" " +
			list.rainPredictions[index - 1].unit;
		windRow[index].innerHTML =
			list.windPredictions[index - 1].to +
			" - " +
			list.windPredictions[index - 1].to +
			" " +
			list.windPredictions[index - 1].unit;
		cloudRow[index].innerHTML =
			list.cloudPredictions[index - 1].to +
			" - " +
			list.cloudPredictions[index - 1].to +
			" " +
			list.cloudPredictions[index - 1].unit;
	}
}
