import axios from "axios";

export const fetchCityDataHorsens = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:8080/data/Horsens`)
			.then((response) => {
				const data = response.data;
				console.log(data)
				dispatch({
					type: 'historical-data',
					data: data,
					cityName: data[data.length-1].place,
					latestTemperature: data[data.length-4].value + " °" + data[data.length-4].unit,
					latestPrecipitation: data[data.length-3].value + " " + data[data.length-3].unit,
					latestWind: data[data.length-2].value + " " + data[data.length-2].unit,
					latestCloudCoverage: data[data.length-1].value + " " + data[data.length-1].unit
				}) 
			})
	}
}

export const fetchCityDataAarhus = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:8080/data/Aarhus`)
			.then((response) => {
				const data = response.data;
				console.log(data)
				dispatch({
					type: 'historical-data',
					data: data,
					cityName: data[data.length-1].place,
					latestTemperature: data[data.length-4].value + " °" + data[data.length-4].unit,
					latestPrecipitation: data[data.length-3].value + " " + data[data.length-3].unit,
					latestWind: data[data.length-2].value + " " + data[data.length-2].unit,
					latestCloudCoverage: data[data.length-1].value + " " + data[data.length-1].unit
				}) 
			})
	}
}

export const fetchCityDataCopenhagen = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:8080/data/Copenhagen`)
			.then((response) => {
				const data = response.data;
				console.log(data)
				dispatch({
					type: 'historical-data',
					data: data,
					cityName: data[data.length-1].place,
					latestTemperature: data[data.length-4].value + " °" + data[data.length-4].unit,
					latestPrecipitation: data[data.length-3].value + " " + data[data.length-3].unit,
					latestWind: data[data.length-2].value + " " + data[data.length-2].unit,
					latestCloudCoverage: data[data.length-1].value + " " + data[data.length-1].unit
				}) 
			})
	}
}