//EVENT
function EventData() {

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
function DataType() {

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

    function from() {
        return state.from;
    }

    function to() {
        return state.to;
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

    const event = EventData(state)
    const type = DataType(state)

    function value() {
        return state.value;
    }

    return {
        ...event, ...type, value
    }
}

// TESTING
// const state = {
//     time: Date(),
//     place: 'Horsens',
//     value: '123'
// }
// const data = WeatherData(state)
// console.log(data.value())
// END OF TESTING

// WEATHER HISTORY
function WeatherHistory(data) {

    //let placeFilter = ''
    //let typeFilter = ''
    //let periodFilter = ''

    // Contains WeatherData objects
    let weatherData = data => [];

    //const filteredData = []

    function forPlace(place) {
        let newPlaceFilter = data.filter(place);
        return newPlaceFilter;
    }

    function forType(type) {
        let newTypeFilter = data.filter(type);
        return newTypeFilter;
    }

    function forPeriod(period) {
        let newPeriodFilter = data.filter(period);
        return newPeriodFilter;
    }

    //returning weather history with both existing and new data
    function including(newData) {
       let  updatedData = new WeatherHistory(weatherData)
       updatedData = updatedData.concat(newData) 

        // let newWeatherData = weatherData.push(newData);
        // return newWeatherData;
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
        return weatherData
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

//WEATHER HISTORY TESTING
//const fromTester = new Date('December 17, 1995 03:24:00')
//const toTester = new Date('December 17, 2021 05:00:00')

//const interval = DateInterval(fromTester, toTester)

//const currentTime = new Date('September 17, 2000 15:35:00')

//const data1 = Wind('West', currentTime, 'Horsens', 'Wind', 'M/S',  3)
//const data2 = Wind('East', currentTime, 'Aarhus', 'Wind', 'MPH', 15)

// let data3 = Temperature(Date, 'Horsens', 'Temperature', 'C', 30)
// data3 = data3.convertToUSUnits()
// console.log(data3.toString())
//const data4 = Temperature(currentTime, 'Aarhus', 'Temperature', 'F', 69)


//const data5 = Precipitation('Rain', currentTime, 'Horsens', 'Precipitation', 'MM', 30)
//const data6 = Precipitation('Light Rain', currentTime, 'Aarhus', 'Precipitation', 'Inch', 3)

//let dataList = [data1, data2, data3, data4, data5, data6]
//console.log(dataList)

//const history = WeatherHistory()
// history.setPlaceFilter('Horsens')
// history.setTypeFilter('Temperature')
//history.forPeriod(interval)
// console.log(history)
//history.including(dataList)

// console.log(history.getFilteredData())
//list = history.getFilteredData()


// const previousTime = new Date('September 17, 2000 15:35:00')
// const currentTime = new Date();
// const newData = including(currentTime);
// console.log(newData)
//END OF WEATHER HISTORY TESTING

// TEMPERATURE CLASS
function Temperature (time, place, type, unit, value) {

    const state = { time, place, type, unit, value }
    const weatherDataState = WeatherData(state)

    function convertToC() {
        const temperatureInC = (state.unit === 'F')
            ? new Temperature(state.time, state.place, state.type, 'C', (state.value - 32) / 1.8)
            : state.value

        return temperatureInC;
    }

    function convertToF() {
        const temperatureInF = (state.unit === 'C')
            ? new Temperature(state.time, state.place, state.type, 'F', state.value * 1.8 + 32)
            : state.value

        return temperatureInF;
    }

    function toString() {
        return state
    }

    return {...weatherDataState, convertToC, convertToF, toString }
}

// TEMPERATURE TESTER
// let data = Temperature(Date(), 'Horsens', 'Temperature', 'C', '23' )
// data = data.convertToF()
// console.log(data.toString())
// END OF TEMPERATURE TESTING

// PRECIPITATION
function Precipitation(time, place, type, unit, value) {

    const state = { time, place, type, unit, value };
    const weatherDataState = WeatherData(state)

    function precipitationType() {
        return state.type;
    }

    function convertToInches() {
        const conversionToInches = (state.unit === 'MM')
            ? new Precipitation(state.time, state.place, state.type, 'Inch', state.value / 25.4)
            : state.value

        return conversionToInches;
    }

    function convertToMM() {
        const conversionToMm = (state.unit === 'Inch')
            ? new Precipitation(state.time, state.place, state.type, 'MM', state.value * 25.4)
            : state.value

        return conversionToMm;
    }

    function toString() {
        return state
    }

    return {
        ...weatherDataState,
        precipitationType,
        convertToInches,
        convertToMM,
        toString
    }
}

// PRECIPITATION TESTER
// let data = Precipitation(Date(), 'Horsens', 'Temperature', 'Inch', '7' )
// data = data.convertToMM()
// console.log(data.toString())
// END OF PRECIPITATION TESTING

// WIND
function Wind (directionTo, time, place, type, unit, value) {

    const state = { directionTo, time, place, type, unit, value }
    const weatherDataState = WeatherData(state)

    function direction() {
        return state.directionTo
    }

    function convertToMPH() {
        const conversionToMph = (state.unit === 'M/S')
            ? new Wind(state.directionTo, state.time, state.place, state.type, 'MPH', state.value * 2.237)
            : state.value
        return conversionToMph;

        // if (state.unit === 'M/S') {
        //     state.unit = 'MPH'
        //     state.value = state.value * 2.237
        // }
    }

    function convertToMperS() {
        const conversionToMperS = (state.unit === 'MPH')
            ? new Wind(state.directionTo, state.time, state.place, state.type, 'M/S', state.value / 2.237)
            : state.value
        return conversionToMperS;

        // if (state.unit === 'MPH') {
        //     state.unit = 'M/S'
        //     state.value = state.value / 2.237
        // }
    }

    function toString() {
        return state
    }

    return {
        ...weatherDataState, convertToMPH, convertToMperS, toString
    }
}

// WIND TESTING
// let data = Wind('South', Date(), 'Horsens', 'Wind', 'MPH', '7' )
// data = data.convertToMperS()
// console.log(data.toString())
//END OF WIND TESTING

// CLOUD COVERAGE
function CloudCoverage(time, place, type, unit, value) {

    const state = { time, place, type, unit, value}
    const weatherDataState = WeatherData(state)

    function getSkyStatus() {
        return state.value;
    }

    function toString() {
        return state
    }

    return {
        ...weatherDataState,
        getSkyStatus,
        toString
    }
}

// CLOUD TESTING
// let data = CloudCoverage(Date(), 'Horsens', 'Cloud', '%', '5')
// //data = data.getSkyStatus()
// console.log(data.toString())
//END OF CLOUD TESTING

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

    function from() {
        return state.form
    }

    function to() {
        return state.to
    }

    return {
        ...event, ...type, matches, from, to
    }
}

// WEATHER FORECAST
function WeatherForecast() {
    //let placeFilter = ''
    //let typeFilter = ''
    //let periodFilter = ''

    //Contains WeatherPrediction objects
    let data = []
    // const filteredData = []

    function forPlace(place) {
        let newPlaceFilter = data.filter(place);
        return newPlaceFilter;
    }

    function forType(type) {
        let newTypeFilter = data.filter(type);
        return newTypeFilter;
    }

    function forPeriod(period) {
        let newPeriodFilter = data.filter(period);
        return newPeriodFilter;
    }

    function including(newData) {
        return data = data.concat(newData);
    }

    function convertToUSUnits() {
        const conversionToUsUnits = data.forEach(dataPoint =>
            (dataPoint.getType() === 'Wind') ? dataPoint.convertToMPH()
                : (dataPoint.getType() === 'Temperature') ? dataPoint.convertToF()
                    : (dataPoint.getType() === 'Precipitation') ? dataPoint.convertToInches()
                        : conversionToUsUnits)
        return conversionToUsUnits;
    }

    function convertToInternationalUnits() {
        const conversionToInternUnits = data.forEach(dataPoint =>
            (dataPoint.getType() === 'Wind') ? dataPoint.convertToMperS()
                : (dataPoint.getType() === 'Temperature') ? dataPoint.convertToC()
                    : (dataPoint.getType() === 'Precipitation') ? dataPoint.convertToMM()
                        : conversionToInternUnits)
        return conversionToInternUnits;
    }

    //"extraData" is an array of type WeatherPrediction
    function include(extraData) {
        data = data.concat(extraData);
    }

    function averageFromValue(average) {
        //return average.reduce((temp1, temp2) => (temp1 + temp2)) / average.length;
        for (let i = 0; i < data.length; i++) {
            newData = []
            newData.push(data[i].from) 
          }
          return average(newData)
    }

    function averageToValue() {
        for (let i = 0; i < data.length; i++)
            newData = []
            newData.push(data[i].to) 
          }
          return average(newData)
    }

    function getData() {
        return data
    }

    return {
        forPlace,
        forType,
        forPeriod,
        including,
        convertToUSUnits,
        convertToInternationalUnits,
        averageFromValue,
        averageToValue,
        getData
    }
}


// TEMPERATURE PREDICTION
function TemperaturePrediction(time, place, type, unit, value) {

    const state = {time, place, type, unit, value}
    const weatherPredictionState = WeatherPrediction(state)

    function convertToF() {
        const temperatureInF = (state.unit === 'C')
            ? new Temperature(state.time, state.place, state.type, 'F', state.value * 1.8 + 32)
            : state.value

        return temperatureInF;
    }

    function convertToC() {
        const temperatureInF = (state.unit === 'C')
            ? new Temperature(state.time, state.place, state.type, 'F', state.value * 1.8 + 32)
            : state.value

        return temperatureInF;
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

    function types() {
        return ['Light rain', 'Rain', 'Heavy rain', 'Showers']
    }

    //"data" must be of type WeatherData
    function matches(data) {
        return weatherPredictionState.matches(data) && data.getPrecipitationType() === state.precipitationType
    }

    function convertToInches() {
        const conversionToInches = (state.unit === 'MM')
            ? new Precipitation(state.time, state.place, state.type, 'Inch', state.value / 25.4)
            : state.value

        return conversionToInches;
    }

    function convertToMM() {
        const conversionToMm = (state.unit === 'Inch')
            ? new Precipitation(state.time, state.place, state.type, 'MM', state.value * 25.4)
            : state.value

        return conversionToMm;
    }

    function toString() {
        return state
    }

    return {
        ...weatherPredictionState, types, matches, convertToInches, convertToMM, toString
    }
}

// WIND PREDICTION
function WindPrediction(direction, time, place, type, unit, value) {
    const state = {direction, time, place, type, unit, value}
    const weatherPredictionState = WeatherPrediction(state)

    function directions() {
        return ['West', 'East', 'North', 'South', 'NorthEast', 'NorthWest', 'SouthEast', 'SouthWest']
    }

    function matches(data) {
        return weatherPredictionState.matches(data) && data.getDirection() === state.direction
    }

    function convertToMPH() {
        const conversionToMph = (state.unit === 'M/S')
            ? new Wind(state.directionTo, state.time, state.place, state.type, 'MPH', state.value * 2.237)
            : state.value
        return conversionToMph;
    }

    function convertToMperS() {
        const conversionToMperS = (state.unit === 'MPH')
            ? new Wind(state.directionTo, state.time, state.place, state.type, 'M/S', state.value / 2.237)
            : state.value
        return conversionToMperS;
    }

    function toString() {
        return state
    }

    return {
        ...weatherPredictionState, directions, matches, convertToMPH, convertToMperS, toString
    }
}

// CLOUD COVERAGE PREDICTION
function CloudCoveragePrediction(time, place, type, unit, value, sky) {
    const state = { time, place, type, unit, value, sky }
    const weatherPredictionState = WeatherPrediction(state)

    function getSkyStatus() {
        return state.value;
    }

    return {
        ...weatherPredictionState, getSkyStatus
    }
}

// END OF ASSIGNMENT