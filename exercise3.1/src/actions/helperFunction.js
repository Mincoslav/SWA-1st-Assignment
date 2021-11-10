
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


export function getDaysAgo(daysAgo) {
	var a = new Date();
	a.setDate(a.getDate() - daysAgo);
	return a;
}

export function withoutTime(dateTime) {
	var date = new Date(dateTime.getTime());
	date.setHours(0, 0, 0, 0);
	return date;
}

export function getDayValues(date, array, fromDate, toDate) {
	const newArray = [];
	// console.log(date)
	// console.log(array)
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
			console.log("HERE")
			array[index].time = new Date(array[index].time);
			if (
				array[index].time.getDate() === date.getDate() &&
				array[index].time.getMonth() === date.getMonth() &&
				array[index].time.getFullYear() === date.getFullYear()
			) {
				// console.log(array[index])
				newArray.push(array[index]);
			}
		}
	}
	return newArray;
}

// function setLast5Dates(list) {
// 	for (let index = 0; index < list.length; index++) {
// 		$("#date" + index).text(withoutTime(list[index][0].time));
// 	}
// }

// function minimumTemperature5Days(list) {
// 	let minimumTemperature = {
// 		value: 200,
// 		unit: ""
// 	};

// 	for (let index = 0; index < list.length; index++) {
// 		for (let innerIndex = 0; innerIndex < list[index].length; innerIndex++) {
// 			if (minimumTemperature.value > list[index][innerIndex].value) {
// 				minimumTemperature.value = list[index][innerIndex].value;
// 				minimumTemperature.unit = list[index][innerIndex].unit;
// 			}
// 		}

// 		$("#minimumTemperatureValue" + index).text(
// 			minimumTemperature.value + "° " + minimumTemperature.unit
// 		);
// 	}

// 	$("#minimumTemperature").text(
// 		minimumTemperature.value + "° " + minimumTemperature.unit
// 	);
// }

// function maximumTemperature5Days(list) {
// 	let maximumTemperature = {
// 		value: -100,
// 		unit: ""
// 	};

// 	for (let index = 0; index < list.length; index++) {
// 		for (let innerIndex = 0; innerIndex < list[index].length; innerIndex++) {
// 			if (maximumTemperature.value < list[index][innerIndex].value) {
// 				maximumTemperature.value = list[index][innerIndex].value;
// 				maximumTemperature.unit = list[index][innerIndex].unit;
// 			}
// 		}

// 		$("#maximumTemperatureValue" + index).text(
// 			maximumTemperature.value + "° " + maximumTemperature.unit
// 		);
// 	}

// 	$("#maximumTemperature").text(
// 		maximumTemperature.value + "° " + maximumTemperature.unit
// 	);
// }

// function totalPrecipitation5Days(list) {
// 	let totalPrecipitation = {
// 		value: 0,
// 		unit: "",
// 		total: 0
// 	};

// 	for (let index = 0; index < list.length; index++) {
// 		for (let innerIndex = 0; innerIndex < list[index].length; innerIndex++) {
// 			totalPrecipitation.value += list[index][innerIndex].value;
// 			totalPrecipitation.total += list[index][innerIndex].value;
// 			totalPrecipitation.unit = list[index][innerIndex].unit;
// 		}

// 		totalPrecipitation.value = Math.round(totalPrecipitation.value);

// 		$("#totalPrecipitationValue" + index).text(
// 			totalPrecipitation.value + " " + totalPrecipitation.unit
// 		);
// 		totalPrecipitation.value = 0;
// 	}

// 	$("#totalPrecipitation").text(
// 		Math.round(totalPrecipitation.total) + " " + totalPrecipitation.unit
// 	);
// }

// function averageWindSpeed5Days(list) {
// 	let windSpeeds = {
// 		values: [],
// 		unit: ""
// 	};

// 	for (let index = 0; index < list.length; index++) {
// 		for (let innerIndex = 0; innerIndex < list[index].length; innerIndex++) {
// 			windSpeeds.values.push(list[index][innerIndex].value);
// 			windSpeeds.unit = list[index][innerIndex].unit;
// 		}

// 		averageWindSpeed = Math.round(
// 			windSpeeds.values.reduce((a, b) => a + b, 0) / windSpeeds.values.length
// 		);

// 		$("#averageWindSpeedValue" + index).text(
// 			averageWindSpeed + " " + windSpeeds.unit
// 		);
// 	}

// 	$("#averageWindSpeed").text(averageWindSpeed + " " + windSpeeds.unit);
// }

// function predictionsForNext24Hours(predictions) {
//     return predictions
// }