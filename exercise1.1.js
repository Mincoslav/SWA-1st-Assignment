function eventNature(state) {

    function getTime() {
        return state.time
    } 

    function getPlace() {
        return state.place
    } 

    return {
        getTime,
        getPlace
    }
};


function dataType(state) {

    function getType() {
        return state.type
    } 
    function getUnit() {
        return state.unit
    } 

    return {
        getType,
        getUnit
    }
};

function dateInterval(fromDate, toDate){

    function getFrom() {
        return fromDate
    } 
    function getTo() {
        return toDate
    }

    function contains(date) {
        if(date>getFrom() && date<getTo()){
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


function weatherData(state) {
    
    const event = eventNature(state)
    const type = dataType(state)

    function getValue() {
        return state.value
    }

    return {
        ...event, ...type, getValue
    }
}

// const state = {
//     time: Date(),
//     place: 'Horsens',
//     value: '123'
// }
// const data = weatherData(state)
// console.log(data.getTime())

function temperature(time, place, type, unit, value) {
    const state = {time, place, type, unit, value}
    const weatherDataState = weatherData(state)

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
        ...weatherDataState, convertToC, convertToF, toString
    }
}

// TESTER CODE
// const data = temperature(time=Date(), place = 'Horsens', type='Temperature', unit='C', value='123' )
// console.log(data.toString())
// console.log(data.getUnit())
// console.log(data.getValue())
// data.convertToF()
// console.log(data.getUnit())
// console.log(data.getValue())
// console.log(data.getPlace())

function precipitation(time, place, type, unit, value) {
    const state = {time, place, type, unit, value}
    const weatherDataState = weatherData(state)

    function getPrecipitationType() {
        return state.type
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
        ...weatherDataState, getPrecipitationType, convertToInches, convertToMM, toString
    }
}

// // TESTER CODE
// const data = precipitation(time=Date(), place='Horsens', type='Precipitation', unit='MM', value=30 )
// console.log(data.toString())
// console.log(data.getUnit())
// console.log(data.getValue())
// data.convertToInches()
// console.log(data.getUnit())
// console.log(data.getValue())
// console.log(data.getPlace())


function wind(direction, time, place, type, unit, value) {
    const state = {direction, time, place, type, unit, value}
    const weatherDataState = weatherData(state)

    function getDirection() {
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
// TESTER CODE
// const data = wind(direction='West', time=Date(), place= 'Horsens', type='Wind', unit='M/S', value=3)
// console.log(data.toString())
// console.log(data.getUnit())
// console.log(data.getValue())
// data.convertToMPH()
// console.log(data.getUnit())
// console.log(data.getValue())
// console.log(data.getPlace())


// IS EMPTY???
// function cloudCoverage(cloudPercentage, time, place, type, unit, value) {
//     const state = {cloudPercentage, time, place, type, unit, value}
//     const weatherDataState = weatherData(state)

//     function getCloudPercentage() {
//         return state.cloudPercentage
//     }

//     return {
//         ...weatherDataState, getCloudPercentage
//     }
// }



function WeatherHistory() {
    let placeFilter = ''
    let typeFilter = ''
    let periodFilter = ''

    //Contains WeatherData objects
    let data = []
    // const filteredData = []

    function getData() {
        return data
    }

    function getPlaceFilter() {
        return placeFilter
    }    

    function setPlaceFilter(place) {
        placeFilter = place
    }

    function clearPlaceFilter() {
        placeFilter = ''
    }

    function getTypeFilter() {
        return placeFilter
    }    

    function setTypeFilter(type) {
        typeFilter = type
    }

    function clearTypeFilter() {
        typeFilter = ''
    }

    function getPeriodFilter() {
        return periodFilter
    }    

    function setPeriodFilter(period) {
        periodFilter = period
    }

    function clearPeriodFilter() {
        periodFilter = ''
    }

    function convertToUSUnits() {
        data.forEach(dataPoint => {
            if(dataPoint.getType() === 'Wind') {
                dataPoint.convertToMPH()
            }
            else if(dataPoint.getType() === 'Temperature') {
                dataPoint.convertToF()
            }
            else if(dataPoint.getType() === 'Precipitation') {
                dataPoint.convertToInches()
            }
        })
    }

    function convertToInternationalUnits() {
        data.forEach((dataPoint) => {
            if(dataPoint.getType() === 'Wind') {
                dataPoint.convertToMperS()
            }
            else if(dataPoint.getType() === 'Temperature') {
                dataPoint.convertToC()
            }
            else if(dataPoint.getType() === 'Precipitation') {
                dataPoint.convertToMM()
            }
        })
    }

    //"extraData" is an array of type WeatherData
    function add(extraData) {
        data = data.concat(extraData)
    }

    function getFilteredData() {
        //FILTER THE DATA FROM "data" to "filteredData"
        
        if (typeFilter === '' && placeFilter === '' && periodFilter === '') {
            filteredData = data
        }
        else if (typeFilter !== '' && placeFilter !== '' && periodFilter !== '') {
            filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter 
            && dataPoint.getPlace() === placeFilter 
            && getPeriodFilter().contains(dataPoint.getTime()));
        }
        else if (typeFilter !== '' && placeFilter === '' && periodFilter === '') {
            filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter);
        }
        else if (typeFilter === '' && placeFilter !== '' && periodFilter === '') {
            filteredData = data.filter(dataPoint => dataPoint.getPlace() === placeFilter);
        }
        else if (typeFilter === '' && placeFilter === '' && periodFilter !== '') {
            filteredData = data.filter(dataPoint => getPeriodFilter().contains(dataPoint.getTime()));
        }
        else if (typeFilter !== '' && placeFilter !== '' && periodFilter === '') {
            filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter
            && dataPoint.getPlace() === placeFilter);
        }
        else if (typeFilter !== '' && placeFilter === '' && periodFilter !== '') {
            filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter);
        }
        else if (typeFilter === '' && placeFilter !== '' && periodFilter !== '') {
            filteredData = data.filter(dataPoint => dataPoint.getPlace() === placeFilter 
            && getPeriodFilter().contains(dataPoint.getTime()));
        }        
        else {
            filteredData = data
        }
        
        return filteredData
    }

    return {
        getPlaceFilter,
        getTypeFilter,
        getPeriodFilter,
        setPlaceFilter,
        setTypeFilter,
        setPeriodFilter,
        clearPlaceFilter,
        clearTypeFilter,
        clearPeriodFilter,
        convertToInternationalUnits,
        convertToUSUnits,
        add,
        getFilteredData,
        getData
    }
}


//WEATHER HISTORY TESTING
const fromTester = new Date('December 17, 1995 03:24:00')
const toTester = new Date('December 17, 2021 05:00:00')

const interval = dateInterval(fromTester, toTester) 

const currentTime = new Date('September 17, 2000 15:35:00')

const data1 = wind(direction='West', time=currentTime, place= 'Horsens', type='Wind', unit='M/S', value=3)
const data2 = wind(direction='East', time=currentTime, place= 'Aarhus', type='Wind', unit='MPH', value=15)

const data3 = temperature(time=currentTime, place= 'Horsens', type='Temperature', unit='C', value=30)
const data4 = temperature( time=currentTime, place= 'Aarhus', type='Temperature', unit='F', value=69)

const data5 = precipitation(time=currentTime, place= 'Horsens', type='Precipitation', unit='MM', value=30)
const data6 = precipitation(time=currentTime, place= 'Aarhus', type='Precipitation', unit='Inch', value=3)

dataList = [data1, data2, data3, data4, data5, data6]
// console.log(dataList)

const history = WeatherHistory()
// history.setPlaceFilter('Horsens')
// history.setTypeFilter('Temperature')
history.setPeriodFilter(interval)
// console.log(history)
history.add(dataList)

// console.log(history.getFilteredData())
list = history.getFilteredData()

for (let index = 0; index < list.length; index++) {
    console.log(list[index].toString())
    
}
//END OF WEATHER HISTORY TESTING



function weatherPrediction(state) {

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
        return 0
    }

    function getMax() {
        return 999
    }

    return {
        ...event, ...type, matches, getMin, getMax 
    }
}

function temperaturePrediction(time, place, type, unit, value) {
    
    const state = {time, place, type, unit, value}
    const weatherPredictionState = weatherPrediction(state)
    
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

function precipitationPrediction(time, place, type, unit, value) {
    const state = {time, place, type, unit, value}
    const weatherPredictionState = weatherPrediction(state)

    function getExpectedTypes() {
        return ['Light rain', 'Rain', 'Heavy rain', 'Showers']
    }

    function matches(data) {
        return 'Yes'
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
        ...weatherDataState, getPrecipitationType, convertToInches, convertToMM, toString
    }
} 

function windPrediction(direction, time, place, type, unit, value) {
    const state = {direction, time, place, type, unit, value}
    const weatherPredictionState = weatherPrediction(state)

    function getExpectedDirections() {
        return ['West', 'East', 'North', 'South', 'NorthEast', 'NorthWest', 'SouthEast', 'SouthWest']
    }

    function matches(date) {
        return 'Yes'
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

function cloudCoveragePrediction() {

}

function WeatherForecast() {
    let placeFilter = ''
    let typeFilter = ''
    let periodFilter = ''

    //Contains WeatherPrediction objects
    let data = []
    // const filteredData = []

    function getData() {
        return data
    }

    function getPlaceFilter() {
        return placeFilter
    }    

    function setPlaceFilter(place) {
        placeFilter = place
    }

    function clearPlaceFilter() {
        placeFilter = ''
    }

    function getTypeFilter() {
        return placeFilter
    }    

    function setTypeFilter(type) {
        typeFilter = type
    }

    function clearTypeFilter() {
        typeFilter = ''
    }

    function getPeriodFilter() {
        return periodFilter
    }    

    function setPeriodFilter(period) {
        periodFilter = period
    }

    function clearPeriodFilter() {
        periodFilter = ''
    }

    function convertToUSUnits() {
        data.forEach(dataPoint => {
            if(dataPoint.getType() === 'Wind') {
                dataPoint.convertToMPH()
            }
            else if(dataPoint.getType() === 'Temperature') {
                dataPoint.convertToF()
            }
            else if(dataPoint.getType() === 'Precipitation') {
                dataPoint.convertToInches()
            }
        })
    }

    function convertToInternationalUnits() {
        data.forEach((dataPoint) => {
            if(dataPoint.getType() === 'Wind') {
                dataPoint.convertToMperS()
            }
            else if(dataPoint.getType() === 'Temperature') {
                dataPoint.convertToC()
            }
            else if(dataPoint.getType() === 'Precipitation') {
                dataPoint.convertToMM()
            }
        })
    }

    //"extraData" is an array of type WeatherPrediction
    function add(extraData) {
        data = data.concat(extraData)
    }

    function getFilteredData() {
        //FILTER THE DATA FROM "data" to "filteredData"
        
        if (typeFilter === '' && placeFilter === '' && periodFilter === '') {
            filteredData = data
        }
        else if (typeFilter !== '' && placeFilter !== '' && periodFilter !== '') {
            filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter 
            && dataPoint.getPlace() === placeFilter 
            && getPeriodFilter().contains(dataPoint.getTime()));
        }
        else if (typeFilter !== '' && placeFilter === '' && periodFilter === '') {
            filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter);
        }
        else if (typeFilter === '' && placeFilter !== '' && periodFilter === '') {
            filteredData = data.filter(dataPoint => dataPoint.getPlace() === placeFilter);
        }
        else if (typeFilter === '' && placeFilter === '' && periodFilter !== '') {
            filteredData = data.filter(dataPoint => getPeriodFilter().contains(dataPoint.getTime()));
        }
        else if (typeFilter !== '' && placeFilter !== '' && periodFilter === '') {
            filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter
            && dataPoint.getPlace() === placeFilter);
        }
        else if (typeFilter !== '' && placeFilter === '' && periodFilter !== '') {
            filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter);
        }
        else if (typeFilter === '' && placeFilter !== '' && periodFilter !== '') {
            filteredData = data.filter(dataPoint => dataPoint.getPlace() === placeFilter 
            && getPeriodFilter().contains(dataPoint.getTime()));
        }        
        else {
            filteredData = data
        }
        
        return filteredData
    }

    return {
        getPlaceFilter,
        getTypeFilter,
        getPeriodFilter,
        setPlaceFilter,
        setTypeFilter,
        setPeriodFilter,
        clearPlaceFilter,
        clearTypeFilter,
        clearPeriodFilter,
        convertToInternationalUnits,
        convertToUSUnits,
        add,
        getFilteredData,
        getData
    }
}
