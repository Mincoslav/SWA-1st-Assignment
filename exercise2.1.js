//EVENT
function Event(state) {

    function getTime() {
        return state.time;
    }

    function getPlace() {
        return state.place;
    }

    return {
        getTime,
        getPlace
    }
}

//DATA TYPE
function DataType(state) {

    function getType() {
        return state.type;
    }

    function getUnit() {
        return state.unit;
    }

    return {
        getType,
        getUnit
    }
}

// DATE INTERVAL
function DateInterval(state) {

    function getFrom() {
        return state.from
    }

    function getTo() {
        return state.to
    }

    function contains(date) {
        if(date>getFrom() && date<getTo()) {
            return true
        }
        else {
            return false
        }
    }

    return {
        getFrom,
        getTo,
        contains
    }
}

//WEATHER DATA
function WeatherData(state) {

    const event = eventNature(state)
    const type = dataType(state)

    function getValue() {
        return state.value
    }

    return {
        ...event, ...type, getValue
    }
}

// WEATHER HISTORY


// TEMPERATURE CLASS
function Temperature (time, place, type, unit, value) {

    const state = { time, place, type, unit, value }
    const weatherDataState = WeatherData(state)

    function convertToC() {
        if (state.unit === 'F') {
            return new Temperature(this.time, this.place, this.type, 'C', (state.value - 32) / 1.8);
        }
    }

    function convertToF() {
        if (state.unit === 'C') {
            return new Temperature(this.time, this.place, this.type, 'F', state.value * 1.8 + 32);
        }
    }

    function toString() { return state }

    return { convertToC, convertToF, toString }
}

//Testing temperature
let temperature1 = Temperature('C', 21)
console.log(temperature1.toString())

temperature1 = temperature1.convertToF()
console.log(temperature1.toString())

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