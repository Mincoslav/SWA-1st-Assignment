const getCityData = (
	state = {
		type: "historical-data",
		cityName: '',
		historicalData: {
			temperatures: [],
			latestTemperature: "0 °C",
			winds:[],
			latestWind: "0 m/s",
			precipitations: [],
			latestPrecipitation: "0 mm",
			cloudsData: [],
			latestClouds: "0 %"
		},
		forecastData: {
			temperatures: {
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
			},
			winds: {
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
			},
			precipitations: {
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
			},
			clouds: {
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
			}
		},
		last5DaysData: {
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
		}
	},
	action
) => {
	switch (action.type) {
		case "historical-data":
			return {
				...state,
				type: "historical-data",
				cityName: action.cityName,
				historicalData: action.historicalData,
				forecastData: action.forecastData,
				last5DaysData: action.last5DaysData
			};
		default:
			return state;
	}
};

export default getCityData;
