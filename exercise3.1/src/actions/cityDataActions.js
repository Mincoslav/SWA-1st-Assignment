import axios from "axios";
import { getDayValues, getDaysAgo } from "./helperFunction";
import { store } from "../app/store";

const last5Days = {
	dayMinus1: {
		date: "",
		minimumTemperature: "",
		maximumTemperature: "",
		totalPrecipitation: "",
		averageWindSpeed: ""
	},
	dayMinus2: {
		date: "",
		minimumTemperature: "",
		maximumTemperature: "",
		totalPrecipitation: "",
		averageWindSpeed: ""
	},
	dayMinus3: {
		date: "",
		minimumTemperature: "",
		maximumTemperature: "",
		totalPrecipitation: "",
		averageWindSpeed: ""
	},
	dayMinus4: {
		date: "",
		minimumTemperature: "",
		maximumTemperature: "",
		totalPrecipitation: "",
		averageWindSpeed: ""
	},
	dayMinus5: {
		date: "",
		minimumTemperature: "",
		maximumTemperature: "",
		totalPrecipitation: "",
		averageWindSpeed: ""
	}
};

let temperaturesData = [];
let precipitationsData = [];
let windsData = [];
let cloudsData = [];

let temperaturesPredictions = {
	temp0: "",
	temp1: "",
	temp2: "",
	temp3: "",
	temp4: "",
	temp5: "",
	temp6: "",
	temp7: "",
	temp8: "",
	temp9: "",
	temp10: "",
	temp11: "",
	temp12: "",
	temp13: "",
	temp14: "",
	temp15: "",
	temp16: "",
	temp17: "",
	temp18: "",
	temp19: "",
	temp20: "",
	temp21: "",
	temp22: "",
	temp23: ""
};
let precipitationsPredictions = {
	precipitation0: "",
	precipitation1: "",
	precipitation2: "",
	precipitation3: "",
	precipitation4: "",
	precipitation5: "",
	precipitation6: "",
	precipitation7: "",
	precipitation8: "",
	precipitation9: "",
	precipitation10: "",
	precipitation11: "",
	precipitation12: "",
	precipitation13: "",
	precipitation14: "",
	precipitation15: "",
	precipitation16: "",
	precipitation17: "",
	precipitation18: "",
	precipitation19: "",
	precipitation20: "",
	precipitation21: "",
	precipitation22: "",
	precipitation23: ""
};
let windsPredictions = {
	wind0: "",
	wind1: "",
	wind2: "",
	wind3: "",
	wind4: "",
	wind5: "",
	wind6: "",
	wind7: "",
	wind8: "",
	wind9: "",
	wind10: "",
	wind11: "",
	wind12: "",
	wind13: "",
	wind14: "",
	wind15: "",
	wind16: "",
	wind17: "",
	wind18: "",
	wind19: "",
	wind20: "",
	wind21: "",
	wind22: "",
	wind23: ""
};
let cloudsPredictions = {
	cloud0: "",
	cloud1: "",
	cloud2: "",
	cloud3: "",
	cloud4: "",
	cloud5: "",
	cloud6: "",
	cloud7: "",
	cloud8: "",
	cloud9: "",
	cloud10: "",
	cloud11: "",
	cloud12: "",
	cloud13: "",
	cloud14: "",
	cloud15: "",
	cloud16: "",
	cloud17: "",
	cloud18: "",
	cloud19: "",
	cloud20: "",
	cloud21: "",
	cloud22: "",
	cloud23: ""
};

function setLast5Days(storeObject, temperatures, winds, precipitations) {
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

	for (let index = 0; index <= 4; index++) {
		let minimumTemperature = {
			value: 200,
			unit: ""
		};
		let maximumTemperature = {
			value: -100,
			unit: ""
		};
		let totalPrecipitation = {
			value: 0,
			unit: "",
			total: 0
		};
		let windSpeeds = {
			values: [],
			unit: ""
		};
		for (let innerIndex = 0; innerIndex <= 23; innerIndex++) {
			if (
				minimumTemperature.value >
				last5daysTemperatures[index][innerIndex].value
			) {
				minimumTemperature.value =
					last5daysTemperatures[index][innerIndex].value;
				minimumTemperature.unit = last5daysTemperatures[index][innerIndex].unit;
			}
			if (
				maximumTemperature.value <
				last5daysTemperatures[index][innerIndex].value
			) {
				maximumTemperature.value =
					last5daysTemperatures[index][innerIndex].value;
				maximumTemperature.unit = last5daysTemperatures[index][innerIndex].unit;
			}
			totalPrecipitation.value +=
				last5daysPrecipitation[index][innerIndex].value;
			totalPrecipitation.total +=
				last5daysPrecipitation[index][innerIndex].value;
			totalPrecipitation.unit = last5daysPrecipitation[index][innerIndex].unit;

			windSpeeds.values.push(last5daysWind[index][innerIndex].value);
			windSpeeds.unit = last5daysWind[index][innerIndex].unit;
		}
		let averageWindSpeed = Math.round(
			windSpeeds.values.reduce((a, b) => a + b, 0) / windSpeeds.values.length
		);
		totalPrecipitation.total = Math.round(totalPrecipitation.total);

		storeObject["dayMinus" + (index + 1)].date =
			last5daysTemperatures[index][0].time.toString();
		storeObject["dayMinus" + (index + 1)].minimumTemperature =
			minimumTemperature.value + " °" + minimumTemperature.unit;
		storeObject["dayMinus" + (index + 1)].maximumTemperature =
			maximumTemperature.value + " °" + maximumTemperature.unit;
		storeObject["dayMinus" + (index + 1)].totalPrecipitation =
			totalPrecipitation.total + " " + totalPrecipitation.unit;
		storeObject["dayMinus" + (index + 1)].averageWindSpeed =
			averageWindSpeed + " " + windSpeeds.unit;
	}
}

const parseData = (responseData) => {
	temperaturesData = [];
	precipitationsData = [];
	windsData = [];
	cloudsData = [];

	temperaturesPredictions = {
		temp0: "",
		temp1: "",
		temp2: "",
		temp3: "",
		temp4: "",
		temp5: "",
		temp6: "",
		temp7: "",
		temp8: "",
		temp9: "",
		temp10: "",
		temp11: "",
		temp12: "",
		temp13: "",
		temp14: "",
		temp15: "",
		temp16: "",
		temp17: "",
		temp18: "",
		temp19: "",
		temp20: "",
		temp21: "",
		temp22: "",
		temp23: ""
	};
	precipitationsPredictions = {
		precipitation0: "",
		precipitation1: "",
		precipitation2: "",
		precipitation3: "",
		precipitation4: "",
		precipitation5: "",
		precipitation6: "",
		precipitation7: "",
		precipitation8: "",
		precipitation9: "",
		precipitation10: "",
		precipitation11: "",
		precipitation12: "",
		precipitation13: "",
		precipitation14: "",
		precipitation15: "",
		precipitation16: "",
		precipitation17: "",
		precipitation18: "",
		precipitation19: "",
		precipitation20: "",
		precipitation21: "",
		precipitation22: "",
		precipitation23: ""
	};
	windsPredictions = {
		wind0: "",
		wind1: "",
		wind2: "",
		wind3: "",
		wind4: "",
		wind5: "",
		wind6: "",
		wind7: "",
		wind8: "",
		wind9: "",
		wind10: "",
		wind11: "",
		wind12: "",
		wind13: "",
		wind14: "",
		wind15: "",
		wind16: "",
		wind17: "",
		wind18: "",
		wind19: "",
		wind20: "",
		wind21: "",
		wind22: "",
		wind23: ""
	};
	cloudsPredictions = {
		cloud0: "",
		cloud1: "",
		cloud2: "",
		cloud3: "",
		cloud4: "",
		cloud5: "",
		cloud6: "",
		cloud7: "",
		cloud8: "",
		cloud9: "",
		cloud10: "",
		cloud11: "",
		cloud12: "",
		cloud13: "",
		cloud14: "",
		cloud15: "",
		cloud16: "",
		cloud17: "",
		cloud18: "",
		cloud19: "",
		cloud20: "",
		cloud21: "",
		cloud22: "",
		cloud23: ""
	};

	let tempIndex = 0;
	let precipIndex = 0;
	let windIndex = 0;
	let cloudIndex = 0;

	responseData.forEach((element) => {
		if (element.hasOwnProperty("from")) {
			if (element.type === "temperature") {
				temperaturesPredictions["temp" + tempIndex] = element;
				tempIndex += 1;
			} else if (element.type === "precipitation") {
				precipitationsPredictions["precipitation" + precipIndex] = element;
				precipIndex += 1;
			} else if (element.type === "wind speed") {
				windsPredictions["wind" + windIndex] = element;
				windIndex += 1;
			} else if (element.type === "cloud coverage") {
				cloudsPredictions["cloud" + cloudIndex] = element;
				cloudIndex += 1;
			}
		} else {
			if (element.type === "temperature") {
				temperaturesData.push(element);
			} else if (element.type === "precipitation") {
				precipitationsData.push(element);
			} else if (element.type === "wind speed") {
				windsData.push(element);
			} else if (element.type === "cloud coverage") {
				cloudsData.push(element);
			}
		}
	});
	setLast5Days(last5Days, temperaturesData, windsData, precipitationsData);
};

export const fetchCityDataHorsens = () => {
	return (dispatch) => {
		axios
			.all([
				axios.get(`http://localhost:8080/data/Horsens`),
				axios.get(`http://localhost:8080/forecast/Horsens`)
			])
			.then(
				axios.spread((dataResponse, forecastResponse) => {
					const historicalData = dataResponse.data;
					const forecastData = forecastResponse.data;
					const mergedData = historicalData.concat(forecastData);
					parseData(mergedData);
					dispatch({
						type: "historical-data",
						cityName: "Horsens",
						historicalData: {
							temperatures: temperaturesData,
							latestTemperature:
								temperaturesData[temperaturesData.length - 1].value +
								" °" +
								temperaturesData[temperaturesData.length - 1].unit,
							winds: windsData,
							latestWind:
								windsData[windsData.length - 1].value +
								" " +
								windsData[windsData.length - 1].unit,
							precipitations: precipitationsData,
							latestPrecipitation:
								precipitationsData[precipitationsData.length - 1].value +
								" " +
								precipitationsData[precipitationsData.length - 1].unit,
							cloudsData: cloudsData,
							latestClouds:
								cloudsData[cloudsData.length - 1].value +
								" " +
								cloudsData[cloudsData.length - 1].unit
						},
						forecastData: {
							temperatures: temperaturesPredictions,
							winds: windsPredictions,
							precipitations: precipitationsPredictions,
							clouds: cloudsPredictions
						},
						last5DaysData: last5Days
					});
				})
			);
	};
};

export const fetchCityDataAarhus = () => {
	return (dispatch) => {
		axios
			.all([
				axios.get(`http://localhost:8080/data/Aarhus`),
				axios.get(`http://localhost:8080/forecast/Aarhus`)
			])
			.then(
				axios.spread((dataResponse, forecastResponse) => {
					const historicalData = dataResponse.data;
					const forecastData = forecastResponse.data;
					const mergedData = historicalData.concat(forecastData);
					parseData(mergedData);
					dispatch({
						type: "historical-data",
						cityName: "Aarhus",
						historicalData: {
							temperatures: temperaturesData,
							latestTemperature:
								temperaturesData[temperaturesData.length - 1].value +
								" °" +
								temperaturesData[temperaturesData.length - 1].unit,
							winds: windsData,
							latestWind:
								windsData[windsData.length - 1].value +
								" " +
								windsData[windsData.length - 1].unit,
							precipitations: precipitationsData,
							latestPrecipitation:
								precipitationsData[precipitationsData.length - 1].value +
								" " +
								precipitationsData[precipitationsData.length - 1].unit,
							cloudsData: cloudsData,
							latestClouds:
								cloudsData[cloudsData.length - 1].value +
								" " +
								cloudsData[cloudsData.length - 1].unit
						},
						forecastData: {
							temperatures: temperaturesPredictions,
							winds: windsPredictions,
							precipitations: precipitationsPredictions,
							clouds: cloudsPredictions
						},
						last5DaysData: last5Days
					});
				})
			);
	};
};

export const fetchCityDataCopenhagen = () => {
	return (dispatch) => {
		axios
			.all([
				axios.get(`http://localhost:8080/data/Copenhagen`),
				axios.get(`http://localhost:8080/forecast/Copenhagen`)
			])
			.then(
				axios.spread((dataResponse, forecastResponse) => {
					const historicalData = dataResponse.data;
					const forecastData = forecastResponse.data;
					const mergedData = historicalData.concat(forecastData);
					parseData(mergedData);
					dispatch({
						type: "historical-data",
						cityName: "Copenhagen",
						historicalData: {
							temperatures: temperaturesData,
							latestTemperature:
								temperaturesData[temperaturesData.length - 1].value +
								" °" +
								temperaturesData[temperaturesData.length - 1].unit,
							winds: windsData,
							latestWind:
								windsData[windsData.length - 1].value +
								" " +
								windsData[windsData.length - 1].unit,
							precipitations: precipitationsData,
							latestPrecipitation:
								precipitationsData[precipitationsData.length - 1].value +
								" " +
								precipitationsData[precipitationsData.length - 1].unit,
							cloudsData: cloudsData,
							latestClouds:
								cloudsData[cloudsData.length - 1].value +
								" " +
								cloudsData[cloudsData.length - 1].unit
						},
						forecastData: {
							temperatures: temperaturesPredictions,
							winds: windsPredictions,
							precipitations: precipitationsPredictions,
							clouds: cloudsPredictions
						},
						last5DaysData: last5Days
					});
				})
			);
	};
};

export const reload = () => {
	const state = store.getState();

	switch (state.cityName) {
		case "Copenhagen":
			return fetchCityDataCopenhagen();
		case "Aarhus":
			return fetchCityDataAarhus();
		case "Horsens":
			return fetchCityDataHorsens();
		default:
			console.log("nothing");
	}
};
