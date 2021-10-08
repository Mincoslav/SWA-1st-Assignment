//EVENT
function Event(state) {

    function getTime() {
        return time(state);
    }

    function getPlace() {
        return place(state);
    }

    return {
        getTime,
        getPlace
    }
}

//DATA TYPE
function DataType(state) {

    function getType() {
        return type(state);
    }

    function getUnit() {
        return unit(state);
    }

    return {
        getType,
        getUnit
    }
}

// DATE INTERVAL
function DateInterval(state) {

    function from() {
        return from(state);
    }

    function to() {
        return to(state);
    }

    function contains(date) {
        return (date > from() && date < to())
    }

    return {
        from,
        to,
        contains
    }
}

// WEATHER DATA
function WeatherData(state) {

    const Event = eventNature(state)
    const Type = dataType(state)

    function value() {
        return value(state);
    }

    return {
        ...event, ...type, value
    }
}

// WEATHER HISTORY
function WeatherHistory(data) {

    let placeFilter = ''
    let typeFilter = ''
    let periodFilter = ''

    let newData;

    // Contains WeatherData objects
    // let weatherData = data => [];

    // const filteredData = []

    function forPlace(place) {
        let newPlaceFilter = placeFilter.filter(place);
        return newPlaceFilter;
    }

    function forType(type) {
        let newTypeFilter = typeFilter.filter(type);
        return newTypeFilter;
    }

    function forPeriod(period) {
        let newPeriodFilter = periodFilter.filter(period);
        return newPeriodFilter;
    }

    //returning weather history with both existing and new data
    function including(data) {
        let fullWeatherHistory = data.map(newData);
        return fullWeatherHistory;
    }

    function convertToUSUnits() {

        const conversionToUsUnits = data.forEach(dataPoint =>
            (dataPoint.getType() === 'Wind') ? dataPoint.convertToMPH()
            : (dataPoint.getType() === 'Temperature') ? dataPoint.convertToF()
            : (dataPoint.getType() === 'Precipitation') ? dataPoint.convertToInches()
            : conversionToUsUnits)

        // data.forEach(dataPoint => {
        //     if(dataPoint.getType() === 'Wind') {
        //         dataPoint.convertToMPH()
        //     }
        //     else if(dataPoint.getType() === 'Temperature') {
        //         dataPoint.convertToF()
        //     }
        //     else if(dataPoint.getType() === 'Precipitation') {
        //         dataPoint.convertToInches()
        //     }
        // })
    }

    function convertToInternationalUnits() {

        const conversionToInternUnits = data.forEach(dataPoint =>
            (dataPoint.getType() === 'Wind') ? dataPoint.convertToMperS()
            : (dataPoint.getType() === 'Temperature') ? dataPoint.convertToC()
            : (dataPoint.getType() === 'Precipitation') ? dataPoint.convertToMM()
            : conversionToInternUnits)

        // data.forEach((dataPoint) => {
        //     if(dataPoint.getType() === 'Wind') {
        //         dataPoint.convertToMperS()
        //     }
        //     else if(dataPoint.getType() === 'Temperature') {
        //         dataPoint.convertToC()
        //     }
        //     else if(dataPoint.getType() === 'Precipitation') {
        //         dataPoint.convertToMM()
        //     }
        // })
    }

    function getData() {
        return data
    }

    return {
        forPlace,
        forType,
        forPeriod,
        including,
        convertToInternationalUnits,
        convertToUSUnits,
        getData
    }
}

// TEMPERATURE CLASS
function Temperature (time, place, type, unit, value) {

    const state = { time, place, type, unit, value }
    const weatherDataState = WeatherData(state)

    function convertToC() {
        const temperatureInC = Temperature => (state.unit === 'F')
            ? ((state.value - 32) / 1.8)
            : temperatureInC

        return temperatureInC;
        // if (state.unit === 'F') {
        //     return new Temperature(this.time, this.place, this.type, 'C', (state.value - 32) / 1.8);
        // }
    }

    function convertToF() {
        const temperatureInF = Temperature => (state.unit === 'C')
            ? state.value * 1.8 + 32
            : temperatureInF()

        if (state.unit === 'C') {
            return new Temperature(this.time, this.place, this.type, 'F', state.value * 1.8 + 32);
        }
    }

    return { convertToC, convertToF }
}

// PRECIPITATION
function Precipitation(time, place, type, unit, value) {

    const state = { time, place, type, unit, value };
    const weatherDataState = WeatherData(state)

    function precipitationType() {
        return state.type;
    }

    function convertToInches() {
        if(state.unit === 'MM') {
            state.unit = 'Inch'
            state.value = state.value / 25.4;
        }
    }

    function convertToMM() {
        if(state.unit === 'Inch') {
            state.unit = 'MM';
            state.value = state.value * 25.4;
        }
    }

    return {
        ...weatherDataState,
        precipitationType,
        convertToInches,
        convertToMM
    }
}

// WIND
function Wind (direction, time, place, type, unit, value) {

    const state = { direction, time, place, type, unit, value }
    const weatherDataState = WeatherData(state)

    function direction() {
        return state.direction
    }

    function convertToMPH() {
        if (state.unit === 'M/S') {
            state.unit = 'MPH'
            state.value = state.value * 2.237
        }
    }

    function convertToMperS() {
        if (state.unit === 'MPH') {
            state.unit = 'M/S'
            state.value = state.value / 2.237
        }
    }

    function toString() {
        return state
    }

    return {
        ...weatherDataState, getDirection, convertToMPH, convertToMperS, toString
    }
}

// CLOUD COVERAGE
function CloudCoverage(time, place, type, unit, value, sky) {

    const state = { time, place, type, unit, value, sky }
    const weatherDataState = WeatherData(state)

    function getSkyStatus() {
        switch (state.value) {
            case 0:
                state.sky = "the sky is empty";
                break;
            case 1:
                state.sky = "Clear";
                break;
            case 2:
                state.sky = "Clear";
                break;
            case 3:
                state.sky = "Kinda cloudy";
                break;
            case 4:
                state.sky = "Half Cloudy";
                break;
            case 5:
                state.sky = "Half Cloudy";
                break;
            case 6:
                state.sky = "very Cloudy";
                break;
            case 7:
                state.sky = "very Cloudy";
                break;
            case 8:
                state.sky = "Completely Cloudy";
                break;
            case 9:
                state.sky = "obstructed from view";
        }
        return "the sky is " + state.sky;
    }

    return {
        ...weatherDataState, getSkyStatus
    }
}

// WEATHER PREDICTION
function WeatherPrediction(state) {

    const event = eventNature(state)
    const type = dataType(state)

    function matches(data) {
        return data.getData() === state.getTime()
            && data.getPlace() === state.getPlace()
            && data.getType() === state.getType()
            && data.getUnit() === state.getUnit()
            && data.getValue() === state.getValue()
    }

    function getMin() {
        return state.min
    }

    function getMax() {
        return state.max
    }

    return {
        ...event, ...type, matches, getMin, getMax
    }
}

// WEATHER FORECAST


// TEMPERATURE PREDICTION
function TemperaturePrediction(time, place, type, unit, value) {

    const state = {time, place, type, unit, value}
    const weatherPredictionState = WeatherPrediction(state)

    function convertToF() {
        if (state.unit === 'C') {
            state.unit = 'F'
            state.value = state.value * 1.8 + 32
        }
    }

    function convertToC() {
        if (state.unit === 'F') {
            state.unit = 'C'
            state.value = (state.value - 32) / 1.8
        }
    }

    function toString() {
        return state
    }

    return {
        ...weatherPredictionState, convertToF, convertToC, toString
    }
}

// PRECIPITATION PREDICTION
function PrecipitationPrediction(precipitationType, time, place, type, unit, value) {
    const state = {precipitationType, time, place, type, unit, value}
    const weatherPredictionState = WeatherPrediction(state)

    function getExpectedTypes() {
        return ['Light rain', 'Rain', 'Heavy rain', 'Showers']
    }

    //"data" must be of type WeatherData
    function matches(data) {
        return weatherPredictionState.matches(data) && data.getPrecipitationType() === state.precipitationType
    }

    function convertToInches() {
        if (state.unit === 'MM') {
            state.unit = 'Inch'
            state.value = state.value / 25.4
        }
    }

    function convertToMM() {
        if (state.unit === 'Inch') {
            state.unit = 'MM'
            state.value = state.value * 25.4
        }
    }

    function toString() {
        return state
    }

    return {
        ...weatherPredictionState, getExpectedTypes, matches, convertToInches, convertToMM, toString
    }
}

// WIND PREDICTION
function WindPrediction(direction, time, place, type, unit, value) {
    const state = {direction, time, place, type, unit, value}
    const weatherPredictionState = WeatherPrediction(state)

    function getExpectedDirections() {
        return ['West', 'East', 'North', 'South', 'NorthEast', 'NorthWest', 'SouthEast', 'SouthWest']
    }

    function matches(data) {
        return weatherPredictionState.matches(data) && data.getDirection() === state.direction
    }

    function convertToMPH() {
        if (state.unit === 'M/S') {
            state.unit = 'MPH'
            state.value = state.value * 2.237
        }
    }

    function convertToMperS() {
        if (state.unit === 'MPH') {
            state.unit = 'M/S'
            state.value = state.value / 2.237
        }
    }

    function toString() {
        return state
    }

    return {
        ...weatherPredictionState, getExpectedDirections, matches, convertToMPH, convertToMperS, toString
    }
}

// CLOUD COVERAGE PREDICTION
function CloudCoveragePrediction(time, place, type, unit, value, sky) {
    const state = { time, place, type, unit, value, sky }
    const weatherPredictionState = WeatherPrediction(state)

    function getSkyStatus() {
        switch (state.value) {
            case 0:
                state.sky = "the sky is empty";
                break;
            case 1:
                state.sky = "Clear";
                break;
            case 2:
                state.sky = "Clear";
                break;
            case 3:
                state.sky = "Kinda cloudy";
                break;
            case 4:
                state.sky = "Half Cloudy";
                break;
            case 5:
                state.sky = "Half Cloudy";
                break;
            case 6:
                state.sky = "very Cloudy";
                break;
            case 7:
                state.sky = "very Cloudy";
                break;
            case 8:
                state.sky = "Completely Cloudy";
                break;
            case 9:
                state.sky = "obstructed from view";
        }
        return "the sky is " + state.sky;
    }

    return {
        ...weatherPredictionState, getSkyStatus
    }
}

// END OF ASSIGNMENT