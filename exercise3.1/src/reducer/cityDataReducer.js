const getCityData = (
	state = {
        type: 'historical-data',
		data: [],
        cityName: "default",
        latestTemperature: "0 °C",
        latestPrecipitation: "0 mm",
        latestWind: "0 m/s",
        latestCloudCoverage: "0 %"
	},
	action
) => {
	switch (action.type) {
		case "historical-data":
			return {
				...state,
                type: 'historical-data',
				data: action.data,
                cityName: action.cityName,
                latestTemperature: action.latestTemperature,
                latestPrecipitation: action.latestPrecipitation,
                latestWind: action.latestWind,
                latestCloudCoverage: action.latestCloudCoverage
				
			};
		default:
			return state;
	}
};

export default getCityData;
