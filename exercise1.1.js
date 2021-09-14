function Event(state, time, place) {
    const _time = time
    const _place = place

    const getTime = () => _time
    const getPlace = () => _place

    return {
        getTime,
        getPlace
    }
};


function DataType(state, type, unit) {
    const _type = type
    const _unit = unit

    const getType = () => _type
    const getUnit = () => _unit

    return {
        getType,
        getUnit
    }
};

function DateInterval(from, to, date){
    const _from = from
    const _to = to
    const _date = date

    const getFrom = ()=> _from
    const getTo = ()=> _to
    const contains = function(){
        if(_date>_from && _date<_to){
            return true
        }
        else{
            return false
        }
    }

    return {
        getFrom,
        getTo,
        contains
    }
} 

const fromTester = new Date('December 17, 1995 03:24:00')
const toTester = new Date('December 17, 2021 05:00:00')
const dateTester = new Date()
const intervalTester = new DataInterval(fromTester, toTester, dateTester)

console.log(`${intervalTester}`)


console.log(`DATE CONTAINS: ${intervalTester.contains()}`)