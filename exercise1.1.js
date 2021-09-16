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

function dateInterval(state){
    
    function getFrom() {
        return state.from
    } 
    function getTo() {
        return state.to
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

// TESTER CODE
const data = precipitation(time=Date(), place='Horsens', type='Precipitation', unit='MM', value=30 )
console.log(data.toString())
console.log(data.getUnit())
console.log(data.getValue())
data.convertToInches()
console.log(data.getUnit())
console.log(data.getValue())
console.log(data.getPlace())


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
// const data = wind(direction='West', time=Date(), place= 'Horsens', type='Wind', unit='M/S', value=3 )
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





// function WeatherHistory() {
    
// }



// function weatherPrediction(weatherPredictionState) {
//     const _data = weatherData()
//     const state = {weatherPredictionState}
//     const event = eventNature(state)
//     const type = dataType(state)

//     function matches(data) {
//         return data.time === _data.getTime() 
//         && data.place === _data.getPlace()
//         && data.type === _data.getType()
//         && data.unit === _data.getUnit()
//         && data.value === _data.getValue()
//     }

//     function getMin() {
//         return 0
//     }

//     function getMax() {
//         return 999
//     }

//     return {
//         ...event, ...type, matches, getMax, getMin
//     }
// }

// function temperaturePrediction() {

// }

// // const fromTester = new Date('December 17, 1995 03:24:00')
// // const toTester = new Date('December 17, 2021 05:00:00')
// // const dateTester = new Date()
// // const state = {
// //     fromTester, toTester, dateTester
// // }
// // const intervalTester = new DateInterval(state)

// // console.log(`${intervalTester.getFrom()}`)


// // console.log(`DATE CONTAINS: ${intervalTester.contains(state.dateTester)}`)
