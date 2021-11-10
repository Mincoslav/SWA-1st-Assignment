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
				temp0: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp1: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp2: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp3: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp4: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp5: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp6: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp7: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp8: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp9: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp10: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp11: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp12: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp13: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp14: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp15: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp16: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp17: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp18: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp19: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp20: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp21: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp22: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				temp23: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				}
			},
			winds: {
				wind0: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind1: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind2: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind3: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind4: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind5: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind6: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind7: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind8: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind9: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind10: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind11: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind12: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind13: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind14: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind15: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind16: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind17: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind18: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind19: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind20: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind21: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind22: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				wind23: {
					from: "",
					to: "",
					directions: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				}
			},
			precipitations: {
				precipitation0: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation1: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation2: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation3: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation4: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation5: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation6: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation7: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation8: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation9: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation10: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation11: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation12: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation13: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation14: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation15: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation16: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation17: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation18: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation19: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation20: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation21: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation22: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				precipitation23: {
					from: "",
					to: "",
					precipitation_types : "",
					type: "",
					unit: "",
					time: "",
					place: ""
				}
			},
			clouds: {
				cloud0: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud1: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud2: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud3: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud4: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud5: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud6: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud7: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud8: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud9: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud10: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud11: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud12: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud13: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud14: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud15: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud16: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud17: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud18: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud19: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud20: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud21: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud22: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				},
				cloud23: {
					from: "",
					to: "",
					type: "",
					unit: "",
					time: "",
					place: ""
				}
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
